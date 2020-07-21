import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/common/navbar";
import Movies from "./components/movies";
import Shows from "./components/shows";
import SignIn from "./components/signIn";
import HomePage from "./components/homepage";
import Footer from "./components/common/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/shows" component={Shows} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
