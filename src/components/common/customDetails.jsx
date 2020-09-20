import React, { Component } from "react";
import { getDetails } from "../../utils/apiCalls";
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

  displayPage = (data) => {
    return (
      <React.Fragment>
        <h3 className="h3" style={{ display: "inline-block" }}>
          {data.title}
        </h3>
        <i
          className="fa fa-check"
          aria-hidden="true"
          style={{ float: "right", marginTop: "1.6%" }}
        />
        {data.tagline ? <p className="sub-script">{data.tagline}</p> : ""}
      </React.Fragment>
    );
  };

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        {data.title ? this.displayPage(data) : <Spinner />}
      </div>
    );
  }
}

export default CustomDetails;
