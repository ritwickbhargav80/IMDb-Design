import React, { Component } from "react";

import CustomSlider from "./common/customSlider";

import "../stylesheets/homepage.css";

import { getDateFunction } from "./../utils/common";

class HomePage extends Component {
  state = {
    stream: {
      prime: true,
      netflix: false,
      hotstar: false,
      sonyliv: false,
      tvfplay: false,
    },
    data: {
      popular: [
        {
          id: 1,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 2,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 3,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 4,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 5,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 6,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 7,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 8,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 9,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
        {
          id: 10,
          banner:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
          title: "Lootcase",
          trailer: "",
          duration: "2 hr 11 min",
          genre: "Comedy, Hindi, 2020",
          content:
            "What will you do if you find a bag full of cash? Nandan Kumar faces a similar dilemma when a bag tri ...",
        },
      ],
    },
  };

  toggleActive = (medium) => {
    let stream = {
      prime: false,
      netflix: false,
      hotstar: false,
      sonyliv: false,
      tvfplay: false,
    };
    stream[medium] = true;
    this.setState({ stream });
  };

  render() {
    const { date, month } = getDateFunction();
    let { prime, netflix, hotstar, sonyliv, tvfplay } = this.state.stream;
    let { popular } = this.state.data;

    return (
      <div className="container">
        <h3 className="h3">What to Watch</h3>
        <div className="left-border">
          <h5 className="sub-heading">Fan Favorites</h5>
        </div>
        <p className="sub-script">This week's top TV and movies</p>
        <CustomSlider movies={popular} />
        <h3 className="h3 margin-bottom-10">Explore what's streaming</h3>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <span
              className={"nav-link navs" + (prime ? " navs-active" : "")}
              onClick={() => this.toggleActive("prime")}
            >
              Prime Video
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (netflix ? " navs-active" : "")}
              onClick={() => this.toggleActive("netflix")}
            >
              Netflix
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (hotstar ? " navs-active" : "")}
              onClick={() => this.toggleActive("hotstar")}
            >
              Hotstar
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (sonyliv ? " navs-active" : "")}
              onClick={() => this.toggleActive("sonyliv")}
            >
              Sonyliv
            </span>
          </li>
          <li className="nav-item">
            <span
              className={"nav-link navs" + (tvfplay ? " navs-active" : "")}
              onClick={() => this.toggleActive("tvfplay")}
            >
              Tvfplay
            </span>
          </li>
        </ul>
        <CustomSlider movies={popular} />
        <h3 className="h3">Today's Exclusive</h3>
        <div className="left-border">
          <h5 className="sub-heading">Top Coverage &gt;</h5>
        </div>
        <p className="sub-script">
          People born on {month} {date}
        </p>
      </div>
    );
  }
}

export default HomePage;
