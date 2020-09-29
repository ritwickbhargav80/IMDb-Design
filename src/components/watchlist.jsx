import React from "react";

const Watchlist = ({ props, watchlist }) => {
  function handleClick(props) {
    props.history.push("/");
  }

  return (
    <div className="container">
      <h3 className="h3">Your Watchlist</h3>
      {watchlist.movie.length === 0 && watchlist.movie.length === 0 ? (
        <div className="text-center sign-in-card-1">
          <p className="title">No releases added in Watchlist!</p>
          <p className="desc">
            Add movies and shows to keep track of what you want to watch
          </p>
          <input
            className="btn create-acc-btn back-button"
            defaultValue="Browse our Homepage"
            onClick={() => handleClick(props)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Watchlist;
