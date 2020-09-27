import React from "react";

import logo from "../../logo.svg";
import amazon from "../../assets/amazon.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import "../../stylesheets/default.css";

const Default = ({ signIn, register }) => {
  return (
    <div className="txt-center">
      <h3 className="h3">Welcome Back</h3>
      <br />
      <button className="btn custom" onClick={signIn}>
        <img src={logo} alt="imdb-logo" className="btn-logo" />
        <span className="btn-txt">Sign in with IMDb</span>
      </button>
      <br />
      <button className="btn custom" disabled>
        <img src={amazon} alt="amazon-logo" className="btn-logo-1" />
        <span className="btn-txt">Sign in with Amazon</span>
      </button>
      <br />
      <button className="btn custom" disabled>
        <img src={facebook} alt="facebook-logo" className="btn-logo-1" />
        <span className="btn-txt">Sign in with Facebook</span>
      </button>
      <br />
      <button className="btn custom" disabled>
        <img src={google} alt="google-logo" className="btn-logo-1" />
        <span className="btn-txt">Sign in with Google</span>
      </button>
      <br />
      <button className="btn custom" disabled>
        <img src={apple} alt="apple-logo" className="btn-logo-1" />
        <span className="btn-txt">Sign in with Apple</span>
      </button>
      <div className="divider">
        <hr />
        <span>or</span>
      </div>
      <button className="btn create-acc-btn" onClick={register}>
        Create a New Account
      </button>
      <p className="tnc">
        By signing in, you agree to IMDb's{" "}
        <a href="https://www.imdb.com/conditions">Conditions of Use</a> &{" "}
        <a href="https://www.imdb.com/privacy">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default Default;
