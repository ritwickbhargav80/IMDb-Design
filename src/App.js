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

class App extends Component {
  state = {
    search: "",
    changed: false,
  };

  handleChange = (e) => {
    this.setState({ search: e.currentTarget.value, changed: true });
  };

  render() {
    const { search, changed } = this.state;

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
        <Navbar onChange={this.handleChange} />
        <Switch>
          {search !== "" && <Route path="/search" component={Search} />}
          {search !== "" && <Redirect to="/search" />}
          <Route
            path="/movies"
            component={(props) => <CustomPage type={"movie"} history={props} />}
          />
          <Route
            path="/shows"
            component={(props) => <CustomPage type={"tv"} history={props} />}
          />
          <Route path="/signin" component={SignIn} />
          <Route path="/not-found" exact component={NotFound} />
          {/* <Route path="/movie/:id" component={NotFound} /> 
           <Route path="/show/:id" component={NotFound} /> */}
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
