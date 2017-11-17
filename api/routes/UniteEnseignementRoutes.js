'use strict';
module.exports = function (app) {
    var uniteEnseignementController = require('./../controllers/UniteEnseignementController');

    app.route('/unite_enseignements')
    .get(uniteEnseignementController.listAll)
    .post(uniteEnseignementController.addOne);

app.route('/unite_enseignements/:id')
    .get(uniteEnseignementController.getOne)
    .put(uniteEnseignementController.modifyOne)
    .delete(uniteEnseignementController.deleteOne);
};