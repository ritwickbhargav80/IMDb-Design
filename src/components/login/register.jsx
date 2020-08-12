import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

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
    const { login } = this.props;

    return (
      <div className="txt-center">
        <h3 className="h3">Register</h3>
        <br />
        <form>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Your Name
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text prepend">
                  <i
                    className="fa-user-circle-o fa-sm icon"
                    aria-hidden="true"
                  />
                  {/* <i className="fa fa-envelope-o" aria-hidden="true" /> */}
                </div>
              </div>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                autoFocus={true}
                required={true}
              />
            </div>
          </div>
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
                required={true}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
              <i
                className="fa-question-circle"
                aria-hidden="true"
                data-for="question-circle"
                data-tip
              />
              <ReactTooltip id="question-circle">
                <p>Passwords must be at least 8 characters.</p>
              </ReactTooltip>
            </label>
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
          <input
            className="btn create-acc-btn"
            type="submit"
            value="Create a New Account"
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
