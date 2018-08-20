//Install express server
const express = require('express');
var bodyParser = require("body-parser");
const app = express();

// Serve only the static files form the dist directory
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

var Datastore = require('nedb')
  , db = new Datastore({ filename: 'doners.db', autoload: true });

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

console.log(__dirname)
var auth = require('http-auth');
var basic = auth.basic({
	realm: "Bala.",
	file: __dirname + "/users.htpasswd" 
});


app.post('/api/contributions', function(req, res){

  const contribution = req.body

  db.insert(contribution, function (err, newDocs) {
    if(err){
      handleError(res, err.message, "Failed to get list of contributions.");
    }else{
      res.status(201).send('');
    }
  });

})

app.get('/api/contributions',function(req, res){

  db.find({}, function (err, docs) {
    if(err){
      handleError(res, err.message, "Failed to get list of contributions.");
    }else{
      res.status(200).json(docs);
    }
  });

})

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

app.get("/api/summary", function(req, res) {

  db.find({}, function (err, docs) {
    if(err){
      handleError(res, err.message, "Failed to get list of contributions.");
    }else{
      const totalNeeded = 1000

      const count = docs.length;

      const totalRaised = docs.reduce((acc, curr) => {
        return acc + curr.amount;
      }, 0)

      const percentage = ((totalRaised/totalNeeded)*100).toFixed(0)

      res.status(200).json({
        totalNeeded,
        totalRaised,
        percentage,
        count
    });
    }
  });
  });