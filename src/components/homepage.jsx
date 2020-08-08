import React from "react";

import CustomSlider from "./common/customSlider";

import { getDateFunction } from "./../utils/common";

import "../stylesheets/homepage.css";

const HomePage = () => {
  const { date, month } = getDateFunction();

  return (
    <div className="container">
      <h3 className="h3">What to Watch</h3>
      <div className="left-border">
        <h5 className="sub-heading">Fan Favorites</h5>
      </div>
      <p className="sub-script">This week's top TV and movies</p>
      <CustomSlider />
      <h3 className="h3">Explore what's streaming</h3>
      <CustomSlider />
      <h3 className="h3">Today's Exclusive</h3>
      <div className="left-border">
        <h5 className="sub-heading">Top Coverage &gt;</h5>
      </div>
      <p className="sub-script">
        People born on {month} {date}
      </p>
    </div>
  );
};

export default HomePage;
