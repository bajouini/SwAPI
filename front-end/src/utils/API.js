const axios = require('axios');

const peopleDetail = async (people) => {
    const homeWorldInfo = await fetch(people.homeworld);
    const homeWorld = await homeWorldInfo.json();
    return {
        id: _extractId(people),
        name: people.name,
        gender: people.gender,
        birthYear: people.birth_year,
        eyeColor: people.eye_color,
        homeworld: homeWorld.name,
        height: people.height,
        mass: people.mass,
        hair_color: people.hair_color,
        skin_color: people.skin_color
    };
}

const planetDetail = (planet) => {
    return {
        name: planet.name,
        rotation_period: planet.rotation_period,
        orbital_period: planet.orbital_period,
        diameter: planet.diameter,
        climate: planet.climate,
        gravity: planet.gravity,
        terrain: planet.terrain,
        surface_water: planet.surface_water,
        population: planet.population
    }
}

const filmDetail = (film) => {
    return {
        title: film.title,
        episode_id: film.episode_id,
        opening_crawl: film.opening_crawl,
        director: film.director,
        producer: film.producer,
        release_date: film.release_date
    
    }
}

const specieDetail = async (specie) => {
    const homeWorldInfo = await fetch(specie.homeworld);
    const homeWorld = await homeWorldInfo.json();
    return {
        name: specie.name,
        classification: specie.classification,
        designation: specie.designation,
        average_height: specie.average_height,
        skin_colors: specie.skin_colors,
        hair_colors: specie.hair_colors,
        eye_colors: specie.eye_colors,
        average_lifespan: specie.average_lifespan,
        homeworld: homeWorld.name,
        language: specie.language
    }
}

const shipDetail = (ship) => {
    return {
        name: ship.name,
        model: ship.model,
        manufacturer: ship.manufacturer,
        cost_in_credits: ship.cost_in_credits,
        length: ship.length,
        max_atmosphering_speed: ship.max_atmosphering_speed,
        crew: ship.crew,
        passengers: ship.passengers,
        cargo_capacity: ship.cargo_capacity,
        consumables: ship.consumables,
        hyperdrive_rating: ship.hyperdrive_rating,
        MGLT: ship.MGLT,
        starship_class: ship.starship_class    
    }
}

const vclDetail = (vcl) => {
    return {
        name: vcl.name,
        model: vcl.name,
        manufacturer: vcl.manufacturer,
        cost_in_credits: vcl.cost_in_credits,
        length: vcl.length,
        max_atmosphering_speed: vcl.max_atmosphering_speed,
        crew: vcl.crew,
        passengers: vcl.passengers,
        cargo_capacity: vcl.cargo_capacity,
        consumables: vcl.consumables,
        vehicle_class: vcl.vehicle_class
    }
}

const transformEntity = (entity) => {
    return entity.map((entity) => ({
        id: _extractId(entity),
        name: entity.name,
    }));
}

const transformFilm = (film) => {
    return film.map((film) => ({
        id: _extractId(film),
        title: film.title,
    }));
}

const _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
}
export const searchPeople = (search) => {
    return axios
        .get(`http://localhost:3001/api/search/${search}`)
        .then((r) => transformEntity(r.data.people.results))
        .catch((error) => {
            console.error(error);
            return [];
    });
}

export const searchStarship = (search) => {
    return axios
    .get(`http://localhost:3001/api/search/${search}`)
    .then((r) => transformStarship(r.data.starships.results))
    .catch((error) => {
        console.error(error);
        return [];
    });
}
export const searchSpecie = (search) => {
    return axios
    .get(`http://localhost:3001/api/search/${search}`)
    .then((r) => transformEntity(r.data.species.results))
    .catch((error) => {
        console.error(error);
        return [];
    });
}

export const searchFilms = (search) => {
    return axios
    .get(`http://localhost:3001/api/search/${search}`)
    .then((r) => transformFilm(r.data.films.results))
    .catch((error) => {
        console.error(error);
        return [];
    });
}

export const searchVehicles = (search) => {
    return axios
    .get(`http://localhost:3001/api/search/${search}`)
    .then((r) => transformEntity(r.data.vehicles.results))
    .catch((error) => {
        console.error(error);
        return [];
    });
}

export const searchPlanets = (search) => {
    return axios
    .get(`http://localhost:3001/api/search/${search}`)
    .then((r) => transformEntity(r.data.planets.results))
    .catch((error) => {
        console.error(error);
        return [];
    });
}

export const getPeople = (id) => {
    return axios
        .get(`http://localhost:3001/api/people/${id}`)
        .then((r) => peopleDetail(r.data))
        .catch((error) => {
            console.error(error);
            return [];
        })
}

export const getFilm = (id) => {
    return axios
        .get(`http://localhost:3001/api/films/${id}`)
        .then((r) => filmDetail(r.data))
        .catch((error) => {
            console.error(error);
            return [];
        })
}

export const getPlanet = (id) => {
    return axios
        .get(`http://localhost:3001/api/planets/${id}`)
        .then((r) => planetDetail(r.data))
        .catch((error) => {
            console.error(error);
            return [];
        })
}

export const getSpecie = (id) => {
    return axios
        .get(`http://localhost:3001/api/species/${id}`)
        .then((r) => specieDetail(r.data))
        .catch((error) => {
            console.error(error);
            return [];
        })
}

export const getStarship = (id) => {
    return axios
        .get(`http://localhost:3001/api/starships/${id}`)
        .then((r) => shipDetail(r.data))
        .catch((error) => {
            console.error(error);
            return [];
        })
}

export const getVehicle = (id) => {
    return axios
        .get(`http://localhost:3001/api/vehicles/${id}`)
        .then((r) => vclDetail(r.data))
        .catch((error) => {
            console.error(error);
            return [];
        })
}

const transformStarship = starship => {
    return starship.map((starship) => ({
      id: _extractId(starship),
      model: starship.model,
    }));
}