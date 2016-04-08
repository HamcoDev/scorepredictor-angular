var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongodb = require("mongodb"),
    ObjectID = mongodb.ObjectID,
    request = require("request");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//use when testing locally
// var port = 3030;
// app.listen(port);
// console.log('Listening on port ' + port + '...');

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

//Connect to the database before starting the application server.
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
 
app.get("/updateFixtures", function(req, res) {
    request.get("http://api.football-data.org/alpha/soccerseasons/398/fixtures", function (error, response, body) {
        var json = JSON.parse(body).fixtures;
        
        db.collection(FIXTURES_COLLECTION).insert(json, function(err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to update fixtures.");
            } else {
                res.status(201).json(doc.ops[0]);
    }
  });
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
