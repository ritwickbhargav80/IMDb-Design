import React, { Component } from "react";
import empty from "../../assets/empty.png";

class Reviews extends Component {
  state = { expanded: false };

  getContent = (review) => {
    let arr = review.split(" ");
    review = arr.slice(0, 62).join(" ");
    if (arr.length > 62) review += " ...";
    return review;
  };

  handleClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { expanded } = this.state;
    const { reviews } = this.props;
    let arr = [];
    if (reviews.length !== 0) arr = reviews[0].content.split(" ");

    return reviews.length !== 0 ? (
      <div>
        <span className="review-message">
          {expanded ? reviews[0].content : this.getContent(reviews[0].content)}{" "}
          {arr.length > 62 && (
            <span className="help" onClick={this.handleClick}>
              {expanded ? "See Less" : "See More"}
            </span>
          )}
        </span>
        <div>
          {reviews.length > 1 ? (
            <p className="more-reviews-count">
              <i
                className="fa-plus plus-icon"
                aria-hidden="true"
                style={{
                  color: "#f5c01f",
                  fontSize: "14.5px",
                  marginTop: "5px",
                }}
              />
              {reviews.length - 1} more reviews
            </p>
          ) : (
            ""
          )}
          <p className="review-author"> - {reviews[0].author}</p>
        </div>
      </div>
    ) : (
      <div className="text-center not-available">
        <p>
          <img src={empty} alt="NA" />
          Not Available
        </p>
      </div>
    );
  }
}

export default Reviews;
