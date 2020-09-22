import React, { Component } from "react";

class DisplayOverview extends Component {
  state = { expanded: false };

  componentDidMount() {
    const { expanded } = this.props;
    this.setState({ expanded });
  }

  getContent = (overview) => {
    let arr = overview.split(" ");
    overview = arr.slice(0, 32).join(" ");
    if (arr.length > 21) overview += " ...";
    return overview;
  };

  handleClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { overview } = this.props;
    const { expanded } = this.state;

    return (
      <p className="sub-script op">
        {expanded ? overview : this.getContent(overview)}{" "}
        <span className="help" onClick={this.handleClick}>
          {expanded ? "See Less" : "See More"}
        </span>
      </p>
    );
  }
}

export default DisplayOverview;
