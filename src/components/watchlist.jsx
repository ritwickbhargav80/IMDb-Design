import React, { Component } from "react";
import CustomPage1 from "./common/customPage1";
import StickyVideo from "react-sticky-video";

class Watchlist extends Component {
  state = { link: "" };

  handleClick = (props) => {
    props.history.push("/");
  };

  loadLink = (link) => {
    this.setState({ link });
    window.scroll(0, 0);
  };

  topComponent = (link) => {
    return link ? (
      <StickyVideo
        className="mt-4"
        url={link}
        stickyConfig={{
          position: "bottom-right",
        }}
      />
    ) : (
      ""
    );
  };

  handleClose = () => {
    this.setState({ link: "" });
  };

  render() {
    const { props, watchlist, onWatchlist } = this.props;
    const { link } = this.state;

    return (
      <div className="container">
        <h3 className="h3">Your Watchlist</h3>
        {watchlist.movie.length === 0 && watchlist.show.length === 0 ? (
          <div className="text-center sign-in-card-1">
            <p className="title">No releases added in Watchlist!</p>
            <p className="desc">
              Add movies and shows to keep track of what you want to watch
            </p>
            <input
              className="btn create-acc-btn back-button"
              defaultValue="Browse our Homepage"
              onClick={() => this.handleClick(props)}
            />
          </div>
        ) : (
          <React.Fragment>
            <div className="container">
              {this.topComponent(link)}
              {link && (
                <div style={{ height: "1.64em", marginBottom: "20px" }}>
                  <button
                    className="btn btn-danger mt-2"
                    style={{ float: "right" }}
                    onClick={this.handleClose}
                  >
                    Close Player
                  </button>
                </div>
              )}
            </div>
            <CustomPage1
              watchlist={watchlist}
              onWatchlist={onWatchlist}
              type="movie"
              loadLink={this.loadLink}
            />
            <CustomPage1
              watchlist={watchlist}
              onWatchlist={onWatchlist}
              type="show"
              loadLink={this.loadLink}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Watchlist;
