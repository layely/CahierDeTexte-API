'use strict';
var mongoose = require('mongoose'),
    Matiere = mongoose.model('Matiere');

exports.listAllMatieres = function (req, res) {
    const queryConditions = {};

    Matiere.find(queryConditions, function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
};

exports.addMatiere = function (req, res) {
    var newMatiere = new Matiere(req.body);

    newMatiere.save(function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
};

exports.getMatiere = function (req, res) {
    // var query = Matiere.where({ nom: req.params.nom });
    // query.findOne(function (err, matiere) {
    const queryConditions = {
        nom: req.params.nom
    };

    Matiere.findOne(queryConditions, function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
};

exports.modifyMatiere = function (req, res) {
    const queryConditions = {
        nom: req.params.nom,
    };

    const queryOptions = {
        new: true
    };

    const modifiedMatiere = req.body;
    Matiere.update(queryConditions, req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.deleteMatiere = function (req, res) {
    const queryConditions = {
        nom: req.params.nom
    };

    Matiere.remove(queryConditions, function (err, result) {
        if (err) {
            res.end(err);
        }
        res.json(result);
    });
};