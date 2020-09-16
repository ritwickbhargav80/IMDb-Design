import React, { Component } from "react";
import Slide from "./slide";
import { getMedia, getGenres } from "../../utils/apiCalls";
import StickyVideo from "react-sticky-video";
import Spinner from "./spinner";
import Pagination from "./pagination";

class CustomPage extends Component {
  state = {
    data: { popular: [], genres: [] },
    link: "",
    pageNo: 1,
  };

  async componentDidMount() {
    try {
      const { type } = this.props;
      this.setState({
        data: {
          popular: await getMedia("popular", type, "1"),
          genres: await getGenres(type),
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  getString = (genre_ids, genre) => {
    let str = "";
    genre_ids.map((m) => {
      str += genre.filter((g) => g.id === m)[0]?.name + ", ";
      return null;
    });
    return str;
  };

  getPosterLink = (poster_path) => {
    return process.env.REACT_APP_API_LINK + poster_path;
  };

  handleClick = (props, type, id) => {
    props.history.push(`/${type}/${id}`);
  };

  loadLink = (link) => {
    this.setState({ link });
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

  handleUpdate = async (pageNo, type) => {
    let { genres } = this.state.data;
    this.setState({ popular: [], genres });
    try {
      this.setState({
        data: {
          popular: await getMedia("popular", type, pageNo),
          genres,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  updatePage = (type, value) => {
    let { pageNo } = this.state;
    if (value === "left" && pageNo !== 1) pageNo -= 1;
    else if (value === "right" && pageNo !== 500) pageNo += 1;
    else if (value !== "left" && value !== "right") pageNo = value;
    this.setState({ pageNo });
    this.handleUpdate(pageNo, type);
  };

  render() {
    const { type } = this.props;
    const css = {
      marginLeft: "0.75em",
      marginRight: "0.75em",
      marginTop: "2.5em",
    };
    const { popular, genres } = this.state.data;
    let { pageNo } = this.state;

    popular.map((m) => {
      m.genre = this.getString(m.genre_ids, genres);
      return null;
    });

    return (
      <div className="container">
        <h3 className="h3">
          {type.charAt(0).toUpperCase() +
            type.substr(1).toLowerCase() +
            (type === "movie" ? "s" : " Shows")}
        </h3>
        {this.topComponent(this.state.link)}
        {this.state.link && (
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
        <div className="left-border">
          <h5 className="sub-heading">
            Popular{" "}
            {type.charAt(0).toUpperCase() +
              type.substr(1).toLowerCase() +
              (type === "movie" ? "s" : " Shows")}
          </h5>
        </div>
        <div className="row">
          {popular.length === 0 ? (
            <Spinner />
          ) : (
            popular.map((media) => (
              <div
                key={media.id}
                onClick={() => this.handleClick(this.props, type, media.id)}
                className="single-card"
              >
                <Slide
                  banner={this.getPosterLink(media.poster_path)}
                  title={type === "movie" ? media.title : media.name}
                  genre={
                    media.genre +
                    (type === "movie"
                      ? media.release_date.slice(0, 4)
                      : media.first_air_date.slice(0, 4))
                  }
                  content={media.overview}
                  trailer={media.trailer}
                  color={"green"}
                  css={css}
                  loadLink={this.loadLink}
                />
              </div>
            ))
          )}
        </div>
        <br />
        <Pagination page={pageNo} type={type} updatePage={this.updatePage} />
      </div>
    );
  }
}

export default CustomPage;
