import React from "react";
import CustomPage from "./common/customPage";

const Search = ({ search, history }) => {
  return (
    <React.Fragment>
      <h3 className="container h3">Search Results</h3>
      <CustomPage type={"movie"} history={history} search={search} />
      <br />
      <br />
      <CustomPage type={"tv"} history={history} search={search} />
    </React.Fragment>
  );
};

export default Search;
