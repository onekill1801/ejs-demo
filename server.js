var express = require('express');
var app = express();

app.use(express.static("./"));
app.use(express.static("./views/js"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";
  var nhietdo = 35;
  var doam = 50;
  res.render('pages/about', {
    mascots: mascots,
    tagline: tagline,
    nhietdo: nhietdo,
    doam: doam
  });
});

app.get('/setDoAm', function(req, res) {
  // lay thong tin do am
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }, null, 3));
});

app.get('/setNhietDo', function(req, res) {
// lay thong tin nhiet do
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }, null, 3));
});

app.get('/getDoAm', function(req, res) {
  // lay thong tin do am
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }, null, 3));
});

app.get('/getNhietDo', function(req, res) {
// lay thong tin nhiet do
  res.render('pages/about');
});

app.get('/ctrlFan', function(req, res) {
  // dieu khien quat
  res.render('pages/about');
});

app.get('/ctrlLamp', function(req, res) {
  // dieu khien den
  res.render('pages/about');
});


app.listen(8089);
console.log('Server is listening on port 8089');