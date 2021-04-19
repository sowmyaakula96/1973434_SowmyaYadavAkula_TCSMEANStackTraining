let app = require("express")();
let http = require("http").Server(app);   // to load the library we have run port number using hhtp module 
let io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
    console.log("Client connected to application.....");

    socket.on("chat", (msg) => {
        console.log(msg);

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/mydb";

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = { name: msg.name, message: msg.message };
            dbo.collection("chatlog").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        });
    })
})
http.listen(9090, () => console.log('server running on port number 9090'));



