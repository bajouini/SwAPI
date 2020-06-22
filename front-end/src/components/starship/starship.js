import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './starshipview.css';
import { getStarship } from '../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../source/logo.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    width: 700
  },
  media: {
    height: 800,
  },
});

function Shipview (props) {
  const classes = useStyles();
    const [ship, setShip ] = useState("");
    let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
    useEffect(() => {
      let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
      console.log(id);
      getStarship(id).then((ship) => {
        setShip(ship);
        console.log("results", ship);
      });
  }, [])

      return (
        <div className="Ship">
          <header className="ship-header">
          <img src={logo} className="ship-logo" alt="logo" />
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
              onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/`}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {ship.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Name: {ship.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Model: {ship.model}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Manufacturer: {ship.manufacturer}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Cost in credits: {ship.cost_in_credits}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Length: {ship.length}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Max atmosphering speed: {ship.max_atmosphering_speed}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Crew: {ship.crew}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Cargo capacity: {ship.cargo_capacity}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Consumables: {ship.consumables}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    MGLT: {ship.MGLT}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Ship Class: {ship.starship_class}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Hyperdrive Rating: {ship.hyperdrive_rating}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
        </header>
        </div>
      )
}

export default withRouter(Shipview);