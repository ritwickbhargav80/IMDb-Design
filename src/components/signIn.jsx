import React from "react";

import "../stylesheets/signIn.css";

const SignIn = () => {
  return (
    <div className="container">
      <h3 className="h3">Information at your Ease</h3>
      <div className="row">
        <div
          className="col-sm"
          style={{
            background: "#343a40",
            borderTopLeftRadius: "14px",
            borderBottomLeftRadius: "14px",
          }}
        >
          <div className="row">
            <div className="img-container col-sm-3">
              <img
                className="rocket"
                src="https://image.ibb.co/n7oTvU/logo_white.png"
                alt=""
              />
            </div>
            <div className="col-sm">
              <h3 className="h3" style={{ marginTop: "16%" }}>
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
          className="col-sm"
          style={{
            background: "#ffffff",
            borderTopRightRadius: "14px",
            borderBottomRightRadius: "14px",
            opacity: "0.95",
          }}
        >
          <h3 className="h3" style={{ textAlign: "center" }}>
            Log In
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
