'use strict';
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.set('debug', 'true');

//Load database configuration
const db = require('./config/db');

//Load created models
const loadModels = require('./api/helpers/loadModels');
loadModels();

//Create a database connection 
mongoose.Promise = global.Promise;
mongoose.connect(db.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add middlewares
const middlewares = require('./api/midllewares/');
app.use(middlewares);

//add routes
const importAndLoadRoutes = require('./api/helpers/setUpRoutes');
importAndLoadRoutes(app);

app.listen(port);

console.log('Cahier de Texte RESTful API server started on: ' + port);
