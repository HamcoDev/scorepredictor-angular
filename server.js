var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var FIXTURES_COLLECTION = "fixtures";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGOLAB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/fixtures"
 *    GET: finds all fixtures
 *    POST: creates a new fixture
 */

app.get("/fixtures", function(req, res) {
});

app.post("/fixtures", function(req, res) {
      var newFixture = req.body;
  newFixture.createDate = new Date();

//   if (!(req.body.firstName || req.body.lastName)) {
//     handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//   }

  db.collection(FIXTURES_COLLECTION).insertOne(newFixture, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new fixture.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/fixtures/:id"
 *    GET: find fixture by id
 *    PUT: update fixture by id
 *    DELETE: deletes fixture by id
 */

app.get("/fixtures/:id", function(req, res) {
});

app.put("/fixtures/:id", function(req, res) {
});

app.delete("/fixtures/:id", function(req, res) {
});