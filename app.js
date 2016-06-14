

// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./routes/movies');
var mongoose = require('mongoose');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file


var dbName='movieDB';

//provide a sensible default for local development
mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + dbName;
//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + dbName;
}


mongoose.connect(mongodb_connection_string);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', movies);

module.exports = app;
