let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
let Courses = [{}];
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/add", (req, res) => {
    res.sendFile(__dirname + "/Add.html");
})


app.get("/update", (req, res) => {
    res.sendFile(__dirname + "/Update.html");
})

app.get("/delete", (req, res) => {
    res.sendFile(__dirname + "/Delete.html");
})

app.get("/fetch", (req, res) => {
    res.sendFile(__dirname + "/Fetch.html");
})

app.post("/AddCDetails", (req, res) => {
    let cid = req.body.cid;
    let cname = req.body.cname;
    let camount = req.body.camount;
    let cdescription = req.body.cdescription;
    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017"

    var myobj = { id: cid, course: cname, description: cdescription, amount: camount };
    console.log(myobj)

    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("meanstack");

            db.collection("Courses").insertOne(myobj, (err2, result) => {
                if (!err2) {
                    console.log(result.insertedCount);
                } else {
                    console.log(err2.message);
                }
                client.close();
            });
        }
    });
    res.sendFile(__dirname + "/Add.html");
})


app.delete("/deleteCDetails/:cid", (req, res) => {
    let cid = req.params.cid;
    console.log(cid)
    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017";
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("meanstack");
            db.collection("Courses").deleteOne({ id: cid }, (err2, result) => {
                if (!err2) {
                    if (result.deletedCount > 0) {
                        console.log("Record deleted successfully")
                    } else {
                        console.log("Record not present")
                    }
                }
                client.close();
            })
        }
    })
    res.sendFile(__dirname + "/Delete.html")
})


app.post("/updateCourse", (req, res) => {
    console.log(req.body);
    console.log(typeof(req.body))

    var cid = req.body.id;
    var camount = req.body.amount;

console.log(cid)
console.log(camount)

    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017";
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
    if(!err1){
        let db = client.db("meanstack");
        var myquery = { id: cid };
        var newvalues = { $set: {amount: camount } };
        db.collection("Courses").updateOne(myquery,newvalues,(err2,result)=> {
            if(!err2){
                   if(result.modifiedCount>0){
                        console.log("Record updated successfully")
                   }else {
                        console.log("Record didn't update");
                   }
            }
            client.close();
        })           
      }
    })

    // res.json(Courses);
})

app.get("/get", (req, res) => {

    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017";
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("meanstack");
            db.collection("Courses").find({}).toArray(function (err, result) {
                if (err) throw err;
                // client.close();
                console.log(result);
                return res.send(result)
            });
        }
    })


    // res.send(__dirname + "/Fetch.html");
})
app.listen(9090, () => console.log("Server is Running on port 9090"));


