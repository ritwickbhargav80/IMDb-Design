import React, { Component } from "react";
import Slider from "react-slick";

import "../../stylesheets/customSlider.css";
import ProfileSlide from "./profileSlide";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <i
      className="fa fa-chevron-right right-arrow"
      onClick={onClick}
      style={{ visibility: "visible" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <i
      className="fa fa-chevron-left left-arrow"
      onClick={onClick}
      style={{ visibility: "visible" }}
    />
  );
}

class ProfileCustomSlider extends Component {
  // handleClick = (props, type, id) => {
  //   props.history.push(`/${type}/${id}`);
  // };

  getSettings = (profiles) => {
    return {
      dots: false,
      infinite: profiles.length > 7 ? true : false,
      speed: 1000,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
  };

  getProfileLink = (cast) => {
    return "http://image.tmdb.org/t/p/w138_and_h175_face" + cast;
  };

  getSlider = (cast) => {
    const settings = this.getSettings(cast);
    return (
      <div className="container">
        <Slider {...settings}>
          {cast.map((c) => (
            <div key={c.id} className="single-card-1">
              <ProfileSlide
                profile_path={this.getProfileLink(c.profile_path)}
                name={c.name}
                character={c.character}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  render() {
    let { cast } = this.props;

    return this.getSlider(cast);
  }
}

export default ProfileCustomSlider;
