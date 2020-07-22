import React, { Component } from "react";

import "../../stylesheets/login.css";

class Login extends Component {
  state = {
    type: "password",
    placeholder: "******************",
    icon: "fa fa-eye eye",
  };

  handleToggle = () => {
    if (this.state.type === "password") {
      this.setState({
        type: "text",
        placeholder: "Enter the password",
        icon: "fa fa-eye-slash eye",
      });
    } else {
      this.setState({
        type: "password",
        placeholder: "******************",
        icon: "fa fa-eye eye",
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
            <label className="label" for="email">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
              autoFocus="true"
            />
          </div>
          <div className="form-group">
            <label className="label" for="password">
              Password
            </label>
            <small id="forget-pwd" className="form-text">
              Forget Password?
            </small>
            <input
              type={type}
              className="form-control"
              name="password"
              id="password"
              placeholder={placeholder}
            />
            <i class={icon} toggle="#password" onClick={this.handleToggle} />
          </div>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="switch" />
            <label class="custom-control-label" for="switch">
              Remember Me
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
