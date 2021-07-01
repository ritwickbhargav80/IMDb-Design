import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../logo.svg";
import "../../stylesheets/navbar.css";

const Navbar = ({ login, onLogout, onChange, onClear }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink to="/">
        <img src={logo} alt="imdb-logo" />
      </NavLink>
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
          <li
            className="nav-item pad-left"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <NavLink className="nav-link" exact to="/" onClick={onClear}>
              Home
            </NavLink>
          </li>
          <li
            className="nav-item pad-left"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <NavLink className="nav-link" to="/movies" onClick={onClear}>
              Movies
            </NavLink>
          </li>
          <li
            className="nav-item pad-left"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <NavLink className="nav-link" to="/shows" onClick={onClear}>
              Tv Shows
            </NavLink>
          </li>
          {login && (
            <li
              className="nav-item pad-left"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/watchlist" onClick={onClear}>
                Watchlist
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <form
              className="form-inline my-2 my-lg-0"
              id="myForm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div id="input_container">
                <input
                  className="form-control search-box"
                  id="input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onChange}
                />
                {/* <div style={{ display: "contents" }} onClick={onChange}> */}
                {/* <div style={{ display: "contents" }}>
                  <svg
                    className="w-6 h-6 magnifying-glass"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div> */}
              </div>
            </form>
          </li>
          <li
            className="nav-item pad-left last"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <div className="behind" />
            <div className="front">
              <NavLink
                className="nav-link sign-in"
                to={!login ? "/signin" : "/"}
                onClick={(onClear, login ? onLogout : () => {})}
              >
                {!login ? "Sign In" : "Sign Out"}
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
