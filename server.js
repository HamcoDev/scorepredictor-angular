var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongodb = require("mongodb"),
    ObjectID = mongodb.ObjectID,
    request = require("request");

var FIXTURES_COLLECTION = 'fixtures';
var currentMatchday = 32;

var app = express();
app.use(express.static(__dirname + "/web"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

//Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test', function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready...");

    // Initialize the app.    
    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/updateFixtures"
 *    GET: populates db with all fixtures
 */

app.get("/updateFixtures", function(req, res) {
    request.get("http://api.football-data.org/alpha/soccerseasons/398/fixtures", function(error, response, body) {
        var json = JSON.parse(body).fixtures;

        var dropCollection = db.collection(FIXTURES_COLLECTION).drop();
        if (dropCollection === false) {
            res.status(500);
        }
        else {
            db.collection(FIXTURES_COLLECTION).insert(json, function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to update fixtures.");
                } else {
                    res.status(201).json(doc.ops[0]);
                }
            });
        }
    });
});

/*  "/viewFixtures"
 *    GET: gets current week's fixtures from db
 */
app.get("/viewFixtures/:matchday", function(req, res) {
    console.log(req.params.matchday);
    var matchdayParam = req.params.matchday;
  db.collection(FIXTURES_COLLECTION).find({"matchday": 34}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get fixtures.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/matchday"
 *    GET: gets current week's fixtures from db
 */
app.get("/matchday", function(req, res) {
  db.collection(FIXTURES_COLLECTION).find({ "status": "TIMED" }).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get fixtures.");
    } else {
      res.status(200).json(docs[0].matchday);
    }
  });
});

/*  "/fixtures/:id"
 *    GET: find fixture by id
 *    PUT: update fixture by id
 *    DELETE: deletes fixture by id
 */

// app.get("/fixtures/:id", function(req, res) {
// });

// app.put("/fixtures/:id", function(req, res) {
// });

// app.delete("/fixtures/:id", function(req, res) {
// }); 
