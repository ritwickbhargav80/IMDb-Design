import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../stylesheets/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="hi" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myid"
        aria-controls="myid"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="myid">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item pad-left active">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item pad-left">
            <Link className="nav-link" to="/shows">
              Tv Shows
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </li>
          <li className="nav-item pad-left">
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
