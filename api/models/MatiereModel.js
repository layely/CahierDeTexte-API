"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matiereSchema = new Schema({
    nom: { type: String, required: true, uppercase: true },
    volumeHoraire: { type: Number, min: 0, max: 200 },
});

module.exports = mongoose.model('Matiere', matiereSchema);
