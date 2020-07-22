import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

import "../../stylesheets/login.css";

class Login extends Component {
  state = {
    type: "password",
    placeholder: "******************",
    icon: "fa fa-eye",
  };

  handleToggle = () => {
    if (this.state.type === "password") {
      this.setState({
        type: "text",
        placeholder: "Enter the password",
        icon: "fa fa-eye-slash",
      });
    } else {
      this.setState({
        type: "password",
        placeholder: "******************",
        icon: "fa fa-eye",
      });
    }
  };

  render() {
    const { type, placeholder, icon } = this.state;
    const { register } = this.props;

    return (
      <div className="txt-center">
        <h3 className="h3">Login</h3>
        <br />
        <form>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text prepend">
                  <i className="fa-at fa-sm icon" aria-hidden="true" />
                  {/* <i className="fa fa-envelope-o" aria-hidden="true" /> */}
                </div>
              </div>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                autoFocus={true}
                required={true}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <small id="forget-pwd" className="form-text">
              Forget Password?
            </small>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text prepend">
                  <i className="fa-key icon" aria-hidden="true" />
                </div>
              </div>
              <input
                type={type}
                className="form-control"
                name="password"
                id="password"
                placeholder={placeholder}
                autoComplete="false"
                required={true}
              />
              <div className="input-group-append">
                <div className="input-group-text append">
                  <i
                    className={icon + " eye linked-icons"}
                    toggle="#password"
                    onClick={this.handleToggle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="switch"
            />
            <label className="custom-control-label" htmlFor="switch">
              Keep me signed in
              <i
                className="fa-question-circle"
                aria-hidden="true"
                data-for="question-circle"
                data-tip
              />
              <ReactTooltip place="right" id="question-circle">
                <p>
                  Choosing 'Keep me signed in' reduces the number of times
                  <br />
                  you're asked to Sign-In on this device. To keep your account
                  <br />
                  secure, use this option only on your personal devices.
                </p>
              </ReactTooltip>
            </label>
          </div>
          <input
            className="btn create-acc-btn custom-width"
            type="submit"
            value="Sign-In"
          />
        </form>
        <br />
        <div className="divider-1">
          <hr />
          <span>New to IMDb?</span>
        </div>
        <button
          className="btn create-acc-btn-1 sign-in-register"
          onClick={register}
        >
          Create a New Account
        </button>
      </div>
    );
  }
}

export default Login;
