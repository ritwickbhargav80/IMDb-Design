import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ReactStoreIndicator from "react-score-indicator";
import {
  getCast,
  getDetails,
  getPosterLink,
  getKeywords,
  getSimilarMovies,
  getRecommendations,
  getGenres,
  getTrailer,
  getReviews,
} from "../../utils/apiCalls";
import Spinner from "./spinner";
import DisplayOverview from "./displayOverview";
import ProfileCustomSlider from "./profileCustomSlider";
import Keywords from "./keywords";
import CustomSlider from "./customSlider";
import StickyVideo from "react-sticky-video";
import { toast } from "react-toastify";
import Reviews from "./Reviews";
import empty from "../../assets/empty.png";

class CustomDetails extends Component {
  state = {
    id: "",
    data: {},
    cast: [],
    keywords: [],
    genres: [],
    similar: [],
    recommendations: [],
    trailer: "",
    link: "",
    reviews: [],
    play: false,
  };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props.props;

    const data = await getDetails(
      params.type === "show" ? "tv" : "movie",
      params.id
    );

    const cast = await getCast(
      params.type === "movie" ? "movie" : "tv",
      params.id
    );

    const keywords = await getKeywords(
      params.type === "movie" ? "movie" : "tv",
      params.id
    );

    const genres = await getGenres(params.type === "movie" ? "movie" : "tv");

    const similar = await getSimilarMovies(
      params.type === "movie" ? "movie" : "tv",
      params.id
    );

    const recommendations = await getRecommendations(
      params.type === "movie" ? "movie" : "tv",
      params.id
    );

    const trailer = await getTrailer(
      params.id,
      params.type === "movie" ? "movie" : "tv"
    );

    const reviews = await getReviews(
      params.type === "movie" ? "movie" : "tv",
      params.id
    );

