import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './planetview.css';
import { getPlanet } from '../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../source/logo.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    width: 600
  },
  media: {
    height: 600,
  },
});

function Planetview (props) {
  const classes = useStyles();
    const [planet, setPlanet ] = useState("");
    let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
    useEffect(() => {
      let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
      console.log(id);
      getPlanet(id).then((planet) => {
        setPlanet(planet);
        console.log("results", planet);
      });
  }, [])

      return (
        <div className="Planet">
          <header className="planet-header">
          <img src={logo} className="planet-logo" alt="logo" />
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/`}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {planet.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Name: {planet.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Rotation Period: {planet.rotation_period}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Orbital Period: {planet.orbital_period}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Diameter: {planet.diameter}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Climate: {planet.climate}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Gravity: {planet.gravity}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Terrain: {planet.terrain}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Surface Water: {planet.surface_water}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Population: {planet.population}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
        </header>
        </div>
      )
}

export default withRouter(Planetview);