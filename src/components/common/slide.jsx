import React, { Component } from "react";

import "../../stylesheets/slide.css";

import { getTitle, getContent } from "../../utils/slide";
import { toast } from "react-toastify";
import { getTrailer } from "../../utils/apiCalls";

class Slide extends Component {
  state = { show: false, showBtn: false };

  setIsShown(value) {
    this.setState({ show: value });
  }

  setBtnIsShown(value) {
    this.setState({ showBtn: value });
  }

  handleTrailer = async (e, media, loadLink, id, type) => {
    e.stopPropagation();
    try {
      const trailer = await getTrailer(id, type === "movie" ? "movie" : "tv");

      if (!trailer) toast.info("No trailer available");
      else loadLink("https://www.youtube.com/watch?v=" + trailer);
    } catch (err) {
      if (err.response.status === 404) toast.info("No trailer available");
      else toast.info("Something went Wrong");
    }
  };

  handleWhitelist = (e, props, onWatchlist, type, id, login, added) => {
    e.stopPropagation();
    if (login) {
      onWatchlist(type === "movie" ? "movie" : "tv", id);
      if (added === undefined) toast.success("Added successfully!");
      else toast.success("Removed successfully!");
    } else props.history.push("/signin");
  };

  render() {
    let {
      banner,
      title,
      trailer,
      genre,
      content,
      loadLink,
      color,
      css,
      watchlist,
      onWatchlist,
      id,
      props,
      login,
    } = this.props;

    const type = color === "green" ? "show" : "movie";
    const added = watchlist[type].find((e) => e === id);

    let titleSliced = getTitle(title),
      contentSliced = getContent(content);

    return (
      <div className="slide">
        <div className="child-element">
          <div
            className="card custom-card"
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
            style={css}
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
                    onClick={(e) =>
                      this.handleTrailer(e, trailer, loadLink, id, type)
                    }
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
                onClick={(e) =>
                  this.handleWhitelist(
                    e,
                    props,
                    onWatchlist,
                    type,
                    id,
                    login,
                    added
                  )
                }
                style={{
                  backgroundColor:
                    added !== undefined
                      ? "rgba(245, 192, 31, 0.8)"
                      : color === "green"
                      ? "#004235"
                      : "#1b3a64",
                }}
              >
                <p
                  className="watchlist btn"
                  onMouseEnter={() => this.setBtnIsShown(true)}
                  onMouseLeave={() => this.setBtnIsShown(false)}
                  style={{ opacity: this.state.showBtn ? 1 : 0.8 }}
                >
                  <i
                    className={
                      (added === undefined ? "fa-plus " : "fa-times ") +
                      "plus-icon " +
                      (added === undefined ? "" : "select-color")
                    }
                    aria-hidden="true"
                  />
                  <span
                    className={
                      "btn-txt " + (added === undefined ? "" : "select-color")
                    }
                  >
                    {added === undefined ? "Add to Watchlist" : "Remove"}
                  </span>
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
