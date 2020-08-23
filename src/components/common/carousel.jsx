import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide sticky-video--player--3QVPP"
      data-ride="carousel"
    >
      <div className="carousel-inner sticky-video--player--3QVPP">
        <div className="carousel-item sticky-video--player--3QVPP active">
          <img
            src="https://images.unsplash.com/photo-1576080971617-5b789d9bcee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            className="d-block w-100 sticky-video--player--3QVPP"
            alt="..."
          />
        </div>
        <div className="carousel-item sticky-video--player--3QVPP">
          <img
            src="https://images.unsplash.com/photo-1595444562925-47ea2daab8bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            className="d-block w-100 sticky-video--player--3QVPP"
            alt="..."
          />
        </div>
        <div className="carousel-item sticky-video--player--3QVPP">
          <img
            src="https://images.unsplash.com/photo-1593668618937-0e02547327ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            className="d-block w-100 sticky-video--player--3QVPP"
            alt="..."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
