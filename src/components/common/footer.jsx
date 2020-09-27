import React from "react";
import { Link } from "react-router-dom";

import { getDateFunction } from "./../../utils/common";

import an_amazon_company from "../../assets/an_amazon_company.png";
import "../../stylesheets/footer.css";

const Footer = () => {
  const { year } = getDateFunction();

  return (
    <footer className="footer bg-dark">
      <div className="footer-container">
        <div className="container">
          <a href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Ffacebook.com%2Fimdb&page-action=fol_fb&ref=ft_fol_fb">
            <i
              className="fa fa-facebook-square linked-icons"
              aria-hidden="true"
            />
          </a>
          <a href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Finstagram.com%2Fimdb&page-action=fol_inst&ref=ft_fol_inst">
            <i className="fa fa-instagram linked-icons" aria-hidden="true" />
          </a>
          <a href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Ftwitch.tv%2FIMDb&page-action=fol_twch&ref=ft_fol_twch">
            <i className="fa fa-twitch linked-icons" aria-hidden="true" />
          </a>
          <a href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Ftwitter.com%2Fimdb&page-action=fol_tw&ref=ft_fol_tw">
            <i className="fa fa-twitter linked-icons" aria-hidden="true" />
          </a>
          <a href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Fyoutube.com%2Fimdb%2F&page-action=fol_yt&ref=ft_fol_yt">
            <i className="fa fa-youtube-play linked-icons" aria-hidden="true" />
          </a>
        </div>
        <div className="container">
          <div className="row footer-row mar-top">
            <div className="ml-auto mr-auto res-row">
              <a
                className="col-sm-1 footer-link"
                href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Ftqp-4.tlnk.io%2Fserve%3Faction%3Dclick%26campaign_id_android%3D427112%26campaign_id_ios%3D427111%26destination_id_android%3D464200%26destination_id_ios%3D464199%26my_campaign%3Dmdot%2520sitewide%2520footer%2520%26my_site%3Dm.imdb.com%26publisher_id%3D350552%26site_id_android%3D133429%26site_id_ios%3D133428&page-action=ft-gettheapp&ref=ft_apps"
              >
                Get the IMDb App
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://help.imdb.com/imdb?ref_=ft_hlp"
              >
                Help
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ?ref_=ft_si#so"
              >
                Site Index
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://pro.imdb.com/?ref_=ft_pro&rf=cons_tf_pro"
              >
                IMDb Pro
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://www.boxofficemojo.com"
              >
                Box Office Mojo
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://developer.imdb.com/?ref=ft_ds"
              >
                IMDb Developer
              </a>
            </div>
          </div>
          <div className="footer-row">
            <div className="ml-auto mr-auto res-row">
              <a
                className="col-sm-1 footer-link"
                href="https://www.imdb.com/pressroom/?ref_=ft_pr"
              >
                Press Room
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://advertising.amazon.com/products/display-ads"
              >
                Advertising
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb"
              >
                Jobs
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://www.imdb.com/conditions?ref_=ft_cou"
              >
                Conditions of Use
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://www.imdb.com/privacy?ref_=ft_pvc"
              >
                Privacy Policy
              </a>
              <a
                className="col-sm-1 footer-link"
                href="https://www.imdb.com/whitelist-offsite?url=https%3A%2F%2Fwww.amazon.com%2Fb%2F%3F%26node%3D5160028011%26ref_%3Dft_iba&page-action=ft-iba&ref=ft_iba"
              >
                Interest-Based Ads
              </a>
            </div>
          </div>
          <img
            width="200px"
            height="32px"
            src={an_amazon_company}
            alt="IMDb, An Amazon Company"
          />
          <div className="footer-copyright text-center">
            <span className="copyright">© 1990-{year} by</span>
            <Link className="footer-link " to="/">
              IMDb.com, Inc.
            </Link>
          </div>

          <div className="footer-copyright text-center">
            <span className="copyright">Designed by:</span>
            <a
              className="footer-link"
              href="https://www.behance.net/gallery/94485805/IMDb-Website-Design"
            >
              Aakash Goel
            </a>{" "}
            &#128150; <span className="copyright">Developed by:</span>
            <a
              className="footer-link"
              href="https://github.com/ritwickbhargav80"
            >
              Ritwick Bhargav
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
