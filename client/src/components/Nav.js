import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg border-light">
            <h1><span className="navbar-brand mb-3 ml-3">Mood Swing</span></h1>
            <div className="navbar-collapse" id="navbarSupportedContent">
    <ul className="nav navbar-nav nav-flex-icons ml-auto">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/HappySongs" className={location.pathname === "/HappySongs" ? "nav-link active" : "nav-link"}> Happy Songs</Link>
      </li>
      <li className="nav-item">
        <Link to="/SadSongs" className={location.pathname === "/SadSongs" ? "nav-link active" : "nav-link"}> Sad Songs</Link>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Nav;
