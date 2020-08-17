import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/common/navbar";
import Movies from "./components/movies";
import Shows from "./components/shows";
import SignIn from "./components/signIn";
import HomePage from "./components/homepage";
import NotFound from "./components/notFound";
import Footer from "./components/common/footer";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.currentTarget.value });
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Navbar onChange={this.handleChange} />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/shows" component={Shows} />
          <Route path="/signin" component={SignIn} />
          <Route path="/not-found" exact component={NotFound} />
          {/* <Route path="/movie/:id" component={NotFound} /> */}
          <Route path="/" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
