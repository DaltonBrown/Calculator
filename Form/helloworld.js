var firstName = null;
var lastName = null;
var gender = null;

var mongoClient = require("mongodb").MongoClient;

var express = require("express");

var app = express();
var port = 8080;
var bodyParser = require("body-parser");
var dbConnection;

// MongoDB has its own URL schema.
mongoClient.connect("mongodb://localhost:27017/testOne", function(error, db) {

dbConnection = db.db("testOne");

if (error) {
        return console.log(Error);
    }

    app.use(bodyParser.json({}));
    
    app.post("/customer", function(req, res) {
        var content = req.body;
        console.log(content);
        firstName = content.firstName;
        lastName = content.lastName;
        gender = content.gender;
        console.log(firstName, lastName, gender);
        var documentUpdate = {};
        documentUpdate.firstName = firstName;
        documentUpdate.lastName = lastName;
        documentUpdate.gender = gender;

        var col = dbConnection.collection("customers");

        col.updateOne({"firstName":firstName, "lastName":lastName}, {$set:documentUpdate}, {upsert:true}, function(err, result) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send("OK");
            }
        });

    });
    
    app.get("/customer", function(req, res) {
        var customerCollection = dbConnection.collection("customers");
        customerCollection.find({}).toArray(function(err, doc) {
            if (error) {
                // 500 = Internal Server Error
                return res.sendStatus(500);
            }

            return res.send(doc[0]);
        });
    });
    
    app.get("*", express.static("."));
    
    app.listen(port, function() {
        console.log("Listening " + port);
    });
});
