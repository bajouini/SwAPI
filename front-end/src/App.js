import React from "react";
import Home from './home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PeopleViewComponent from './components/people/people';
import FilmViewComponent from './components/film/film';
import SpecieViewComponent from './components/specie/specie';
import PlanetViewComponent from './components/planet/planet';
import ShipViewComponent from './components/starship/starship';
import VclViewComponent from './components/vehicle/vehicle';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/people/:id" component={PeopleViewComponent} />
      <Route exact path="/film/:id" component={FilmViewComponent} />
      <Route exact path="/specie/:id" component={SpecieViewComponent} />
      <Route exact path="/planet/:id" component={PlanetViewComponent} />
      <Route exact path="/starship/:id" component={ShipViewComponent} />
      <Route exact path="/vehicle/:id" component={VclViewComponent} />
    </div>
  </Router>
)
export default App;