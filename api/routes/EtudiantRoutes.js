'use strict';
module.exports = function (app) {
    var etudiantController = require('./../controllers/EtudiantController');

    app.route('/etudiants')
        .get(etudiantController.listAllEtudiants)
        .post(etudiantController.addEtudiant);

    app.route('/etudiants/:id')
        .get(etudiantController.getEtudiant)
        .put(etudiantController.modifyEtudiant)
        .delete(etudiantController.deleteEtudiant);
};