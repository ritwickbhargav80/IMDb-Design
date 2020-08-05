import React from "react";
import Slider from "react-slick";

import { getDateFunction } from "./../utils/common";

import "../stylesheets/homepage.css";

const HomePage = () => {
  const { date, month } = getDateFunction();

  var settings = {
    dots: false,
    infinite: 8 > 7 ? true : false, // length > 7
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    // slidesToShow: 1,
    // centerMode: true,
    // centerPadding: "15%",
    // speed: 500
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
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="child-element">
                <div className="card custom-card">
                  <img
                    className="img-responsive img-card"
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
                    alt="hi"
                  />
                </div>
              </div>
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
