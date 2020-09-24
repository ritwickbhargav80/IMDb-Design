import React, { Component } from "react";
import "../../stylesheets/slide.css";
import { getTitle } from "../../utils/slide";

class ProfileSlide extends Component {
  state = { show: false };

  setIsShown(value) {
    this.setState({ show: value });
  }

  render() {
    let { profile_path, name, character } = this.props;

    return (
      <div className="slide-1">
        <div className="child-element">
          <div
            className="card custom-card-1"
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
          >
            <img
              className="img-responsive img-card"
              src={profile_path}
              alt="hi"
            />
          </div>
          <div className="slide-text-1">
            <div className="content-title-div">
              <abbr title={name}>
                <h5 className="content-title-1">{getTitle(name)}</h5>
              </abbr>
            </div>
            <div className="content-info">
              <h6 className="character">{character}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSlide;
