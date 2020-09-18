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
        topRated: [],
        popular: [],
        playing: [],
        genres: [],
      },
      shows: {
        topRated: [],
        popular: [],
        genres: [],
      },
    },
    // people: { popular: [] },
    link: "",
  };

  async componentDidMount() {
    try {
      this.setState({
        media: {
          movies: {
            popular: await getMedia("popular", "movie"),
            upcoming: await getMedia("upcoming", "movie"),
            playing: await getMedia("now_playing", "movie"),
            topRated: await getMedia("top_rated", "movie"),
            genres: await getGenres("movie"),
          },
          shows: {
            popular: await getMedia("popular", "tv"),
            playing: await getMedia("airing_today", "tv"),
            topRated: await getMedia("top_rated", "tv"),
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
    window.scroll(0, 0);
  };

  topComponent = (link) => {
    let { upcoming } = this.state.media.movies;

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

  handleClose = () => {
    this.setState({ link: "" });
  };

  render() {
    const { date, month } = getDateFunction();
    // getActorBirthday(date, monthInNo);
    let { media } = this.state;
    let { movies } = this.state.media;
    let { link } = this.state;

    return (
      <div className="container">
        {this.topComponent(link)}
        {link && (
          <div style={{ height: "1.64em" }}>
            <button
              className="btn btn-danger mt-2"
              style={{ float: "right" }}
              onClick={this.handleClose}
            >
              Close Player
            </button>
          </div>
        )}
        <br />
        <h3 className="h3">What to Watch</h3>
        <div className="left-border">
          <h5 className="sub-heading">Fan Favorites</h5>
        </div>
        <p className="sub-script">This week's top TV and movies</p>
        {movies.topRated.length === 0 ? (
          <Spinner />
        ) : (
          <CustomSlider
            media={media}
            type={"playing"}
            props={this.props}
            loadLink={this.loadLink}
            checkbox={true}
            val={0}
          />
        )}
        <h3 className="h3 margin-bottom-10">Popular TV Shows and Movies</h3>
        {movies.popular.length === 0 ? (
          <Spinner />
        ) : (
          <CustomSlider
            media={media}
            type={"popular"}
            props={this.props}
            loadLink={this.loadLink}
            checkbox={true}
            val={2}
          />
        )}
        <h3 className="h3">Top Rated</h3>
        {movies.topRated.length === 0 ? (
          <Spinner />
        ) : (
          <CustomSlider
            media={media}
            type={"topRated"}
            props={this.props}
            loadLink={this.loadLink}
            checkbox={true}
            val={4}
          />
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
