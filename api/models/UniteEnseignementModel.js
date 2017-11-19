'use strict';
const mongoose = require('mongoose');
var idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;


var uniteEnseignementSchema = new Schema({
    _id: { type: Number, required: true },
    nom: { type: String, required: true, uppercase: true },
    credit: { type: Number, required: true },
    matieres: [{ type: Number, required: true, ref: 'Matiere'}]
});

uniteEnseignementSchema.plugin(idvalidator);
module.exports = mongoose.model('UniteEnseignement', uniteEnseignementSchema);
