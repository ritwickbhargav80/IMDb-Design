import React, { Component } from "react";

import "../../stylesheets/slide.css";

import { getTitle, getContent } from "../../utils/slide";

class Slide extends Component {
  state = { show: false, showBtn: false };

  setIsShown(value) {
    this.setState({ show: value });
  }

  setBtnIsShown(value) {
    this.setState({ showBtn: value });
  }

  handleTrailer = (e, trailer, loadLink) => {
    e.stopPropagation();
    if (!trailer) loadLink("");
    else loadLink("https://www.youtube.com/watch?v=" + trailer);
  };

  handleWhitelist = (e, props) => {
    e.stopPropagation();
    window.location = "/";
  };

  render() {
    let {
      banner,
      title,
      trailer,
      genre,
      content,
      props,
      loadLink,
      color,
    } = this.props;

    let titleSliced = getTitle(title),
      contentSliced = getContent(content);

    return (
      <div className="slide">
        <div className="child-element">
          <div
            className="card custom-card"
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
          >
            <img
              className="img-responsive img-card"
              style={{
                borderRadius: this.state.show
                  ? "0.55rem 0.55rem 0.25rem 0.25rem"
                  : "0.25rem",
              }}
              src={banner}
              alt="hi"
            />
            <div
              className="slide-text"
              style={{
                opacity: this.state.show ? 1 : 0,
                backgroundImage:
                  color === "green"
                    ? "linear-gradient(rgba(0, 41, 23, 0),rgba(0, 41, 23, 0.12) 5px,rgba(0, 41, 23, 0.52) 24px,rgba(0, 41, 23, 0.79) 40px,rgb(0, 41, 23) 56px,rgb(0, 41, 23) 100%)"
                    : "linear-gradient(rgba(18, 38, 66, 0),rgba(18, 38, 66, 0.12) 5px,rgba(18, 38, 66, 0.52) 24px,rgba(18, 38, 66, 0.79) 40px,rgb(18, 38, 66) 56px,rgb(18, 38, 66) 100%)",
              }}
            >
              <div className="content-title-div">
                <abbr title={title}>
                  <span className="content-title" style={{ cursor: "pointer" }}>
                    {titleSliced}
                  </span>
                </abbr>
                <abbr title="Play Trailer">
                  <div
                    className="pulse"
                    onClick={(e) => this.handleTrailer(e, trailer, loadLink)}
                  >
                    <i
                      className="fa fa-play-circle-o play-circle-icon"
                      aria-hidden="true"
                    />
                  </div>
                </abbr>
              </div>
              <div className="content-info">
                <span className="genre">{genre}</span>
              </div>
              <div className="content-desc">{contentSliced}</div>
              <div
                className="add-to-watchlist"
                title="Add to Watchlist"
                onClick={(e) => this.handleWhitelist(e, props)}
                style={{
                  backgroundColor: color === "green" ? "#004235" : "#1b3a64",
                }}
              >
                <p
                  className="watchlist btn"
                  onMouseEnter={() => this.setBtnIsShown(true)}
                  onMouseLeave={() => this.setBtnIsShown(false)}
                  style={{ opacity: this.state.showBtn ? 1 : 0.8 }}
                >
                  <i className="fa-plus plus-icon" aria-hidden="true" />
                  <span className="btn-txt">Add to Watchlist</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
