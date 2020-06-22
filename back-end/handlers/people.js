const axios = require('axios');

/**
 *  Get people by id
 */
exports.get = (req, h) => {
    return axios.get(`http://swapi.dev/api/people/${req.params.id}`).then((people) => {
        if(!people) return { message: 'People not found!' };
    return h.response(people.data);
    }).catch((err) => {
        return h.response(err);
    });
}

/**
 *  Get people by id on wookiee 
 */
exports.wookie = (req, h) => {
    return axios.get(`http://swapi.dev/api/people/${req.params.id}/?format=wookiee`).then((wookiee) => {
        if(!wookiee) return { message: 'People not found!' };
    return h.response(wookiee.data);
    }).catch((err) => {
        return h.response(err);
    });
}