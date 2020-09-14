import React, { Component } from "react";

class Pagination extends Component {
  state = {
    pageNo: 1,
  };

  getArray = () => {
    let { pageNo } = this.state;

    if (pageNo <= 4) return [1, 2, 3, 4, 5];
    else if (pageNo >= 497) return [496, 497, 498, 499, 500];
    else return [pageNo - 2, pageNo - 1, pageNo, pageNo + 1, pageNo + 2];
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
    const arr = this.getArray();

    return (
      <div className="row" style={{ color: "white" }}>
        <i
          className="col-sm-1 fa fa-chevron-left"
          style={this.arrowStyle(1)}
          onClick={() => this.updatePage("left")}
        />
        <div className="col-sm text-center">
          <div className="row" style={{ display: "inline-flex" }}>
            {pageNo <= 4 ? (
              <React.Fragment>
                {arr.map((a) => (
                  <p className="paginate" key={a}>
                    {a}
                  </p>
                ))}
              </React.Fragment>
            ) : (
              <p className="paginate">1</p>
            )}
            {pageNo > 4 && pageNo < 497 ? (
              <React.Fragment>
                <p className="paginate-dot">...</p>
                {arr.map((a) => (
                  <p className="paginate" key={a}>
                    {a}
                  </p>
                ))}
                <p className="paginate-dot">...</p>
              </React.Fragment>
            ) : (
              <p className="paginate-dot">...</p>
            )}
            {pageNo >= 497 ? (
              <React.Fragment>
                {arr.map((a) => (
                  <p className="paginate" key={a}>
                    {a}
                  </p>
                ))}
              </React.Fragment>
            ) : (
              <p className="paginate">500</p>
            )}
          </div>
        </div>
        <i
          className="col-sm-1 fa fa-chevron-right"
          style={this.arrowStyle(500)}
          onClick={() => this.updatePage("right")}
        />
      </div>
    );
  }
}

export default Pagination;
