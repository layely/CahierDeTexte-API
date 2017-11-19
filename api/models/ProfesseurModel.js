"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var professeurSchema = new Schema({
    _id: { type: Number, required: true },
    nom: { type: String, required: true, uppercase: true },
    prenom: { type: String, required: true, uppercase: true },
    // genre: { type: String, required: true, uppercase: true, enum: ['M', 'F', 'm', 'f'] },
    telephone: { type: Number },
    email: {type: String}
});

module.exports = mongoose.model('Professeur', professeurSchema);