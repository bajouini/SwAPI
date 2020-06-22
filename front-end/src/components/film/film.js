import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './filmview.css';
import { getFilm } from '../../utils/API';
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

function Filmview (props) {
  const classes = useStyles();
    const [film, setFilm ] = useState("");
    let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
    useEffect(() => {
      let id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
      console.log(id);
      getFilm(id).then((film) => {
        setFilm(film);
        console.log("results", film);
      });
  }, [])

      return (
        <div className="Film">
          <header className="film-header">
          <img src={logo} className="film-logo" alt="logo" />
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
              onClick={(e) => { e.preventDefault(); window.location.href=`http://localhost:3000/`}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {film.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Title: {film.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Episode n: {film.episode_id}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Opening crawl: {film.opening_crawl}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Director: {film.director}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Producer: {film.producer}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Release Date: {film.release_date}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
        </header>
        </div>
      )
}

export default withRouter(Filmview);