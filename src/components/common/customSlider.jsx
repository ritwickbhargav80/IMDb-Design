import React, { Component } from "react";
import Slider from "react-slick";

import Slide from "./slide";

import "../../stylesheets/customSlider.css";

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
  state = { show: false };

  setIsShown(value) {
    this.setState({ show: value });
  }

  handleClick = (props, id) => {
    props.history.push(`/movie/${id}`);
  };

  render() {
    let { movies, props } = this.props;
    const settings = {
      dots: false,
      infinite: 8 > 7 ? true : false, // length > 7
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow show={this.state.show} />,
      prevArrow: <SamplePrevArrow show={this.state.show} />,
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
      <div
        className="container"
        onMouseEnter={() => this.setIsShown(true)}
        onMouseLeave={() => this.setIsShown(false)}
      >
        <Slider {...settings}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => this.handleClick(props, movie.id)}
              className="single-card"
            >
              <Slide
                banner={movie.banner}
                title={movie.title}
                duration={movie.duration}
                genre={movie.genre}
                content={movie.content}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CustomSlider;
