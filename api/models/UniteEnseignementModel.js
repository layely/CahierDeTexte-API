'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var uniteEnseignementSchema = new Schema({
    id: { type: Number, required: true },
    nom: { type: String, required: true, uppercase: true },
    credit: { type: Number, required: true },
    matieres: { type: Schema.Types.Array }
});

module.exports = mongoose.model('UniteEnseignement', uniteEnseignementSchema);
