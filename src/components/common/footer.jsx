import React from "react";

import "../../stylesheets/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-container">
        <div className="container">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-twitch" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div className="container">
          <div className="row footer-row mar-top">
            <div className="ml-auto mr-auto res-row">
              <a className="col-sm-1 footer-link" href="/">
                Get the IMDb App
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Help
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Site Index
              </a>
              <a className="col-sm-1 footer-link" href="/">
                IMDb Pro
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Box Office Mojo
              </a>
              <a className="col-sm-1 footer-link" href="/">
                IMDb Developer
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Press Room
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Advertising
              </a>
            </div>
          </div>
          <div className="footer-row">
            <div className="ml-auto mr-auto res-row">
              <a className="col-sm-1 footer-link" href="/">
                Jobs
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Conditions of Use
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Privacy Policy
              </a>
              <a className="col-sm-1 footer-link" href="/">
                Interest-Based Ads
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
