import React, { Component } from "react";
import CustomPage from "./common/customPage";
import StickyVideo from "react-sticky-video";

class Search extends Component {
  state = {
    link: "",
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
    const {
      search,
      history,
      onClear,
      watchlist,
      onWatchlist,
      login,
    } = this.props;
    const { link } = this.state;

    return (
      <React.Fragment>
        <h3 className="container h3">Search Results</h3>
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
        <CustomPage
          type={"movie"}
          history={history}
          search={search}
          linkLoad={this.loadLink}
          onClear={onClear}
          watchlist={watchlist}
          onWatchlist={onWatchlist}
          login={login}
        />
        <br />
        <br />
        <CustomPage
          type={"tv"}
          history={history}
          search={search}
          linkLoad={this.loadLink}
          onClear={onClear}
          watchlist={watchlist}
          onWatchlist={onWatchlist}
          login={login}
        />
      </React.Fragment>
    );
  }
}

export default Search;
