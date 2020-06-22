import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import useDebounce from "../../utils/debounce";
import { searchPeople, searchStarship, searchSpecie, searchFilms, searchPlanets, searchVehicles } from "../../utils/API";
import "./search.css";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    margin: {
      margin: theme.spacing(3),
    },
    button: {
      color: "white",
      "&:hover": {
        color:"black"
      }
    }
  }));
  
  const CssTextField = withStyles({
    root: {
      '& label': {
        color: "yellow",
      },
      '& input': {
        color: "white",
      },
      '&': {
        width: '25ch',
      },
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'yellow',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

export default function Search () {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [peoples, setPeoples] = useState([]);
    const [species, setSpecies] = useState([]);
    const [starships, setStarships] = useState([]);
    const [films, setFilms] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 800);

    
    useEffect(
      () => {
        if (debouncedSearchTerm) {
          setIsSearching(true);
          searchPeople(debouncedSearchTerm).then((peoples) => {
            setIsSearching(false);
            setPeoples(peoples);
            console.log("peoples", peoples);
          });
        } else {
          setPeoples([]);
        }
        if (debouncedSearchTerm) {
          setIsSearching(true);
          searchStarship(debouncedSearchTerm).then((starships) => {
            setIsSearching(false);
            setStarships(starships);
            console.log("starships", starships);
          });
        } else {
          setStarships([]);
        }
        if (debouncedSearchTerm) {
          setIsSearching(true);
          searchSpecie(debouncedSearchTerm).then((species) => {
            setIsSearching(false);
            setSpecies(species);
            console.log("species", species);
          });
        } else {
          setSpecies([]);
        }
        if (debouncedSearchTerm) {
          setIsSearching(true);
          searchFilms(debouncedSearchTerm).then((films) => {
            setIsSearching(false);
            setFilms(films);
            console.log("films", films);
          });
        } else {
          setFilms([]);
        }
        if (debouncedSearchTerm) {
          setIsSearching(true);
          searchPlanets(debouncedSearchTerm).then((planets) => {
            setIsSearching(false);
            setPlanets(planets);
            console.log("planets", planets);
          });
        } else {
          setFilms([]);
        }
        if (debouncedSearchTerm) {
          setIsSearching(true);
          searchVehicles(debouncedSearchTerm).then((vehicles) => {
            setIsSearching(false);
            setVehicles(vehicles);
            console.log("vehicles", vehicles);
          });
        } else {
          setFilms([]);
        }
      },
      [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
    
    return (
        <div className="Search">
          <header className="search-header">
          {/* <form className={classes.root} noValidate autoComplete="off"> */}
          <CssTextField
            className={classes.margin}
            label="Search Bar"
            variant="outlined"
            id="custom-css-outlined-input"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Recherche"
          />

          {isSearching && <div>Searching ...</div>}
          {peoples.map((people, idx) => (
            <div people={people} key={people.id}>
              <h4>
              <Button onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/people/${people.id}`}} className={classes.button}>{people.name}</Button>
              </h4>
              <img
                className="entity-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`}
                alt={people.name}
              />
            </div>
          ))}
          {starships.map((starship, idx) => (
            <div starship={starship} key={starship.id}>
              {/* <h4>{starship.name}</h4> */}
              <h4>
              <Button onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/starship/${starship.id}`}} className={classes.button}>{starship.model}</Button>
              </h4>
              <img
                className="entity-image"
                src={`https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`}
                alt={starship.name}
              />
            </div>
          ))}
          {species.map((specie, idx) => (
            <div specie={specie} key={specie.id}>
            <h4>
            <Button onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/specie/${specie.id}`}} className={classes.button}>{specie.name}</Button>
            </h4>
            <img
              className="entity-image"
              src={`https://starwars-visualguide.com/assets/img/species/${specie.id}.jpg`}
              alt={specie.name}
            />
          </div>
          ))}
          {films.map((film, idx) => (
            <div film={film} key={film.id}>
            <h4>
            <Button onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/film/${film.id}`}} className={classes.button}>{film.title}</Button>
            </h4>
            <img
              className="entity-image"
              src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
              alt={film.title}
            />
          </div>
          ))}
          {planets.map((planet, idx) => (
            <div planet={planet} key={planet.id}>
            <h4>
            <Button onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/planet/${planet.id}`}} className={classes.button}>{planet.name}</Button>
            </h4>
            <img
              className="entity-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
              alt={planet.name}
            />
          </div>
          ))}
          {vehicles.map((vehicle, idx) => (
            <div vehicle={vehicle} key={vehicle.id}>
            <h4>
            <Button onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/vehicle/${vehicle.id}`}} className={classes.button}>{vehicle.name}</Button>
            </h4>
            <img
              className="entity-image"
              src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.id}.jpg`}
              alt={vehicle.title}
            />
          </div>
          ))}
        {/* </form> */}
        </header>
      </div>
    )
}