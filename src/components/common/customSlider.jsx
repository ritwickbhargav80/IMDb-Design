import React, { Component } from "react";
import Slider from "react-slick";

import Slide from "./slide";

class CustomSlider extends Component {
  state = {};

  render() {
    const settings = {
      dots: false,
      infinite: 8 > 7 ? true : false, // length > 7
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
      <div className="container">
        <Slider {...settings}>
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </Slider>
      </div>
    );
  }
}

export default CustomSlider;
