'use strict';
const mongoose = require('mongoose');
var idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;

var coursSchema = new Schema({
    _id: { type: Number, required: true },
    description: { type: String, required: true },
    heureDeb: { type: Number, required: true },
    heureFin: { type: Number, required: true },
    date: { type: Number, required: true },
    professeur: { type: Number, required: true, ref: 'Professeur' },
    matiere: { type: Number, required: true, ref: 'Matiere' },
    etudiantsAbsents: [{ type: Number, ref: 'Etudiant' }]
});

coursSchema.plugin(idvalidator);
module.exports = mongoose.model('Cours', coursSchema);