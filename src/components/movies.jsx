import React, { Component } from "react";
import Slide from "./common/slide";
import { getMedia, getGenres } from "../utils/apiCalls";

class Movies extends Component {
  state = {
    data: { popular: [], genres: [] },
  };

  async componentDidMount() {
    try {
      this.setState({
        data: {
          popular: await getMedia("popular", "movie"),
          genres: await getGenres("movie"),
        },
      });
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
