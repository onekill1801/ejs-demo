var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/about', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/about1', function(req, res) {
  res.render('pages/about');
});

app.get('/about2', function(req, res) { 
    res.render('pages/about');
});

app.listen(8089);
console.log('Server is listening on port 8089');