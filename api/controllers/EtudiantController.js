'use strict';
var mongoose = require('mongoose'),
    Etudiant = mongoose.model('Etudiant');

exports.listAll = function (req, res) {
    const queryConditions = {};

    Etudiant.find(queryConditions, function (err, etudiants) {
        if (err) {
            res.send(err);
        }
        res.json(etudiants);
    });
};

exports.addOne = function (req, res) {
    var newEtudiant = new Etudiant(req.body);

    newEtudiant.save(function (err, etudiant) {
        if (err) {
            res.send(err);
        }
        res.json(etudiant);
    });
};

exports.getOne = function (req, res) {
    const queryConditions = {
        id: req.params.id
    };

    Etudiant.findOne(queryConditions, function (err, etudiant) {
        if (err) {
            res.send(err);
        }
        res.json(etudiant);
    });
};

exports.modifyOne = function (req, res) {
    const queryConditions = {
        id: req.params.id,
    };

    const modified = req.body;
    Etudiant.update(queryConditions, modified, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.deleteOne = function (req, res) {
    const queryConditions = {
        id: req.params.id
    };

    Etudiant.remove(queryConditions, function (err, result) {
        if (err) {
            res.end(err);
        }
        res.json(result);
    });
};