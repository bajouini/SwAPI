const axios = require('axios');

/**
 *  Get film by id
 */
exports.get = (req, h) => {
    return axios.get(`http://swapi.dev/api/films/${req.params.id}`).then((film) => {
        if(!film) return { message: 'Film not found!' };
    return h.response(film.data);
    }).catch((err) => {
        return h.response(err);
    });
}

/**
 *  Get film by id on wookiee
 */
exports.wookie = (req, h) => {
    return axios.get(`http://swapi.dev/api/films/${req.params.id}/?format=wookiee`).then((film) => {
        if(!film) return { message: 'Film not found!' };
    return h.response(film.data);
    }).catch((err) => {
        return h.response(err);
    });
}