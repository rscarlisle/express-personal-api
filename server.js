// require express and other modules
var express = require('express'),
    app = express();
app.use(express.static('public'));
// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/
var headGear = [
{_id:0, name: "fedora", color: "dark_brown", ribbon:true, ribbon_color: "brown"},
{_id:1, name: "fedora", color: "black", ribbon:true, ribbon_color: "black"},
{_id:2, name: "fedora", color: "grey", ribbon:true, ribbon_color: "black"},
{_id:3, name: "fedora", color: "burgundy", ribbon:true, ribbon_color: "grey"},
];
// var db = require('./models');

/**********
 * ROUTES *
 **********/

 app.get('/api/headGear', function readShoes(req, res) {
     res.json({ data: headGear});
 });


/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/namelessprofit/express_self_api/README.md", // CHANGE ME
    baseUrl: "http://myhats.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/hats", description: "Crate a new hat"} // CHANGE ME
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
