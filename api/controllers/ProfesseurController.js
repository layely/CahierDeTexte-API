'use strict';
var mongoose = require('mongoose'),
    Professeur = mongoose.model('Professeur');

exports.listAll = function (req, res) {
    const queryConditions = {};

    Professeur.find(queryConditions, function (err, professeurs) {
        if (err) {
            res.send(err);
        }
        res.json(professeurs);
    });
};

exports.addOne = function (req, res) {
    var newProfesseur = new Professeur(req.body);

    newProfesseur.save(function (err, professeur) {
        if (err) {
            res.send(err);
        }
        res.json(professeur);
    });
};

exports.getOne = function (req, res) {
    const queryConditions = {
        _id: req.params._id
    };

    Professeur.findOne(queryConditions, function (err, professeur) {
        if (err) {
            res.send(err);
        }
        res.json(professeur);
    });
};

exports.modifyOne = function (req, res) {
    const queryConditions = {
        _id: req.params._id,
    };

    const modified = req.body;
    Professeur.update(queryConditions, modified, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.deleteOne = function (req, res) {
    const queryConditions = {
        _id: req.params._id
    };

    Professeur.remove(queryConditions, function (err, result) {
        if (err) {
            res.end(err);
        }
        res.json(result);
    });
};