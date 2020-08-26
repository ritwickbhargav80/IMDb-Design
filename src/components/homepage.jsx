import React, { Component } from "react";
import StickyVideo from "react-sticky-video";

import CustomSlider from "./common/customSlider";

import "react-sticky-video/dist/index.css";
import "../stylesheets/homepage.css";

import { getDateFunction } from "./../utils/common";
import Spinner from "./common/spinner";
import Carousel from "./common/carousel";
import { getGenres, getMedia } from "../utils/apiCalls";

class HomePage extends Component {
  state = {
    media: {
      movies: {
        upcoming: [],
        trending: [],
        popular: [],
        genres: [],
        latest: [],
      },
      shows: {
        trending: [],
        popular: [],
        genres: [],
        latest: [],
      },
    },
    people: { popular: [] },
    link: "",
  };

  async componentDidMount() {
    try {
      this.setState({
        media: {
          movies: {
            popular: await getMedia("popular", "movie"),
            upcoming: await getMedia("upcoming", "movie"),
            genres: await getGenres("movie"),
          },
          shows: {
            popular: await getMedia("popular", "tv"),
            genres: await getGenres("tv"),
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  loadLink = (link) => {
    this.setState({ link });
  };

  topComponent = (link, upcoming) => {
    return link ? (
      <StickyVideo
        className="mt-4"
        url={link}
        stickyConfig={{
          position: "bottom-right",
        }}
      />
    ) : upcoming.length !== 0 ? (
      <Carousel movies={upcoming} />
    ) : (
      <Spinner />
    );
  };

  render() {
    const { date, month } = getDateFunction();
    let { media } = this.state;
    let { movies } = this.state.media;
    let { link } = this.state;

    return (
      <div className="container">
        {this.topComponent(link, movies.upcoming)}
        <h3 className="h3">What to Watch</h3>
        <div className="left-border">
          <h5 className="sub-heading">Fan Favorites</h5>
        </div>
        <p className="sub-script">This week's top TV and movies</p>
        {movies.popular.length === 0 ? (
          <Spinner />
        ) : (
          <CustomSlider
            media={media}
            type={"popular"}
            props={this.props}
            loadLink={this.loadLink}
            checkbox={true}
          />
        )}
        <h3 className="h3 margin-bottom-10">Popular TV Shows and Movies</h3>
        {/* {shows.popular.length === 0 ? (
          <Spinner />
        ) : (
          <CustomSlider
            media={shows.popular}
            genres={shows.genres}
            props={this.props}
            loadLink={this.loadLink}
            checkbox={false}
          />
        )} */}
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
