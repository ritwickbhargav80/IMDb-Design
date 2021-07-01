import React, { Component } from "react";
import Slider from "react-slick";

import Slide from "./slide";

import "../../stylesheets/customSlider.css";
import { CheckBox } from "./input";
import empty from "./../../assets/empty.png";
import { getPosterLink } from "../../utils/apiCalls";

function SampleNextArrow(props) {
  const { onClick, show } = props;
  return (
    <i
      className="fa fa-chevron-right right-arrow"
      onClick={onClick}
      style={{ visibility: show ? "visible" : "hidden" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick, show } = props;
  return (
    <i
      className="fa fa-chevron-left left-arrow"
      onClick={onClick}
      style={{ visibility: show ? "visible" : "hidden" }}
    />
  );
}

class CustomSlider extends Component {
  state = {
    show: false,
    checkboxes: {
      movies: true,
      shows: true,
    },
  };

  setIsShown(value) {
    this.setState({ show: value });
  }

  handleClick = (props, type, id) => {
    props.history.push(`/${type}/${id}`);
  };

  handleChange = (box) => {
    let checkboxes = this.state.checkboxes;
    checkboxes[box] = !checkboxes[box];
    this.setState({ checkboxes });
  };

  getSettings = (media) => {
    let { show } = this.state;

    return {
      dots: false,
      infinite: media.length > 7 ? true : false,
      speed: 1000,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow show={show} />,
      prevArrow: <SamplePrevArrow show={show} />,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 328,
          settings: {
            slidesToShow: 1.9,
            slidesToScroll: 1.9,
          },
        },
      ],
    };
  };

  getString = (genre_ids, genre) => {
    let str = "";
    genre_ids.map((m) => {
      str += genre.filter((g) => g.id === m)[0]?.name + ", ";
      return null;
    });
    return str;
  };

  splicer = (array, element, index) => {
    array.splice(index * 2, 0, element);
    return array;
  };

  weave = (array1, array2) => {
    return array1.reduce(this.splicer, array2.slice());
  };

  getData = (movies, shows, type, checkbox) => {
    let { genres: mGenres } = movies,
      { genres: sGenres } = shows;
    movies[type].map((movie) => {
      movie.genre = this.getString(movie.genre_ids, mGenres);
      return null;
    });
    shows[type].map((show) => {
      show.genre = this.getString(show.genre_ids, sGenres);
      show.color = "green";
      return null;
    });
    let data;
    if (checkbox.movies && checkbox.shows)
      data = this.weave(movies[type].slice(0, 10), shows[type].slice(0, 10));
    else if (checkbox.movies) data = movies[type];
    else data = shows[type];
    return data;
  };

  getSlider = (
    checkbox,
    data,
    props,
    loadLink,
    media,
    single,
    watchlist,
    onWatchlist,
    login
  ) => {
    const settings = this.getSettings(data);
    if (single) {
      let { genres } = media;
      data.map((m) => {
        m.genre = this.getString(m.genre_ids, genres);
        return null;
      });
    }
    if (checkbox.movies || checkbox.shows)
      return (
        <div
          className="container"
          onMouseEnter={() => this.setIsShown(true)}
          onMouseLeave={() => this.setIsShown(false)}
        >
          <Slider {...settings}>
            {data.map((movie) => (
              <div
                key={movie.id}
                onClick={() =>
                  this.handleClick(
                    props,
                    movie.release_date ? "movie" : "show",
                    movie.id
                  )
                }
                className="single-card"
              >
                <Slide
                  key={movie.id}
                  banner={getPosterLink(movie.poster_path)}
                  title={movie.title ? movie.title : movie.name}
                  genre={
                    movie.genre +
                    String(
                      movie.release_date
                        ? movie.release_date
                        : movie.first_air_date
                    ).slice(0, 4)
                  }
                  content={movie.overview}
                  trailer={movie}
                  props={props}
                  loadLink={loadLink}
                  color={
                    single
                      ? single === "movie"
                        ? "blue"
                        : "green"
                      : movie.color
                  }
                  id={movie.id}
                  watchlist={watchlist}
                  onWatchlist={onWatchlist}
                  login={login}
                />
              </div>
            ))}
          </Slider>
        </div>
      );
    else
      return (
        <div className="text-center not-available">
          <p>
            <img src={empty} alt="NA" />
            Not Available
          </p>
        </div>
      );
  };

  render() {
    let {
      media,
      type,
      props,
      loadLink,
      checkbox = false,
      single,
      val,
      watchlist,
      onWatchlist,
      login,
    } = this.props;

    let { checkboxes } = this.state,
      data;

    if (!single) {
      let { movies, shows } = media;
      data = this.getData(movies, shows, type, checkboxes);
    } else data = media[type];

    return (
      <React.Fragment>
        {checkbox ? (
          <div style={{ height: "1.64em" }}>
            <CheckBox
              mChecked={checkboxes.movies}
              sChecked={checkboxes.shows}
              onChange={this.handleChange}
              val={val}
            />
          </div>
        ) : (
          ""
        )}
        {this.getSlider(
          checkboxes,
          data,
          props,
          loadLink,
          media,
          single,
          watchlist,
          onWatchlist,
          login
        )}
      </React.Fragment>
    );
  }
}

export default CustomSlider;
