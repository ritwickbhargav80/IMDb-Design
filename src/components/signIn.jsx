import React, { Component } from "react";

import Default from "./login/default";
import Login from "./login/login";
import Register from "./login/register";

import "../stylesheets/signIn.css";
import { toast } from "react-toastify";

class SignIn extends Component {
  state = {
    login: false,
    register: false,
    form: { email: "", password: "" },
    error: { email: "", password: "" },
  };

  validate(type, value) {
    let error = { ...this.state.error };

    if (value === "") {
      error[type] = "This field is mandatory";
      this.setState({ error });
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+/;
    let temp = true;
    if (type === "email") {
      if (!emailRegex.test(String(value))) {
        error[type] = "Please enter a valid email";
        temp = false;
      }
    } else {
      if (String(value).length < 8) {
        error[type] = "Password can't be less than 8 characters";
        temp = false;
      }
    }
    if (temp) error[type] = "";
    this.setState({ error });
  }

  handleSignIn = () => {
    const obj = { email: "", password: "" };
    this.setState({ login: true, register: false, form: obj, error: obj });
  };

  handleRegister = (props) => {
    const obj = { email: "", password: "" };
    this.setState({ login: false, register: true, form: obj, error: obj });
  };

  handleChange = (e) => {
    let form = { ...this.state.form };
    form[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ form });
    this.validate(e.currentTarget.name, e.currentTarget.value);
  };

  isError = () => {
    let { form, error } = this.state;
    if (error.email || error.password || !form.email || !form.password)
      return true;
    return false;
  };

  handleSubmit = () => {
    let { login, register } = this.state;
    if (this.isError()) toast.error("Form is not valid");
    else {
      this.props.history.replace("/");
      if (login) toast.success("Logged in successfully!");
      if (register) toast.success("Account created successfully!");
    }
  };

  render() {
    const { login, register, error } = this.state;
    const { onLogin } = this.props;

    return (
      <div className="container">
        <h3 className="h3">Information at your Ease</h3>
        <div className="row default">
          <div className="col-md div-left">
            <div className="row neg-margin">
              <div className="img-container col-md-3">
                <img
                  className="rocket"
                  src="https://image.ibb.co/n7oTvU/logo_white.png"
                  alt=""
                />
              </div>
              <div className="col-md">
                <h3 className="h3 left-div-heading">
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
          <div className="col-md div-right">
            {!login && !register && (
              <Default
                signIn={this.handleSignIn}
                register={this.handleRegister}
              />
            )}
            {login && (
              <Login
                register={this.handleRegister}
                error={error}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                props={this.props}
                isError={this.isError}
                onLogin={onLogin}
              />
            )}
            {register && (
              <Register
                login={this.handleSignIn}
                error={error}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                props={this.props}
                isError={this.isError}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
