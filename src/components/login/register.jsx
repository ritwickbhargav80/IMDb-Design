import React, { Component } from "react";

import { Input, Password } from "../common/input";

class Register extends Component {
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
    const { login, error, onChange, onSubmit, isError } = this.props;

    return (
      <div className="txt-center">
        <h3 className="h3">Register</h3>
        <br />
        <form onSubmit={onSubmit}>
          <Input
            htmlfor="name"
            label="Full name"
            icon="fa-user-circle-o"
            type="name"
            id="name"
            placeholder="Enter your name"
            autofocus={true}
          />
          <Input
            htmlfor="email"
            label="Email address"
            icon="fa-at"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            autofocus={false}
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
            register={true}
            onChange={onChange}
            error={error.password}
          />
          <input
            className="btn create-acc-btn"
            type="submit"
            value="Create a New Account"
            disabled={isError()}
          />
        </form>
        <br />
        <div className="divider-1">
          <hr />
          <span>New to IMDb?</span>
        </div>
        <button
          className="btn create-acc-btn-1 margin-bottom-10"
          onClick={login}
        >
          Sign In
        </button>
      </div>
    );
  }
}

export default Register;
