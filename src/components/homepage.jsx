import React, { Component } from "react";
import StickyVideo from "react-sticky-video";

import CustomSlider from "./common/customSlider";

import "react-sticky-video/dist/index.css";
import "../stylesheets/homepage.css";

import { getDateFunction } from "./../utils/common";
import Spinner from "./common/spinner";
import Carousel from "./common/carousel";
import { getGenres, getPopularMovies } from "../utils/apiCalls";

class HomePage extends Component {
  state = {
    media: { upcoming: [], trending: [], popular: [], genres: [], latest: [] },
    people: { popular: [] },
    link: "",
  };

  async componentDidMount() {
    try {
      this.setState({
        media: {
          popular: await getPopularMovies(),
          genres: await getGenres(),
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  loadLink = (link) => {
    this.setState({ link });
  };

  render() {
    const { date, month } = getDateFunction();
    let { popular, genres } = this.state.media;
    let { link } = this.state;

    return (
      <div className="container">
        {link ? (
          <StickyVideo
            className="mt-4"
            url={link}
            stickyConfig={{
              position: "bottom-right",
            }}
          />
        ) : popular.length !== 0 ? (
          <Carousel movies={popular} />
        ) : (
          <Spinner />
        )}
        <h3 className="h3">What to Watch</h3>
        <div className="left-border">
          <h5 className="sub-heading">Fan Favorites</h5>
        </div>
        <p className="sub-script">This week's top TV and movies</p>
        {popular.length === 0 ? (
          <Spinner />
        ) : (
          <CustomSlider
            movies={popular}
            genres={genres}
            props={this.props}
            loadLink={this.loadLink}
          />
        )}
        <h3 className="h3 margin-bottom-10">Popular TV Shows and Movies</h3>
        {popular.length === 0 ? (
          <Spinner />
        ) : (
          <CustomSlider movies={popular} genres={genres} props={this.props} />
        )}
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