    this.setState({
      id: params.id,
      data,
      cast,
      keywords,
      genres,
      similar,
      recommendations,
      trailer,
      reviews,
    });
  }

  async componentDidUpdate() {
    const {
      match: { params },
    } = this.props.props;

    if (params.id !== this.state.id) {
      const data = await getDetails(
        params.type === "show" ? "tv" : "movie",
        params.id
      );

      const cast = await getCast(
        params.type === "movie" ? "movie" : "tv",
        params.id
      );

      const keywords = await getKeywords(
        params.type === "movie" ? "movie" : "tv",
        params.id
      );

      const genres = await getGenres(params.type === "movie" ? "movie" : "tv");

      const similar = await getSimilarMovies(
        params.type === "movie" ? "movie" : "tv",
        params.id
      );

      const recommendations = await getRecommendations(
        params.type === "movie" ? "movie" : "tv",
        params.id
      );

      const trailer = await getTrailer(
        params.id,
        params.type === "movie" ? "movie" : "tv"
      );

      const reviews = await getReviews(
        params.type === "movie" ? "movie" : "tv",
        params.id
      );

      this.setState({
        data,
        cast,
        keywords,
        genres,
        similar,
        recommendations,
        trailer,
        reviews,
      });
    }
  }

  getGenres = (data) => {
    let str = "";
    data.genres.map((g) => (str += g.name + ", "));
    str += data.release_date
      ? String(data.release_date).slice(0, 4)
      : String(data.first_air_date).slice(0, 4);
    return str;
  };

  handleClick = (props) => {
    props.history.push("/signin");
  };

  loadLink = (link) => {
    this.setState({ link });
    window.scroll(0, 0);
  };

  handleClose = () => {
    this.setState({ link: "" });
  };

  handleLoadLink = (trailer) => {
    if (trailer) {
      this.setState({ play: true });
      this.loadLink("https://www.youtube.com/watch?v=" + trailer);
    } else toast.info("No trailer Available");
  };

  handleWhitelist = (e, props, onWatchlist, type, id, login, added) => {
    if (login) {
      onWatchlist(type, parseInt(id));
      if (added === undefined) toast.success("Added successfully!");
      else toast.success("Removed successfully!");
    } else props.history.push("/signin");
  };

  displayPage = (params, login, props, watchlist, onWatchlist) => {
    const {
      data,
      cast,
      keywords,
      genres,
      similar,
      recommendations,
      link,
      trailer,
      reviews,
    } = this.state;
    let status = {};

    if (data.status === "Rumored")
      status = { icon: "fa fa-bomb ", class: " blue-color" };
    else if (data.status === "Planned")
      status = { icon: "fa fa-paperclip ", class: " yellow-color" };
    else if (data.status === "In Production")
      status = { icon: "fa fa-film ", class: " yellow-color" };
    else if (data.status === "Post Production")
      status = { icon: "fa fa-ticket ", class: " yellow-color" };
    else if (data.status === "Released")
      status = { icon: "fa fa-check ", class: " green-color" };
    else if (data.status === "Returning Series")
      status = { icon: "fa fa-refresh ", class: " green-color" };
    else if (data.status === "Pilot")
      status = { icon: "fa fa-plane ", class: " yellow-color" };
    else status = { icon: "fa fa-times ", class: " red-color" };

    const media = { recommendations, similar, genres };
    const added = watchlist[params.type].find((e) => e === parseInt(params.id));

    return (
      <React.Fragment>
        {link && (
          <React.Fragment>
            <StickyVideo
              className="mt-4"
              url={link}
              stickyConfig={{
                position: "bottom-right",
              }}
            />
            <div style={{ height: "1.64em" }}>
              <button
                className="btn btn-danger mt-2"
                style={{ float: "right" }}
                onClick={this.handleClose}
              >
                Close Player
              </button>
            </div>
            <br />
          </React.Fragment>
        )}
        <div className="splitscreen">
          <div className="left-content">
            <div
              className="card custom-card-1"
              style={{
                boxShadow:
                  params.type === "movie"
                    ? "0px 0px 10px 4px rgb(18, 38, 66)"
                    : "0px 0px 10px 4px rgb(0, 41, 23)",
              }}
            >
              <img
                className="img-responsive img-card"
                src={getPosterLink(data.poster_path)}
                alt="poster"
                style={{ borderRadius: "0.25rem" }}
              />
              <div
                className="add-to-watchlist"
                title="Play Trailer"
                style={{
                  backgroundColor:
                    params.type === "movie" ? "#1b3a64" : "#004235",
                  height: "1.7em",
                  paddingTop: "1px",
                  marginTop: "5px",
                }}
                onClick={() => this.handleLoadLink(trailer)}
              >
                <p className="watchlist btn">
                  <i
                    className={
                      this.state.play
                        ? "fa-repeat plus-icon"
                        : "fa-play plus-icon"
                    }
                    aria-hidden="true"
                    style={{ fontSize: "14.5px" }}
                  />
                  <span className="btn-txt" style={{ fontSize: "11px" }}>
                    {this.state.play ? "Play Again" : "Play Trailer"}
                  </span>
                </p>
              </div>
              <div
                className="add-to-watchlist"
                title="Add to Watchlist"
                onClick={(e) =>
                  this.handleWhitelist(
                    e,
                    props,
                    onWatchlist,
                    params.type,
                    params.id,
                    login,
                    added
                  )
                }
                style={{
                  backgroundColor:
                    added !== undefined
                      ? "rgba(245, 192, 31, 0.8)"
                      : params.type === "movie"
                      ? "#1b3a64"
                      : "#004235",
                  height: "1.7em",
                  paddingTop: "1px",
                  marginTop: "5px",
                }}
              >
                <p className="watchlist btn">
                  <i
                    className={
                      (added === undefined ? "fa-plus " : "fa-times ") +
                      "plus-icon " +
                      (added === undefined ? "" : "select-color")
                    }
                    aria-hidden="true"
                    style={{ fontSize: "14.5px" }}
                  />
                  <span
                    className={
                      "btn-txt " + (added === undefined ? "" : "select-color")
                    }
                    style={{ fontSize: "11px" }}
                  >
                    {added === undefined ? "Add to Watchlist" : "Remove"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="right-content">
            <div className={"custom-control media-status" + status.class}>
              <i
                className={
                  status.icon +
                  "custom-control-input media-status-icon" +
                  status.class
                }
                aria-hidden="true"
              />
              <p className="media-status-text">{data.status}</p>
            </div>
            <h3 className="h3" style={{ marginBottom: "0px" }}>
              {data.title ? data.title : data.name}
            </h3>
            <p className="sub-script op">{this.getGenres(data)}</p>
            <div className="laptop-overview">
              <div className="left-border">
                <h5 className="sub-heading">Overview</h5>
              </div>
              <DisplayOverview expanded={true} overview={data.overview} />
            </div>
            <div
              className={
                "custom-control-1 media-status-1 mobile-overview" + status.class
              }
            >
              <i
                className={
                  status.icon +
                  "custom-control-input media-status-icon" +
                  status.class
                }
                aria-hidden="true"
              />
              <p className="media-status-text">{data.status}</p>
            </div>
          </div>
        </div>
        <br />

        <div className="mobile-overview">
          <div className="left-border mobile-left">
            <h5 className="sub-heading">Overview</h5>
          </div>
          <DisplayOverview expanded={false} overview={data.overview} />
        </div>
        <div className="left-border" style={{ marginTop: "10px" }}>
          <h5 className="sub-heading">Cast</h5>
        </div>
        <div className="profile-custom-slider">
          {cast.length !== 0 ? (
            <ProfileCustomSlider cast={cast} />
          ) : (
            <Spinner />
          )}
        </div>
        <br />
        {!login && (
          <div
            className="left-border bottom-marg"
            style={{ marginTop: "25px" }}
          >
            <h5 className="sub-heading bottom-marg">
              {params.type === "movie"
                ? "Budget, Revenue & Keywords"
                : "Network, Status & Keywords"}
            </h5>
          </div>
        )}
        {login ? (
          <div className="row">
            <div className="col-md-4">
              <div
                className="left-border bottom-marg"
                style={{ marginTop: "25px" }}
              >
                <h5 className="sub-heading">
                  {params.type === "movie" ? "Budget" : "Network"}
                </h5>
              </div>
              {params.type === "movie" ? (
                <CountUp
                  prefix="$ "
                  separator=","
                  end={data.budget}
                  duration={1}
                  decimals={2}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="status" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              ) : (
                <img
                  className="networks"
                  src={
                    "http://image.tmdb.org/t/p/h30" + data.networks[0].logo_path
                  }
                  alt="networks"
                />
              )}
            </div>
            <div className="col-md-4">
              <div
                className="left-border bottom-marg"
                style={{ marginTop: "25px" }}
              >
                <h5 className="sub-heading bottom-marg">
                  {params.type === "movie" ? "Revenue" : "Status"}
                </h5>
              </div>
              {params.type === "movie" ? (
                <CountUp
                  prefix="$ "
                  separator=","
                  end={data.revenue}
                  duration={1}
                  decimals={2}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="status" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              ) : (
                <p className="status">{data.status}</p>
              )}
            </div>
            <div className="col-md-4">
              <div className="left-border" style={{ marginTop: "25px" }}>
                <h5 className="sub-heading">Keywords</h5>
              </div>
              <Keywords keywords={keywords} />
            </div>
          </div>
        ) : (
          ""
        )}
        {!login && (
          <div className="text-center sign-in-card">
            <p>Sign In To Access!</p>
            <input
              className="btn create-acc-btn back-button"
              defaultValue="Sign in to IMDb Design"
              onClick={() => this.handleClick(props)}
            />
          </div>
        )}
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="left-border" style={{ marginBottom: "20px" }}>
              <h5 className="sub-heading">Ratings</h5>
            </div>
            <ReactStoreIndicator
              value={data.vote_average}
              maxValue={10}
              lineGap={1}
              lineWidth={22}
              fadedOpacity={10}
            />
            <p className="styles_wrapper__3KXDn votes-count">
              Votes Count: <span>{data.vote_count}</span>
            </p>
          </div>
          <div className="col-md">
            <div className="left-border" style={{ marginBottom: "20px" }}>
              <h5 className="sub-heading">Reviews</h5>
            </div>
            <Reviews reviews={reviews} />
          </div>
        </div>
        <br />
        <div className="left-border">
          <h5 className="sub-heading">Recommendations</h5>
        </div>
        {!login ? (
          <div className="text-center sign-in-card">
            <p>Sign In To Access!</p>
            <input
              className="btn create-acc-btn back-button"
              defaultValue="Sign in to IMDb Design"
              onClick={() => this.handleClick(props)}
            />
          </div>
        ) : recommendations.length > 0 ? (
          <CustomSlider
            media={media}
            type={"recommendations"}
            props={props}
            loadLink={this.loadLink}
            single={params.type}
            watchlist={watchlist}
            onWatchlist={onWatchlist}
            login={login}
          />
        ) : (
          <div className="text-center not-available">
            <p>
              <img src={empty} alt="NA" />
              Not Available
            </p>
          </div>
        )}
        <div className="left-border">
          <h5 className="sub-heading">Similar Movies</h5>
        </div>
        {!login ? (
          <div className="text-center sign-in-card">
            <p>Sign In To Access!</p>
            <input
              className="btn create-acc-btn back-button"
              defaultValue="Sign in to IMDb Design"
              onClick={() => this.handleClick(props)}
            />
          </div>
        ) : similar.length > 0 ? (
          <CustomSlider
            media={media}
            type={"similar"}
            props={props}
            loadLink={this.loadLink}
            single={params.type}
            watchlist={watchlist}
            onWatchlist={onWatchlist}
            login={login}
          />
        ) : (
          <div className="text-center not-available">
            <p>
              <img src={empty} alt="NA" />
              Not Available
            </p>
          </div>
        )}
      </React.Fragment>
    );
  };

  render() {
    const {
      match: { params },
    } = this.props.props;
    const { data } = this.state;
    const { login, watchlist, onWatchlist } = this.props;

    return (
      <div className="container">
        {data.poster_path ? (
          this.displayPage(
            params,
            login,
            this.props.props,
            watchlist,
            onWatchlist
          )
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default CustomDetails;
