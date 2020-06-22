import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './vehicleview.css';
import { getVehicle } from '../../utils/API';
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

function Vclview (props) {
  const classes = useStyles();
    const [vcl, setVcl ] = useState("");
    let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
    useEffect(() => {
      let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
      console.log(id);
      getVehicle(id).then((vcl) => {
        setVcl(vcl);
        console.log("results", vcl);
      });
  }, [])

  return (
    <div className="Vcl">
      <header className="vcl-header">
      <img src={logo} className="vcl-logo" alt="logo" />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
          onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/`}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {vcl.name}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Name: {vcl.name}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Model: {vcl.model}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Manufacturer: {vcl.manufacturer}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Cost in credits: {vcl.cost_in_credits}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Length: {vcl.length}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Max atmosphering speed: {vcl.max_atmosphering_speed}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Crew: {vcl.crew}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Cargo capacity: {vcl.cargo_capacity}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Consumables: {vcl.consumables}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                Vehicle Class: {vcl.vehicle_class}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
    </header>
    </div>
  )
}

export default withRouter(Vclview);