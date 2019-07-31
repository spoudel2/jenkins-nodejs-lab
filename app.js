var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Nodejs for github ci cd');
});

app.listen(process.env.PORT || 4000);

module.exports = app;
