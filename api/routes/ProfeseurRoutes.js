'use strict';
module.exports = function (app) {
    var professeurController = require('./../controllers/ProfesseurController');

    app.route('/professeurs')
        .get(professeurController.listAll)
        .post(professeurController.addOne);

    app.route('/professeurs/:id')
        .get(professeurController.getOne)
        .put(professeurController.modifyOne)
        .delete(professeurController.deleteOne);
};