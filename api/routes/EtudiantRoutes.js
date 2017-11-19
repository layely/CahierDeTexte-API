'use strict';
module.exports = function (app) {
    var etudiantController = require('./../controllers/EtudiantController');

    app.route('/etudiants')
        .get(etudiantController.listAll)
        .post(etudiantController.addOne);

    app.route('/etudiants/:_id')
        .get(etudiantController.getOne)
        .put(etudiantController.modifyOne)
        .delete(etudiantController.deleteOne);
};