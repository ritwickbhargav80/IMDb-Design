import React, { Component } from "react";

import "../../stylesheets/slide.css";

class Slide extends Component {
  state = { show: false };

  setIsShown(value) {
    this.setState({ show: value });
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
              <span class="content-title"> Lootcase</span>
            </div>
            <div class="content-info">
              <div class="duration">2 hr 11 min</div>,{" "}
              <span class="genre">Comedy, Hindi, 2020</span>
            </div>
            <div class="content-desc">
              What will you do if you find a bag full of cash? Nandan Kumar
              faces a similar dilemma when a bag tri ...
            </div>
            <div class="trailer-action">
              <div class="trailer-icon"></div>
              <div class="trailer">Watch trailer</div>
            </div>
            <div class="watchlist-action">
              <div class="add-to-watchlist" title="Add to Watchlist">
                <div class="watchlist-wrapper">
                  <div class="watchlist-icon"></div>
                  <p class="watchlist">Add to Watchlist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
