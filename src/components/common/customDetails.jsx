import React, { Component } from "react";
import { getDetails, getPosterLink } from "../../utils/apiCalls";
import Spinner from "./spinner";
import DisplayOverview from "./displayOverview";

class CustomDetails extends Component {
  state = { data: {} };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const data = await getDetails(
      params.type === "show" ? "tv" : "movie",
      params.id
    );
    // console.log(data);
    this.setState({ data });
  }

  getGenres = (data) => {
    let str = "";
    data.genres.map((g) => (str += g.name + ", "));
    str += data.release_date
      ? data.release_date.slice(0, 4)
      : data.first_air_date.slice(0, 4);
    return str;
  };

  displayPage = (params, data) => {
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
      </React.Fragment>
    );
  };

  render() {
    const {
      match: { params },
    } = this.props;
    const { data } = this.state;

    return (
      <div className="container">
        {data.poster_path ? this.displayPage(params, data) : <Spinner />}
      </div>
    );
  }
}

export default CustomDetails;
