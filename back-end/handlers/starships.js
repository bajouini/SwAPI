const axios = require('axios');

/**
 *  Get starship by id
 */
exports.get = (req, h) => {
    return axios.get(`http://swapi.dev/api/starships/${req.params.id}`).then((starship) => {
        if(!starship) return { message: 'Starship not found!' };
    return h.response(starship.data);
    }).catch((err) => {
        return h.response(err);
    });
}

/**
 *  Get starship by id on wookiee 
 */
exports.wookie = (req, h) => {
    return axios.get(`http://swapi.dev/api/starships/${req.params.id}/?format=wookiee`).then((wookiee) => {
        if(!wookiee) return { message: 'Starship not found!' };
    return h.response(wookiee.data);
    }).catch((err) => {
        return h.response(err);
    });
}