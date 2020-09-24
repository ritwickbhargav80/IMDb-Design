import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { getCast, getDetails, getPosterLink } from "../../utils/apiCalls";
import Spinner from "./spinner";
import DisplayOverview from "./displayOverview";
import ProfileCustomSlider from "./profileCustomSlider";

class CustomDetails extends Component {
  state = { data: {}, cast: [] };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const data = await getDetails(
      params.type === "show" ? "tv" : "movie",
      params.id
    );

    const cast = await getCast(
      params.type === "movie" ? "movie" : "tv",
      params.id
    );
    // console.log(data);
    this.setState({ data, cast });
  }

  getGenres = (data) => {
    let str = "";
    data.genres.map((g) => (str += g.name + ", "));
    str += data.release_date
      ? data.release_date.slice(0, 4)
      : data.first_air_date.slice(0, 4);
    return str;
  };

  displayPage = (params, data, cast) => {
    return (
      <React.Fragment>
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
                title="Add to Watchlist"
                style={{
                  backgroundColor:
                    params.type === "movie" ? "#1b3a64" : "#004235",
                  height: "1.7em",
                  paddingTop: "1px",
                  marginTop: "5px",
                }}
              >
                <p className="watchlist btn">
                  <i
                    className="fa-plus plus-icon"
                    aria-hidden="true"
                    style={{ fontSize: "14.5px" }}
                  />
                  <span className="btn-txt" style={{ fontSize: "11px" }}>
                    Add to Watchlist
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="right-content">
            <div className="custom-control media-status">
              <i
                className="fa fa-check custom-control-input media-status-icon"
                aria-hidden="true"
              />
              <p className="media-status-text">Released</p>
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
            <div className="custom-control-1 media-status-1 mobile-overview">
              <i
                className="fa fa-check custom-control-input media-status-icon"
                aria-hidden="true"
              />
              <p className="media-status-text">Released</p>
            </div>
          </div>
        </div>

        <div className="mobile-overview">
          <div className="left-border mobile-left">
            <h5 className="sub-heading">Overview</h5>
          </div>
          <DisplayOverview expanded={false} overview={data.overview} />
        </div>
        <div className="left-border" style={{ marginTop: "10px" }}>
          <h5 className="sub-heading">Cast</h5>
        </div>
        {cast.length !== 0 ? <ProfileCustomSlider cast={cast} /> : <Spinner />}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CountUp
          prefix="$ "
          separator=","
          end={200000000}
          duration={1}
          decimals={2}
          redraw={true}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </React.Fragment>
    );
  };

  render() {
    const {
      match: { params },
    } = this.props;
    const { data, cast } = this.state;

    return (
      <div className="container">
        {data.poster_path ? this.displayPage(params, data, cast) : <Spinner />}
      </div>
    );
  }
}

export default CustomDetails;
