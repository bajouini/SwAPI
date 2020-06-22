import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './specieview.css';
import { getSpecie } from '../../utils/API';
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

function Specieview (props) {
  const classes = useStyles();
    const [specie, setSpecie ] = useState("");
    let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
    useEffect(() => {
      let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
      console.log(id);
      getSpecie(id).then((specie) => {
        setSpecie(specie);
        console.log("results", specie);
      });
  }, [])

      return (
        <div className="specie">
          <header className="specie-header">
          <img src={logo} className="specie-logo" alt="logo" />
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
              onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/`}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {specie.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Name: {specie.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Classification: {specie.classification}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Designation: {specie.designation}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Average height: {specie.average_height}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Skin colors: {specie.skin_colors}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Hair colors: {specie.hair_colors}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Eye colors: {specie.eye_colors}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Average lifespan: {specie.average_lifespan}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Homeworld: {specie.homeworld}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
        </header>
        </div>
      )
}

export default withRouter(Specieview);