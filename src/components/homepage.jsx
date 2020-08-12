import React, { Component } from "react";

import CustomSlider from "./common/customSlider";

import "../stylesheets/homepage.css";

import { getDateFunction } from "./../utils/common";

class HomePage extends Component {
  state = {
    stream: {
      prime: true,
      netflix: false,
      hotstar: false,
      sonyliv: false,
      tvfplay: false,
    },
  };

  toggleActive = (medium) => {
    let stream = {
      prime: false,
      netflix: false,
      hotstar: false,
      sonyliv: false,
      tvfplay: false,
    };
    stream[medium] = true;
    this.setState({ stream });
  };

  render() {
    const { date, month } = getDateFunction();
    let { prime, netflix, hotstar, sonyliv, tvfplay } = this.state.stream;

    return (
      <div className="container">
        <h3 className="h3">What to Watch</h3>
        <div className="left-border">
          <h5 className="sub-heading">Fan Favorites</h5>
        </div>
        <p className="sub-script">This week's top TV and movies</p>
        <CustomSlider />
        <h3 className="h3 margin-bottom-10">Explore what's streaming</h3>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <span
              className={"nav-link navs" + (prime ? " navs-active" : "")}
              onClick={() => this.toggleActive("prime")}
            >
              Prime Video
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (netflix ? " navs-active" : "")}
              onClick={() => this.toggleActive("netflix")}
            >
              Netflix
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (hotstar ? " navs-active" : "")}
              onClick={() => this.toggleActive("hotstar")}
            >
              Hotstar
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (sonyliv ? " navs-active" : "")}
              onClick={() => this.toggleActive("sonyliv")}
            >
              Sonyliv
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (tvfplay ? " navs-active" : "")}
              onClick={() => this.toggleActive("tvfplay")}
            >
              Tvfplay
            </span>
          </li>
        </ul>
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
  }
}

export default HomePage;
