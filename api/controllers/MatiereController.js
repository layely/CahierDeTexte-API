'use strict';
var mongoose = require('mongoose'),
    Matiere = mongoose.model('Matiere');

exports.listAll = function (req, res) {
    const queryConditions = {};

    Matiere.find(queryConditions, function (err, matieres) {
        if (err) {
            res.send(err);
        }
        res.json(matieres);
    });
};

exports.addOne = function (req, res) {
    var newMatiere = new Matiere(req.body);

    newMatiere.save(function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
};

exports.getOne = function (req, res) {
    // var query = Matiere.where({ _id: req.params._id });
    // query.findOne(function (err, matiere) {
    const queryConditions = {
        _id: req.params._id
    };

    Matiere.findOne(queryConditions, function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
};

exports.modifyOne = function (req, res) {
    const queryConditions = {
        _id: req.params._id,
    };

    const modified = req.body;
    Matiere.update(queryConditions, modified, function (err, result) {
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

    Matiere.remove(queryConditions, function (err, result) {
        if (err) {
            res.end(err);
        }
        res.json(result);
    });
};