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
import Watchlist from "./components/watchlist";

class App extends Component {
  state = {
    search: "",
    login: false,
    changed: false,
    watchlist: { movie: [], show: [] },
  };

  handleChange = (e) => {
    // const search = document.getElementById("myForm").elements[0].value;
    // this.setState({ search, changed: true });
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

  handleWhitelist = (type, id) => {
    let { watchlist } = this.state;
    const temp = watchlist[type].find((e) => e === id);
    if (temp === undefined) watchlist[type].push(id);
    else {
      const filtered = watchlist[type].filter((e) => e !== id);

      if (type === "movie")
        this.setState({ watchlist: { movie: filtered, show: watchlist.show } });
      else
        this.setState({
          watchlist: { movie: watchlist.movie, show: filtered },
        });
    }
  };

  render() {
    const { search, login, changed, watchlist } = this.state;

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
        <div data-toggle="collapse" data-target=".navbar-collapse.show">
          <Switch>
            {search !== "" && (
              <Route
                path="/search"
                component={(props) => (
                  <Search
                    search={search}
                    history={props}
                    onClear={this.handleClear}
                    watchlist={watchlist}
                    onWatchlist={this.handleWhitelist}
                    login={login}
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
                  watchlist={watchlist}
                  onWatchlist={this.handleWhitelist}
                  login={login}
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
                  watchlist={watchlist}
                  onWatchlist={this.handleWhitelist}
                  login={login}
                />
              )}
            />
            <Route
              path="/signin"
              component={(props) => (
                <SignIn onLogin={() => this.handleLogin(props)} />
              )}
            />
            {login && (
              <Route
                path="/watchlist"
                component={(props) => (
                  <Watchlist
                    props={props}
                    watchlist={watchlist}
                    onWatchlist={this.handleWhitelist}
                  />
                )}
              />
            )}
            <Route path="/not-found" exact component={NotFound} />
            <Route
              path="/:type/:id"
              component={(props) => (
                <CustomDetails
                  props={props}
                  login={login}
                  watchlist={watchlist}
                  onWatchlist={this.handleWhitelist}
                />
              )}
            />
            <Route
              path="/"
              exact
              component={(props) => (
                <HomePage
                  watchlist={watchlist}
                  onWatchlist={this.handleWhitelist}
                  props={props}
                  login={login}
                />
              )}
            />
            {search === "" && changed && <Redirect to="/" />}
            <Redirect to="/not-found" />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
