'use strict';
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Load database configuration
var db = require('./config/db');

//Load created models
var Matiere = require('./api/models/MatiereModel');
var Etudiant = require('./api/models/EtudiantModel');

//Create a connection
mongoose.Promise = global.Promise;
mongoose.connect(db.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add middlewares
const middlewares = require('./api/midllewares/');
app.use(middlewares);

//importing routes
var matiereRoutes = require('./api/routes/MatiereRoutes');
var etudiantRoutes = require('./api/routes/EtudiantRoutes');

//add routes
matiereRoutes(app);
etudiantRoutes(app);

app.listen(port);

console.log('Cahier de Texte RESTful API server started on: ' + port);
