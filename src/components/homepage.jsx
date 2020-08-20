import React, { Component } from "react";
import axios from "axios";

import CustomSlider from "./common/customSlider";

import "../stylesheets/homepage.css";

import { getDateFunction } from "./../utils/common";

require("dotenv").config();

class HomePage extends Component {
  state = {
    stream: {
      prime: true,
      netflix: false,
      hotstar: false,
      sonyliv: false,
      tvfplay: false,
    },
    data: {
      popular: [],
      genres: [],
    },
  };

  async componentDidMount() {
    let apiGenres, movies, data1, data2;
    try {
      data1 = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
      );
      data2 = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      );
      apiGenres = data1.data;
      movies = data2.data;
    } catch (err) {
      console.log(err);
    }
    console.log(movies.results);
    this.setState({
      data: { popular: movies.results, genres: apiGenres.genres },
    });
  }

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
    let { popular, genres } = this.state.data;

    console.log(popular);

    return (
      <div className="container">
        <h3 className="h3">What to Watch</h3>
        <div className="left-border">
          <h5 className="sub-heading">Fan Favorites</h5>
        </div>
        <p className="sub-script">This week's top TV and movies</p>
        <CustomSlider movies={popular} genres={genres} props={this.props} />
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
        <CustomSlider movies={popular} genres={genres} props={this.props} />
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
