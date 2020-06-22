import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './peopleview.css';
import { getPeople } from '../../utils/API';
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

function Peopleview (props) {
  const classes = useStyles();
    const [people, setPeople ] = useState("");
    let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
    useEffect(() => {
      let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
      console.log(id);
      getPeople(id).then((people) => {
        setPeople(people);
        console.log("results", people);
      });
  }, [])

      return (
        <div className="People">
          <header className="people-header">
          <img src={logo} className="people-logo" alt="logo" />
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/`}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {people.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Gender: {people.gender}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Birth Year: {people.birthYear}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Eye Color: {people.eyeColor}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Skin Color: {people.skin_color}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Hair Color: {people.hair_color}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Height: {people.height}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Mass: {people.mass}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Homeworld: {people.homeworld}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
        </header>
        </div>
      )
}

export default withRouter(Peopleview);