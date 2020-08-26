import React, { Component } from "react";
import Slider from "react-slick";

import Slide from "./slide";

import "../../stylesheets/customSlider.css";
import { getGenreString } from "../../utils/apiCalls";
import { CheckBox } from "./input";
import empty from "./../../assets/empty.png";

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

function getPosterLink(poster_path) {
  return process.env.REACT_APP_API_LINK + poster_path;
}

class CustomSlider extends Component {
  state = {
    show: false,
    checkbox: {
      movies: true,
      shows: true,
    },
  };

  setIsShown(value) {
    this.setState({ show: value });
  }

  handleClick = (props, id) => {
    props.history.push(`/movie/${id}`);
  };

  handleChange = (box) => {
    let checkbox = this.state.checkbox;
    checkbox[box] = !checkbox[box];
    this.setState({ checkbox });
  };

  render() {
    let {
      media,
      genres,
      props,
      loadLink,
      checkbox: displayCheckbox,
    } = this.props;
    let { show, checkbox } = this.state;
    const settings = {
      dots: false,
      infinite: media.length > 7 ? true : false,
      speed: 1000,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow show={show} />,
      prevArrow: <SamplePrevArrow show={show} />,
      // autoplay: true,
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

    return (
      <React.Fragment>
        {displayCheckbox ? (
          <div style={{ height: "1.64em" }}>
            <CheckBox
              mChecked={checkbox.movies}
              sChecked={checkbox.shows}
              onChange={this.handleChange}
            />
          </div>
        ) : (
          ""
        )}
        {checkbox.media || checkbox.shows ? (
          <div
            className="container"
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
          >
            <Slider {...settings}>
              {media.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => this.handleClick(props, movie.id)}
                  className="single-card"
                >
                  <Slide
                    banner={getPosterLink(movie.poster_path)}
                    title={movie.title ? movie.title : movie.name}
                    genre={getGenreString(
                      movie.genre_ids,
                      genres,
                      movie.release_date
                        ? movie.release_date
                        : movie.first_air_date
                    )}
                    content={movie.overview}
                    trailer={movie.trailer}
                    props={props}
                    loadLink={loadLink}
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="text-center not-available">
            <p>
              <img src={empty} alt="NA" />
              Not Available
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CustomSlider;
