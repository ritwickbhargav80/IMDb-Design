import React from "react";

const Pagination = ({ page, type, updatePage, pages }) => {
  function getArray(pageNo, pages) {
    if (pages <= 6) {
      let arr = [];
      for (let i = 1; i <= pages; i++) arr.push(i);
      return arr;
    }
    if (pageNo <= 4) return [1, 2, 3, 4, 5];
    else if (pageNo >= pages - 3)
      return [pages - 4, pages - 3, pages - 2, pages - 1, pages];
    else return [pageNo - 2, pageNo - 1, pageNo, pageNo + 1, pageNo + 2];
  }

  function arrowStyle(pageNo, no) {
    return {
      opacity: pageNo === no ? 0.5 : 1,
      cursor: pageNo === no ? "" : "pointer",
    };
  }

  function styles(pageNo, a) {
    return pageNo === a ? { transform: "scale(1.4)", color: "#f5c01f" } : {};
  }
  const arr = getArray(page, pages);

  return (
    <div className="row" style={{ color: "white" }}>
      <div className="col-sm text-center">
        <div className="row" style={{ display: "inline-flex" }}>
          {pages > 6 && (
            <i
              className="fa fa-chevron-left pagination-arrow"
              style={arrowStyle(page, 1)}
              onClick={() => updatePage(type, "left")}
            />
          )}
          {page <= 4 ? (
            <React.Fragment>
              {arr.map((a) => (
                <p
                  className="paginate"
                  key={a}
                  style={styles(page, a)}
                  onClick={() => updatePage(type, a)}
                >
                  {a}
                </p>
              ))}
            </React.Fragment>
          ) : (
            <p className="paginate" onClick={() => updatePage(type, 1)}>
              1
            </p>
          )}
          {pages > 6 ? (
            page > 4 && page < pages - 3 ? (
              <React.Fragment>
                <p className="paginate-dot">...</p>
                {arr.map((a) => (
                  <p
                    className="paginate"
                    key={a}
                    style={styles(page, a)}
                    onClick={() => updatePage(type, a)}
                  >
                    {a}
                  </p>
                ))}
                <p className="paginate-dot">...</p>
              </React.Fragment>
            ) : (
              <p className="paginate-dot">...</p>
            )
          ) : (
            ""
          )}
          {pages > 6 ? (
            page > pages - 3 ? (
              <React.Fragment>
                {arr.map((a) => (
                  <p
                    className="paginate"
                    key={a}
                    style={styles(page, a)}
                    onClick={() => updatePage(type, a)}
                  >
                    {a}
                  </p>
                ))}
              </React.Fragment>
            ) : (
              <p className="paginate" onClick={() => updatePage(type, pages)}>
                {pages}
              </p>
            )
          ) : (
            ""
          )}
          {pages > 6 && (
            <i
              className="fa fa-chevron-right pagination-arrow"
              style={arrowStyle(page, pages)}
              onClick={() => updatePage(type, "right")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
