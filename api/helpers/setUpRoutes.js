'use strict';

module.exports = function (app) {
    //importing routes
    var matiereRoutes = require('./../routes/MatiereRoutes');
    var etudiantRoutes = require('./../routes/EtudiantRoutes');
    var uniteEnseignementRoutes = require('./../routes/UniteEnseignementRoutes');

    //add routes
    matiereRoutes(app);
    etudiantRoutes(app);
    uniteEnseignementRoutes(app);
};