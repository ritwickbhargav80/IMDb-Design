import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/common/navbar";
import SignIn from "./components/signIn";
import HomePage from "./components/homepage";
import NotFound from "./components/notFound";
import Footer from "./components/common/footer";
import { ToastContainer, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CustomPage from "./components/common/customPage";
import Search from "./components/search";
import CustomDetails from "./components/common/customDetails";

class App extends Component {
  state = {
    search: "",
    login: false,
    changed: false,
  };

  handleChange = (e) => {
    this.setState({ search: e.currentTarget.value, changed: true });
  };

  handleClear = () => {
    document.getElementById("myForm").reset();
    this.setState({ search: "" });
  };

  handleLogin = (props) => {
    const { login } = this.state;
    this.setState({ login: !login });
    !login && props.history.replace("/");
  };

  render() {
    const { search, login, changed } = this.state;

    return (
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          transition={Flip}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar
          login={login}
          onLogout={() => this.handleLogin(this.props)}
          onChange={this.handleChange}
          onClear={this.handleClear}
        />
        <Switch>
          {search !== "" && (
            <Route
              path="/search"
              component={(props) => (
                <Search
                  search={search}
                  history={props}
                  onClear={this.handleClear}
                />
              )}
            />
          )}
          {search !== "" && <Redirect to="/search" />}
          <Route
            path="/movies"
            component={(props) => (
              <CustomPage
                type={"movie"}
                history={props}
                onClear={this.handleClear}
              />
            )}
          />
          <Route
            path="/shows"
            component={(props) => (
              <CustomPage
                type={"tv"}
                history={props}
                onClear={this.handleClear}
              />
            )}
          />
          <Route
            path="/signin"
            component={(props) => (
              <SignIn onLogin={() => this.handleLogin(props)} />
            )}
          />
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/:type/:id" component={CustomDetails} />
          <Route path="/" exact component={HomePage} />
          {search === "" && changed && <Redirect to="/" />}
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
