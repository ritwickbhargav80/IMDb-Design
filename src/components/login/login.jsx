import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

import { Input, Password } from "../common/input";

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
    const {
      register,
      error,
      onChange,
      onSubmit,
      isError,
      onLogin,
    } = this.props;

    return (
      <div className="txt-center">
        <h3 className="h3">Welcome Back</h3>
        <br />
        <form onSubmit={onSubmit}>
          <Input
            htmlfor="email"
            label="Email address"
            icon="fa-at"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            autofocus={true}
            onChange={onChange}
            error={error.email}
          />
          <Password
            htmlfor="password"
            label="Password"
            prependicon="fa-key"
            type={type}
            id="password"
            name="password"
            placeholder={placeholder}
            appendicon={icon}
            onClick={this.handleToggle}
            register={false}
            onChange={onChange}
            error={error.password}
          />
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
              <ReactTooltip id="question-circle">
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
            disabled={isError()}
            onClick={onLogin}
          />
        </form>
        <br />
        <div className="divider-1">
          <hr />
          <span>New to IMDb?</span>
        </div>
        <button
          className="btn create-acc-btn-1 sign-in-register margin-bottom-10"
          onClick={register}
        >
          Create a New Account
        </button>
      </div>
    );
  }
}

export default Login;
