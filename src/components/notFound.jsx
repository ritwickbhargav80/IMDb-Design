import React, { Component } from "react";
import image from "../assets/404.png";
let array = require("../utils/quotes.json");

class NotFound extends Component {
  state = {
    randomQuote: {
      quote: "",
      movie: "",
      year: 0,
    },
  };

  handleClick = (props) => {
    props.history.replace("/");
  };

  componentDidMount() {
    let randNum = Math.floor(Math.random() * array.length);
    const { quote, movie, year } = array[randNum];
    this.setState({ randomQuote: { quote, movie, year } });
  }

  render() {
    let { quote, movie, year } = this.state.randomQuote;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md text-center">
            <p className="content-404">
              4
              <span role="img" aria-label="0">
                &#128549;
              </span>
              4 - Page Not Found
            </p>
            <p className="desc-404">
              The page you are looking for could not be found! Perhaps the page
              moved, the URL is incorrect or maybe, just maybe, you tried to
              travel to forbidden lands.
            </p>
            <div className="box sb4 row">
              <span className="curly-quotes col-sm-1">&#8220; </span>
              <span className="quotes col-sm-10">{quote}</span>
              <span className="curly-quotes col-sm-1"> &#8221;</span>
            </div>
            <div className="quote-footer">
              <p className="movie">{movie}</p>
              <p className="year">{year}</p>
            </div>
            <input
              className="btn create-acc-btn back-button"
              type="submit"
              value="Back to Homepage"
              onClick={() => this.handleClick(this.props)}
            />
          </div>
          <img
            className="col-md img-container image-404"
            src={image}
            alt="404 - Page Not Found"
          />
        </div>
      </div>
    );
  }
}

export default NotFound;
