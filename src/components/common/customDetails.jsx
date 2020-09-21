import React, { Component } from "react";
import { getDetails, getPosterLink } from "../../utils/apiCalls";
import Spinner from "./spinner";

class CustomDetails extends Component {
  state = { data: {} };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const data = await getDetails(params.type, params.id);
    console.log(data);
    this.setState({ data });
  }

  displayPage = (params, data) => {
    return (
      <React.Fragment>
        <div class="splitscreen">
          <div class="left-content">
            <div
              className="card custom-card-1"
              style={{
                boxShadow:
                  params.type === "movie"
                    ? "4.5px 3.5px rgb(18, 38, 66)"
                    : "4.5px 3.5px rgb(0, 41, 23)",
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

          <div class="right-content">
            <h3 className="h3">{data.title}</h3>
          </div>
        </div>
        <div className="custom-control media-status">
          <i
            className="fa fa-check custom-control-input media-status-icon"
            aria-hidden="true"
          />
          <p className="media-status-text">Released</p>
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
        {data.title ? this.displayPage(params, data) : <Spinner />}
      </div>
    );
  }
}

export default CustomDetails;
