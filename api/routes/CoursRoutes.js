'use strict';
module.exports = function (app) {
    var coursController = require('./../controllers/CoursController');

    app.route('/cours')
        .get(coursController.listAll)
        .post(coursController.addOne);

    app.route('/cours/:_id')
        .get(coursController.getOne)
        .put(coursController.modifyOne)
        .delete(coursController.deleteOne);
};