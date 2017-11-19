'use strict';

module.exports = function (app) {
    //importing routes
    const matiereRoutes = require('./../routes/MatiereRoutes');
    const etudiantRoutes = require('./../routes/EtudiantRoutes');
    const uniteEnseignementRoutes = require('./../routes/UniteEnseignementRoutes');
    const professeurRoutes = require('./../routes/ProfeseurRoutes');
    const coursRoutes = require('./../routes/CoursRoutes');

    //add routes
    matiereRoutes(app);
    etudiantRoutes(app);
    uniteEnseignementRoutes(app);
    professeurRoutes(app);
    coursRoutes(app);
};