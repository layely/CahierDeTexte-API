'use strict';
module.exports = function (app) {
    var matiereController = require('./../controllers/MatiereController');

    app.route('/matieres')
        .get(matiereController.listAllMatieres)
        .post(matiereController.addMatiere);

    app.route('/matieres/:nom')
        .get(matiereController.getMatiere)
        .put(matiereController.modifyMatiere)
        .delete(matiereController.deleteMatiere);
}
