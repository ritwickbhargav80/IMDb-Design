import React, { Component } from "react";

class Pagination extends Component {
  state = {
    pageNo: 1,
  };

  getArray = (pageNo) => {
    if (pageNo <= 4) return [1, 2, 3, 4, 5];
    else if (pageNo >= 497) return [496, 497, 498, 499, 500];
    else return [pageNo - 2, pageNo - 1, pageNo, pageNo + 1, pageNo + 2];
  };

  arrowStyle = (pageNo, no) => {
    return {
      opacity: pageNo === no ? 0.5 : 1,
      cursor: pageNo === no ? "" : "pointer",
    };
  };

  styles = (pageNo, a) => {
    return pageNo === a ? { scale: "1.4", color: "#f5c01f" } : {};
  };

  render() {
    const { page, updatePage } = this.props;
    const arr = this.getArray(page);

    return (
      <div className="row" style={{ color: "white" }}>
        <div className="col-sm text-center">
          <div className="row" style={{ display: "inline-flex" }}>
            <i
              className="fa fa-chevron-left pagination-arrow"
              style={this.arrowStyle(page, 1)}
              onClick={() => updatePage("left")}
            />
            {page <= 4 ? (
              <React.Fragment>
                {arr.map((a) => (
                  <p
                    className="paginate"
                    key={a}
                    style={this.styles(page, a)}
                    onClick={() => updatePage(a)}
                  >
                    {a}
                  </p>
                ))}
              </React.Fragment>
            ) : (
              <p className="paginate" onClick={() => updatePage(1)}>
                1
              </p>
            )}
            {page > 4 && page < 497 ? (
              <React.Fragment>
                <p className="paginate-dot">...</p>
                {arr.map((a) => (
                  <p
                    className="paginate"
                    key={a}
                    style={this.styles(page, a)}
                    onClick={() => updatePage(a)}
                  >
                    {a}
                  </p>
                ))}
                <p className="paginate-dot">...</p>
              </React.Fragment>
            ) : (
              <p className="paginate-dot">...</p>
            )}
            {page >= 497 ? (
              <React.Fragment>
                {arr.map((a) => (
                  <p
                    className="paginate"
                    key={a}
                    style={this.styles(page, a)}
                    onClick={() => updatePage(a)}
                  >
                    {a}
                  </p>
                ))}
              </React.Fragment>
            ) : (
              <p className="paginate" onClick={() => updatePage(500)}>
                500
              </p>
            )}
            <i
              className="fa fa-chevron-right pagination-arrow"
              style={this.arrowStyle(page, 500)}
              onClick={() => updatePage("right")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
