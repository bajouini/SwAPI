const People = require('./handlers/people');
const Planet = require('./handlers/planets');
const Film = require('./handlers/films');
const Specie = require('./handlers/species');
const Starship = require('./handlers/starships');
const Vehicle = require('./handlers/vehicles');
const Search = require('./handlers/search');

module.exports = [{
    // Get people by ID
    method: "GET",
    path: "/api/people/{id}",
    handler: People.get
  },
  {
    // Get people by ID on wookiee
    method: "GET",
    path: "/api/people/{id}/wookiee",
    handler: People.wookie
  },
  {
    method: "GET",
    path: "/api/planets/{id}",
    handler: Planet.get
  },
  {
    method: "GET",
    path: "/api/planets/{id}/wookiee",
    handler: Planet.wookie
  },
  {
    method: "GET",
    path: "/api/films/{id}",
    handler: Film.get
  },
  {
    method: "GET",
    path: "/api/films/{id}/wookiee",
    handler: Film.wookie
  },
  {
    method: "GET",
    path: "/api/species/{id}",
    handler: Specie.get
  },
  {
    method: "GET",
    path: "/api/species/{id}/wookiee",
    handler: Specie.wookie
  },
  {
    method: "GET",
    path: "/api/starships/{id}",
    handler: Starship.get
  },
  {
    method: "GET",
    path: "/api/starships/{id}/wookiee",
    handler: Starship.wookie
  },
  {
    method: "GET",
    path: "/api/vehicles/{id}",
    handler: Vehicle.get
  },
  {
    method: "GET",
    path: "/api/vehicles/{id}/wookiee",
    handler: Vehicle.wookie
  },
  {
    // Search in all database
    method: "GET",
    path: "/api/search/{name}",
    handler: Search.get
  },
  {
    // Search in all data base on wookiee
    method: "GET",
    path: "/api/search/{name}/wookiee",
    handler: Search.wookiee
  },
  {
    // Search people by name
    method: "GET",
    path: "/api/search/people/{name}",
    handler: Search.people
  },
  {
    method: "GET",
    path: "/api/search/film/{title}",
    handler: Search.film
  },
  {
    method: "GET",
    path: "/api/search/specie/{name}",
    handler: Search.specie
  },
  {
    method: "GET",
    path: "/api/search/planet/{name}",
    handler: Search.planet
  },
  {
    method: "GET",
    path: "/api/search/starship/{name}",
    handler: Search.starship
  },
  {
    method: "GET",
    path: "/api/search/vehicle/{name}",
    handler: Search.vehicle
  }
]