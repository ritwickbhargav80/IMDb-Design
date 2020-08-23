import React from "react";

const Carousel = ({ movies }) => {
  function getPosterLink(poster_path) {
    return process.env.REACT_APP_API_LINK + poster_path;
  }

  return (
    <div style={{ backgroundColor: "#E0E0E0" }} id="venue">
      <div className="container">
        <div className="row bg-dark mt-4">
          <div className="p-4 col-md-4">
            <div
              className="carousel slide"
              data-ride="carousel"
              id="carousel1"
              data-interval="4000"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" key={movies[0].id}>
                  {" "}
                  <img
                    className="d-block img-fluid w-100"
                    src={getPosterLink(movies[0].poster_path)}
                    data-holder-rendered="true"
                    alt="slide"
                  />
                </div>
                {movies.slice(1).map((m) => (
                  <div className="carousel-item" key={m.id}>
                    {" "}
                    <img
                      className="d-block img-fluid w-100"
                      src={getPosterLink(m.poster_path)}
                      data-holder-rendered="true"
                      alt="slide"
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel1"
                role="button"
                data-slide="prev"
              >
                {" "}
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>{" "}
                <span className="sr-only">Previous</span>{" "}
              </a>{" "}
              <a
                className="carousel-control-next"
                href="#carousel1"
                role="button"
                data-slide="next"
              >
                {" "}
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>{" "}
                <span className="sr-only">Next</span>{" "}
              </a>
            </div>
          </div>
          <div className="pr-4 pl-0 col-md-8 align-self-center text-light">
            <h2 style={{ color: "#f5c01f" }}>Lorem ipsum dolor sit amet</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut
              voluptates sit voluptate ab rem non vel harum fuga, qui officia
              natus aliquam, cumque, adipisci ipsam explicabo sapiente in
              necessitatibus.
            </p>{" "}
            <a href="/" className="btn mb-3 p-2 create-acc-btn">
              View the gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
