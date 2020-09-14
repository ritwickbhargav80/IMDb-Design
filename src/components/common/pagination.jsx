import React, { Component } from "react";

class Pagination extends Component {
  state = {
    pageNo: 1,
  };

  arrowStyle = (no) => {
    let { pageNo } = this.state;

    return {
      opacity: pageNo === no ? 0.5 : 1,
      cursor: pageNo === no ? "" : "pointer",
    };
  };

  updatePage = (value) => {
    let { pageNo } = this.state;
    if (value === "left" && pageNo !== 1) pageNo -= 1;
    else if (value === "right" && pageNo !== 500) pageNo += 1;
    else if (pageNo !== 1 && pageNo !== 500) pageNo = value;
    this.setState({ pageNo });
  };

  render() {
    let { pageNo } = this.state;

    return (
      <div className="row" style={{ color: "white" }}>
        <i
          className="col-sm-1 fa fa-chevron-left"
          style={() => this.arrowStyle(1)}
          onClick={() => this.updatePage("left")}
        />
        <p className="col-sm text-center" style={{ marginTop: "1rem" }}>
          1
        </p>
        <i
          className="col-sm-1 fa fa-chevron-right"
          style={{
            opacity: pageNo === 500 ? 0.5 : 1,
            cursor: pageNo === 500 ? "" : "pointer",
          }}
          onClick={() => this.updatePage("right")}
        />
      </div>
    );
  }
}

export default Pagination;
