var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  var campgrounds =[
  {name: 'Salomon Creek', image: 'https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg'},
  {name: 'Granite Hill', image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg'},
  {name: 'SMountain Goat\'s Rest', image: 'https://farm4.staticflickr.com/3751/9580653400_e1509d6696.jpg'}
  ]
  res.render('campgrounds',{campgrounds:campgrounds});  
});

app.listen(3000,  process.env.IP, function() {
  console.log('The YelpCamp server has started');
});