var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Load database configuration
var db = require('./config/db');

//Load created models
var Task = require('./api/models/MatiereModel');

//Create a connection
mongoose.Promise = global.Promise;
mongoose.connect(db.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing routes
var matiereRoutes = require('./api/routes/MatiereRoutes');

matiereRoutes(app);

app.listen(port);

console.log('Cahier de Texte RESTful API server started on: ' + port);
