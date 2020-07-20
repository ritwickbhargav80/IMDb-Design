import React, { Component } from "react";

import Default from "./login/default";

import "../stylesheets/signIn.css";
import Login from "./login/login";
import Register from "./login/register";

class SignIn extends Component {
  state = {
    login: false,
    register: false,
  };

  render() {
    const { login, register } = this.state;

    return (
      <div className="container">
        <h3 className="h3">Information at your Ease</h3>
        <div className="row" style={{ paddingTop: "0.5rem" }}>
          <div
            className="col-md"
            style={{
              background: "#343a40",
              borderTopLeftRadius: "14px",
              borderBottomLeftRadius: "14px",
            }}
          >
            <div className="row neg-margin">
              <div className="img-container col-md-3">
                <img
                  className="rocket"
                  src="https://image.ibb.co/n7oTvU/logo_white.png"
                  alt=""
                />
              </div>
              <div className="col-md">
                <h3 className="h3" style={{ marginTop: "14%" }}>
                  Benefits of your free IMDb account
                </h3>
              </div>
            </div>
            <br />
            <div className="left-border">
              <h5 className="sub-heading">Personalized Recommendations</h5>
            </div>
            <p className="sub-script">Discover shows you'll love.</p>

            <div className="left-border">
              <h5 className="sub-heading">Your Watchlist</h5>
            </div>
            <p className="sub-script">
              Track everything you want to watch and receive e-mail when movies
              open in theaters.
            </p>

            <div className="left-border">
              <h5 className="sub-heading">Your Ratings</h5>
            </div>
            <p className="sub-script">
              Rate and remember everything you've seen.
            </p>

            <div className="left-border">
              <h5 className="sub-heading">Contribute to IMDb</h5>
            </div>
            <p className="sub-script">
              Add data that will be seen by millions of people and get cool
              badges.
            </p>
            <br />
          </div>
          <div
            className="col-md"
            style={{
              background: "#ffffff",
              borderTopRightRadius: "14px",
              borderBottomRightRadius: "14px",
              opacity: "0.95",
            }}
          >
            {!login && !register && <Default />}
            {login && <Login />}
            {register && <Register />}
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
