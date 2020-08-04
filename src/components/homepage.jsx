import React from "react";
import Slider from "react-slick";

import { getDateFunction } from "./../utils/common";

import "../stylesheets/homepage.css";

const HomePage = () => {
  const { date, month } = getDateFunction();

  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h3 className="h3">What to Watch</h3>
      <div className="left-border">
        <h5 className="sub-heading">Fan Favorites</h5>
      </div>
      <p className="sub-script">This week's top TV and movies</p>
      <div className="container">
        <div>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
          </Slider>
        </div>
      </div>
      <h3 className="h3">Explore what's streaming</h3>
      <h3 className="h3">Today's Exclusive</h3>
      <div className="left-border">
        <h5 className="sub-heading">Top Coverage &gt;</h5>
      </div>
      <p className="sub-script">
        People born on {month} {date}
      </p>
    </div>
  );
};

export default HomePage;
