const axios = require('axios');

/**
 *  Get vehicle by id
 */
exports.get = (req, h) => {
    return axios.get(`http://swapi.dev/api/vehicles/${req.params.id}`).then((vehicle) => {
        if(!vehicle) return { message: 'Vehicle not found!' };
    return h.response(vehicle.data);
    }).catch((err) => {
        return h.response(err);
    });
}

/**
 *  Get people by id on wookiee 
 */
exports.wookie = (req, h) => {
    return axios.get(`http://swapi.dev/api/vehicles/${req.params.id}/?format=wookiee`).then((wookiee) => {
        if(!wookiee) return { message: 'Vehicle not found!' };
    return h.response(wookiee.data);
    }).catch((err) => {
        return h.response(err);
    });
}