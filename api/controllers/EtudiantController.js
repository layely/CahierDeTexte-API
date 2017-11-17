'use strict';
var mongoose = require('mongoose'),
    Etudiant = mongoose.model('Etudiant');

var shortid = require('shortid');

exports.listAllEtudiants = function (req, res) {
    const queryConditions = {};

    Etudiant.find(queryConditions, function (err, etudiants) {
        if (err) {
            res.send(err);
        }
        res.json(etudiants);
    });
};

exports.addEtudiant = function (req, res) {
    var newEtudiant = new Etudiant(req.body);

    newEtudiant.save(function (err, etudiant) {
        if (err) {
            res.send(err);
        }
        res.json(etudiant);
    });
};

exports.getEtudiant = function (req, res) {
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

exports.modifyEtudiant = function (req, res) {
    const queryConditions = {
        id: req.params.id,
    };

    const modifiedEtudiant = req.body;
    Etudiant.update(queryConditions, modifiedEtudiant, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.deleteEtudiant = function (req, res) {
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