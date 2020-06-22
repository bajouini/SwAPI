const axios = require('axios');

/**
 *  Get planet by id
 */
exports.get = (req, h) => {
    return axios.get(`http://swapi.dev/api/planets/${req.params.id}`).then((planet) => {
        if(!planet) return { message: 'Planet not found!' };
    return h.response(planet.data);
    }).catch((err) => {
        return h.response(err);
    });
}

/**
 *  Get planet by id on wookiee 
 */
exports.wookie = (req, h) => {
    return axios.get(`http://swapi.dev/api/planets/${req.params.id}/?format=wookiee`).then((wookiee) => {
        if(!wookiee) return { message: 'Planet not found!' };
    return h.response(wookiee.data);
    }).catch((err) => {
        return h.response(err);
    });
}