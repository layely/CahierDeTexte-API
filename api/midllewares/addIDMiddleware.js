'use strict';
/*
    Ce 'middleware' permet de générer un id pour un nouveau objet à ajouter 
    (method == Post) à la base de données.
 */
module.exports = function (req) {
    if (!req.body.id || req.body.id == '0') {
        const id = Date.now();
        // console.log('generated id: ', id);
        req.body.id = id;
    }
};