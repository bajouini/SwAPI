import React from "react";
import "./home.css";
import Search from "./components/search/search";
import { withRouter } from "react-router-dom";
import logo from './source/logo.png';


function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
        <Search />
      </header>
    </div>
  );
}

export default withRouter(Home);