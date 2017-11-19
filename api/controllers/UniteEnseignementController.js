'use strict';
var mongoose = require('mongoose'),
    UniteEnseignement = mongoose.model('UniteEnseignement');

exports.listAll = function (req, res) {
    const queryConditions = {};

    UniteEnseignement.find(queryConditions, function (err, uniteEnseignements) {
        if (err) {
            res.send(err);
        }
        res.json(uniteEnseignements);
    });
};

exports.addOne = function (req, res) {
    var newUniteEnseignement = new UniteEnseignement(req.body);

    newUniteEnseignement.save(function (err, uniteEnseignement) {
        if (err) {
            res.send(err);
        }
        res.json(uniteEnseignement);
    });
};

exports.getOne = function (req, res) {
    const queryConditions = {
        _id: req.params._id
    };

    UniteEnseignement.findOne(queryConditions, function (err, uniteEnseignement) {
        if (err) {
            res.send(err);
        }
        res.json(uniteEnseignement);
    });
};

exports.modifyOne = function (req, res) {
    const queryConditions = {
        _id: req.params._id,
    };

    const modified = req.body;
    UniteEnseignement.update(queryConditions, modified, function (err, result) {
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

    UniteEnseignement.remove(queryConditions, function (err, result) {
        if (err) {
            res.end(err);
        }
        res.json(result);
    });
};