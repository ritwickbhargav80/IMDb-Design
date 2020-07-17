import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route path="/movies" component={Movies} />
        <Route path="/shows" component={Shows} />
        <Route path="/signin" component={SignIn} /> */}
      </Switch>
    </div>
  );
}

export default App;
