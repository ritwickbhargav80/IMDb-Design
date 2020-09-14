import React from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

// padding-top: 100px;
// padding-bottom: 165px;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading container">
        <PacmanLoader
          css={override}
          size={35}
          color={"#f5c01f"}
          margin={5}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;
