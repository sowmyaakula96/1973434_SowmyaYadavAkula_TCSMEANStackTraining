/*1st way 
let express = require("express")
let app = express();
*/
//2nd way 

let app = require("express")();
var request = require('request');
let bodyParser = require("body-parser");
// enable body part data
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json())  // enable json data. 
let port = 9090;
app.get("/", (req, res) => {
    //console.log(__dirname)
    //console.log(__dirname+"/task.html")
    res.sendFile(__dirname + "/task.html");
});

app.get("/taskList", (req, res) => {
    //console.log(__dirname)
    //console.log(__dirname+"/task.html")
    res.sendFile(__dirname + "/list.html");
});

app.delete('/tasks/:id', function (req, res) {
    var id = req.params.id;
    res.send("Success")
});

app.post("/addTask", (req, res) => {
    let empid = req.body.empid;
    let taskid = req.body.taskid;
    let task = req.body.task;
    let deadline = req.body.deadline;

    var obj = {
        id: taskid,
        task: empid,
        description: task,
        deadline: deadline
    }

    var postOptions = {
        'method': 'POST',
        'url': 'http://localhost:3000/tasks',
        'headers': {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    request(postOptions, function (err, postResponse) {
        if (err) {
            console.log('err', err)
            res.send("Failure")
        } else {
            res.redirect('/taskList');
        }
    })
});


app.listen(port, () => console.log(`Server running on port number ${port}`))
