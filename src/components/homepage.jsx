import React from "react";
import "../stylesheets/homepage.css";

const HomePage = () => {
  let date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "March",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth() + 1];
  date = date.getDate();

  return (
    <div className="container">
      <div>
        <h3 className="h3">What to Watch</h3>
        <div className="left-border">
          <h5 className="sub-heading">Fan Favorites</h5>
        </div>
        <p className="sub-script">This week's top TV and movies</p>
      </div>
      <div>
        <h3 className="h3">Explore what's streaming</h3>
      </div>
      <div>
        <h3 className="h3">Today's Exclusive</h3>
        <div className="left-border">
          <h5 className="sub-heading">Top Coverage &gt;</h5>
        </div>
        <p className="sub-script">
          People born on {month} {date}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
