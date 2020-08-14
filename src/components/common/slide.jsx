import React, { Component } from "react";

import "../../stylesheets/slide.css";

class Slide extends Component {
  state = { show: false, showBtn: false };

  setIsShown(value) {
    this.setState({ show: value });
  }

  setBtnIsShown(value) {
    this.setState({ showBtn: value });
  }

  render() {
    let { banner, title, trailer, duration, genre, content } = this.props;

    return (
      <div className="slide">
        <div className="child-element">
          <div
            className="card custom-card"
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
          >
            <img className="img-responsive img-card" src={banner} alt="hi" />
            <div
              className="slide-text"
              style={{ opacity: this.state.show ? 1 : 0 }}
            >
              <div className="content-title-div">
                <span className="content-title">{title}</span>
                <a href={trailer}>
                  <abbr title="Play Trailer">
                    <div className="pulse">
                      <i
                        className="fa fa-play-circle-o play-circle-icon"
                        aria-hidden="true"
                      />
                    </div>
                  </abbr>
                </a>
              </div>
              <div className="content-info">
                <div className="duration">{duration}</div>{" "}
                <span className="genre">{genre}</span>
              </div>
              <div className="content-desc">{content}</div>
              <div className="add-to-watchlist" title="Add to Watchlist">
                <a href="/">
                  <p
                    className="watchlist btn"
                    onMouseEnter={() => this.setBtnIsShown(true)}
                    onMouseLeave={() => this.setBtnIsShown(false)}
                    style={{ opacity: this.state.showBtn ? 1 : 0.8 }}
                  >
                    <i className="fa-plus plus-icon" aria-hidden="true" />
                    <span className="btn-txt">Add to Watchlist</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
