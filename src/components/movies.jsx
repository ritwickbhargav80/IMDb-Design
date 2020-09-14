import React, { Component } from "react";
import Slide from "./common/slide";
import { getMedia, getGenres } from "../utils/apiCalls";
import StickyVideo from "react-sticky-video";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    data: { popular: [], genres: [] },
    link: "",
    pageNo: 1,
  };

  async componentDidMount() {
    try {
      this.setState({
        data: {
          popular: await getMedia("popular", "movie", "1"),
          genres: await getGenres("movie"),
        },
      });
      console.log("hi");
    } catch (err) {
      console.log(err);
    }
  }

  getString = (genre_ids, genre) => {
    let str = "";
    genre_ids.map((m) => {
      str += genre.filter((g) => g.id === m)[0]?.name + ", ";
      return null;
    });
    return str;
  };

  getPosterLink = (poster_path) => {
    return process.env.REACT_APP_API_LINK + poster_path;
  };

  loadLink = (link) => {
    this.setState({ link });
  };

  topComponent = (link) => {
    return link ? (
      <StickyVideo
        className="mt-4"
        url={link}
        stickyConfig={{
          position: "bottom-right",
        }}
      />
    ) : (
      ""
    );
  };

  handleClose = () => {
    this.setState({ link: "" });
  };

  render() {
    const css = {
      marginLeft: "0.75em",
      marginRight: "0.75em",
      marginTop: "2.5em",
    };
    const { popular, genres } = this.state.data;

    popular.map((m) => {
      m.genre = this.getString(m.genre_ids, genres);
      return null;
    });

    return (
      <div className="container">
        <h3 className="h3">Movies</h3>
        {this.topComponent(this.state.link)}
        <div style={{ height: "1.64em", marginBottom: "20px" }}>
          {this.state.link && (
            <button
              className="btn btn-danger mt-2"
              style={{ float: "right" }}
              onClick={this.handleClose}
            >
              Close Player
            </button>
          )}
        </div>
        <div className="row">
          {popular.map((movie) => (
            <Slide
              banner={this.getPosterLink(movie.poster_path)}
              title={movie.title}
              genre={movie.genre + movie.release_date.slice(0, 4)}
              content={movie.overview}
              trailer={movie.trailer}
              color={"blue"}
              css={css}
              key={movie.id}
              loadLink={this.loadLink}
            />
          ))}
        </div>
        <br />
        <br />
        <Pagination />
      </div>
    );
  }
}

export default Movies;
