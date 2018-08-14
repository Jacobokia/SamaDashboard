var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path')

var app = express();

const route = require('./routes/route');

//port no.
const port = 3000;

//testing a server
app.get('/',function(req, res){
  res.send('server is working')
});

app.listen(3000,function(){
  console.log('server is running on port');
})
