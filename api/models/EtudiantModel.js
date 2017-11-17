"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var etudiantSchema = new Schema({
    id: { type: Number, default: 0 },
    nom: { type: String, required: true, uppercase: true },
    prenom: { type: String, required: true, uppercase: true },
    genre: { type: String, required: true, uppercase: true, enum: ['M', 'F', 'm', 'f'] }, 
    telephone: { type: Number },
    email: {type: String},
});

module.exports = mongoose.model('Etudiant', etudiantSchema);