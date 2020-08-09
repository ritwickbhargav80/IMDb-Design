import React, { Component } from "react";

import "../../stylesheets/slide.css";

class Slide extends Component {
  state = { show: false, showBtn: false };

  setIsShown(value) {
    this.setState({ show: value });
  }

  setBtnIsShown(value) {
    this.setState({ showBtn: value });
  }

  render() {
    return (
      <div className="slide">
        <div className="child-element">
          <div
            className="card custom-card"
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
          >
            <img
              className="img-responsive img-card"
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v"
              alt="hi"
            />
            <div
              className="slide-text"
              style={{ opacity: this.state.show ? 1 : 0 }}
            >
              <span className="content-title"> Lootcase</span>
              <div className="content-info">
                <div className="duration">2 hr 11 min</div>{" "}
                <span className="genre">Comedy, Hindi, 2020</span>
              </div>
              <div className="content-desc">
                What will you do if you find a bag full of cash? Nandan Kumar
                faces a similar dilemma when a bag tri ...
              </div>
              <div className="add-to-watchlist" title="Add to Watchlist">
                <p
                  className="watchlist btn"
                  onMouseEnter={() => this.setBtnIsShown(true)}
                  onMouseLeave={() => this.setBtnIsShown(false)}
                  style={{ opacity: this.state.showBtn ? 1 : 0.8 }}
                >
                  <i className="fa-plus plus-icon" aria-hidden="true" />
                  <span className="btn-txt">Add to Watchlist</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
