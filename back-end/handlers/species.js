const axios = require('axios');

/**
 *  Get Specie by id
 */
exports.get = (req, h) => {
    return axios.get(`http://swapi.dev/api/species/${req.params.id}`).then((species) => {
        if(!species) return { message: 'Specie not found!' };
    return h.response(species.data);
    }).catch((err) => {
        return h.response(err);
    });
}

/**
 *  Get specie by id on wookiee 
 */
exports.wookie = (req, h) => {
    return axios.get(`http://swapi.dev/api/species/${req.params.id}/?format=wookiee`).then((wookiee) => {
        if(!wookiee) return { message: 'Specie not found!' };
    return h.response(wookiee.data);
    }).catch((err) => {
        return h.response(err);
    });
}