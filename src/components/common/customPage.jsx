import React, { Component } from "react";
import Slide from "./slide";
import {
  getMedia,
  getGenres,
  getTotalPages,
  getPosterLink,
} from "../../utils/apiCalls";
import StickyVideo from "react-sticky-video";
import Spinner from "./spinner";
import Pagination from "./pagination";
import empty from "./../../assets/empty.png";

class CustomPage extends Component {
  state = {
    data: { popular: [], genres: [] },
    link: "",
    pageNo: 1,
    total_pages: null,
  };

  async componentDidMount() {
    try {
      const { type, search } = this.props;
      const { pageNo } = this.state;
      if (search)
        this.setState({
          data: {
            popular: await getMedia(type, "search", pageNo, search),
            genres: await getGenres(type),
          },
          total_pages: await getTotalPages(type, "search", pageNo, search),
        });
      else
        this.setState({
          data: {
            popular: await getMedia("popular", type, pageNo),
            genres: await getGenres(type),
          },
          total_pages: await getTotalPages("popular", type, pageNo),
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

  handleClick = (props, type, id, onClear) => {
    onClear();
    if (type === "tv") type = "show";
    props.history.push(`/${type}/${id}`);
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

  handleUpdate = async (pageNo, type) => {
    let { genres } = this.state.data;
    const { search } = this.props;
    this.setState({ data: { popular: [], genres } });
    try {
      if (search)
        this.setState({
          data: {
            popular: await getMedia(type, "search", pageNo, search),
            genres,
          },
        });
      else
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
    let { pageNo, total_pages } = this.state;
    if (value === "left" && pageNo !== 1) pageNo -= 1;
    else if (value === "right" && pageNo !== total_pages) pageNo += 1;
    else if (value !== "left" && value !== "right") pageNo = value;
    this.setState({ pageNo });
    this.handleUpdate(pageNo, type);
  };

  render() {
    const { type, search, onClear, watchlist, onWatchlist, history, login } =
      this.props;
    const css = {
      marginLeft: "0.75em",
      marginRight: "0.75em",
      marginTop: "2.5em",
    };
    const { popular, genres } = this.state.data;
    let { pageNo, total_pages } = this.state;

    popular.map((m) => {
      m.genre = this.getString(m.genre_ids, genres);
      return null;
    });

    return (
      <div className="container">
        {!search && (
          <h3 className="h3">
            {type.charAt(0).toUpperCase() +
              type.substr(1).toLowerCase() +
              (type === "movie" ? "s" : " Shows")}
          </h3>
        )}
        {!search && this.topComponent(this.state.link)}
        {!search && this.state.link && (
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
            {search
              ? type.charAt(0).toUpperCase() +
                type.substr(1).toLowerCase() +
                (type === "movie" ? "s" : " Shows")
              : "Popular " +
                (type.charAt(0).toUpperCase() +
                  type.substr(1).toLowerCase() +
                  (type === "movie" ? "s" : " Shows"))}
          </h5>
        </div>
        {total_pages === 0 ? (
          <div className="text-center not-available">
            <p>
              <img src={empty} alt="NA" />
              Not Available
            </p>
          </div>
        ) : (
          <React.Fragment>
            <div className="row">
              {popular.length === 0 ? (
                <Spinner />
              ) : (
                popular.map((media) =>
                  media.poster_path ? (
                    <div
                      key={media.id}
                      onClick={() => {
                        this.handleClick(
                          this.props.history,
                          type,
                          media.id,
                          onClear
                        );
                      }}
                      className="single-card"
                    >
                      <Slide
                        id={media.id}
                        banner={getPosterLink(media.poster_path)}
                        title={type === "movie" ? media.title : media.name}
                        genre={
                          media.genre +
                          (type === "movie"
                            ? String(media.release_date).slice(0, 4)
                            : String(media.first_air_date).slice(0, 4))
                        }
                        content={media.overview}
                        trailer={media}
                        color={type === "movie" ? "blue" : "green"}
                        css={css}
                        loadLink={search ? this.props.linkLoad : this.loadLink}
                        watchlist={watchlist}
                        onWatchlist={onWatchlist}
                        props={history}
                        login={login}
                      />
                    </div>
                  ) : (
                    <React.Fragment key={media.id} />
                  )
                )
              )}
            </div>
            <br />
            {total_pages !== null && total_pages !== 0 && total_pages > 1 && (
              <Pagination
                page={pageNo}
                type={type}
                updatePage={this.updatePage}
                pages={total_pages}
              />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default CustomPage;
