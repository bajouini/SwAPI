const axios = require('axios');

/** 
 *  Search in all database
 */
exports.get = async function (req, h) {
    let films = await axios.get(`http://swapi.dev/api/films/?search=${req.params.name}`).then((res) => {
        return res.data;
    })

    let people = await axios.get(`http://swapi.dev/api/people/?search=${req.params.name}`).then((res) => {
        return res.data;
    })

    let species = await axios.get(`http://swapi.dev/api/species/?search=${req.params.name}`).then((res) => {
        return res.data;
    })

    let vehicles = await axios.get(`http://swapi.dev/api/vehicles/?search=${req.params.name}`).then((res) => {
        return res.data;
    })

    let planets = await axios.get(`http://swapi.dev/api/planets/?search=${req.params.name}`).then((res) => {
        return res.data;
    })

    let starships = await axios.get(`http://swapi.dev/api/starships/?search=${req.params.name}`).then((res) => {
        return res.data;
    })

    let returnResponse = {
        films: films,
        people: people,
        species: species,
        planets: planets,
        vehicles: vehicles,
        starships: starships
    }
    return h.response(returnResponse);
}
/**
 *  Search in all database on wookiee
 */
exports.wookiee = async function (req, h) {
    let films = await axios.get(`http://swapi.dev/api/films/?search=${req.params.title}&format=wookiee`).then((res) => {
        return res.data;
    })
    
    let people = await axios.get(`http://swapi.dev/api/people/?search=${req.params.name}&format=wookiee`).then((res) => {
        return res.data;
    })
    
    let species = await axios.get(`http://swapi.dev/api/species/?search=${req.params.name}&format=wookiee`).then((res) => {
        return res.data;
    })
    
    let vehicles = await axios.get(`http://swapi.dev/api/vehicles/?search=${req.params.name}&format=wookiee`).then((res) => {
        return res.data;
    })
    
    let planets = await axios.get(`http://swapi.dev/api/planets/?search=${req.params.name}&format=wookiee`).then((res) => {
        return res.data;
    })
    
    let starships = await axios.get(`http://swapi.dev/api/starships/?search=${req.params.name}&format=wookiee`).then((res) => {
        return res.data;
    })
    
    let returnResponse = {
        films: films,
        people: people,
        species: species,
        planets: planets,
        vehicles: vehicles,
        starships: starships
    }
    return h.response(returnResponse);
}
/**
 *  Search people by name
 */
exports.people = (req, h) => {
    return axios.get(`http://swapi.dev/api/people/?search=${req.params.name}`).then((people) => {
        if(!people) return { message: 'People not found!' };
    return h.response(people.data);
    }).catch((err) => {
        return h.response(err);
    });
}
/**
 *  Search film by title
 */
exports.film = (req, h) => {
    return axios.get(`http://swapi.dev/api/films/?search=${req.params.title}`).then((film) => {
        if(!film) return { message: 'Film not found!' };
    return h.response(film.data);
    }).catch((err) => {
        return h.response(err);
    });
}
/**
 *  Search specie by name
 */
exports.specie = (req, h) => {
    return axios.get(`http://swapi.dev/api/species/?search=${req.params.name}`).then((specie) => {
        if(!specie) return { message: 'Specie not found!' };
    return h.response(specie.data);
    }).catch((err) => {
        return h.response(err);
    });
}
/**
 *  Search planet by name
 */
exports.planet = (req, h) => {
    return axios.get(`http://swapi.dev/api/planets/?search=${req.params.name}`).then((planet) => {
        if(!planet) return { message: 'Planet not found!' };
    return h.response(planet.data);
    }).catch((err) => {
        return h.response(err);
    });
}
/**
 *  Search starship by name
 */
exports.starship = (req, h) => {
    return axios.get(`http://swapi.dev/api/starships/?search=${req.params.name}`).then((starship) => {
        if(!starship) return { message: 'Starship not found!' };
    return h.response(starship.data);
    }).catch((err) => {
        return h.response(err);
    });
}
/**
 *  Search vehicle by name
 */
exports.vehicle = (req, h) => {
    return axios.get(`http://swapi.dev/api/vehicles/?search=${req.params.name}`).then((vehicle) => {
        if(!vehicle) return { message: 'Vehicle not found!' };
    return h.response(vehicle.data);
    }).catch((err) => {
        return h.response(err);
    });
}