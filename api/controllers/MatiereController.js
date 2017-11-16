'use strict';
var mongoose = require('mongoose'),
    Matiere = mongoose.model('Matiere');

exports.listAllMatieres = function (req, res) {
    Matiere.find({}, function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
}

exports.addMatiere = function (req, res) {
    var newMatiere = new Matiere(req.body);
    
    newMatiere.save(function(err, matiere) {
        if(err) {
            res.send(err);
        }
        res.json(matiere);
    });
}

exports.getMatiere = function (req, res) {

}

exports.modifyMatiere = function (req, res) {

}

exports.deleteMatiere = function (req, res) {

}