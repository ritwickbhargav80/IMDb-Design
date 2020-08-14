import React from "react";

import image from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <p className="content-404">
            4
            <span role="img" aria-label="0">
              &#128549;
            </span>
            4 - Page Not Found
          </p>
          <div className="box sb4">
            <span className="curly-quotes">&#8220; </span>
            <span className="quotes">I'm speech bubble</span>
            <span className="curly-quotes"> &#8221;</span>
          </div>
        </div>
        <img className="col-md" src={image} alt="404 - Page Not Found" />
      </div>
    </div>
  );
};

export default NotFound;
