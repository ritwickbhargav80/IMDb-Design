import React, { Component } from "react";
import { getDetails, getGenres, getPosterLink } from "../../utils/apiCalls";
import empty from "./../../assets/empty.png";
import Spinner from "./spinner";
import Slide from "./slide";
import Pagination from "./pagination";

class CustomPage1 extends Component {
  state = {
    watchlist: [],
    data: { mediaData: [], genres: [] },
    link: "",
    pageNo: 1,
    total_pages: null,
  };

  async componentDidMount() {
    const { watchlist, type } = this.props;

    let temp = {},
      mediaData = [];

    for (
      let i = 0;
      i < (watchlist[type].length > 20 ? 20 : watchlist[type].length);
      i++
    ) {
      temp = await getDetails(
        type === "show" ? "tv" : "movie",
        watchlist[type][i]
      );
      mediaData.push(temp);
    }

    const genres = await getGenres(type === "movie" ? "movie" : "tv");

    const total_pages = Math.ceil(watchlist[type].length / 20);

    this.setState({ watchlist, data: { mediaData, genres }, total_pages });
  }

  getString = (genres) => {
    let str = "";
    genres.map((m) => {
      str += m.name + ", ";
      return null;
    });
    return str;
  };

  handleClick = (props, type, id) => {
    props.history.push(`/${type}/${id}`);
  };

  handleUpdate = async (pageNo, type) => {
    let { watchlist } = this.state;
    let { genres } = this.state.data;

    this.setState({ data: { mediaData: [], genres } });
    let temp = {},
      mediaData = [];
    try {
      for (let i = pageNo * 10; i < pageNo * 10 + 20; i++) {
        temp = await getDetails(
          type === "show" ? "tv" : "movie",
          watchlist[type][i]
        );
        mediaData.push(temp);
      }

      this.setState({ data: { mediaData, genres } });
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
    const { type, loadLink, watchlist, onWatchlist } = this.props;
    const { pageNo, total_pages } = this.state;
    const { mediaData } = this.state.data;

    mediaData.map((media) => {
      media.genre = this.getString(media.genres);
      return null;
    });

    const css = {
      marginLeft: "0.75em",
      marginRight: "0.75em",
      marginTop: "2.5em",
    };

    return (
      <div className="container">
        <div className="left-border">
          <h5 className="sub-heading">
            {type.charAt(0).toUpperCase() +
              type.substr(1).toLowerCase() +
              (type === "movie" ? "s" : " Shows")}
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
              {mediaData.length === 0 ? (
                <Spinner />
              ) : (
                mediaData.map((media) =>
                  media.poster_path ? (
                    <div
                      key={media.id}
                      onClick={() => {
                        this.handleClick(this.props.history, type, media.id);
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
                        loadLink={loadLink}
                        watchlist={watchlist}
                        onWatchlist={onWatchlist}
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
                type={type === "movie" ? "movie" : "tv"}
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

export default CustomPage1;
