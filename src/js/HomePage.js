import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import SecretSuppers from "./SecretSuppers";
import MeetTheChefs from "./MeetTheChefs";

class HomePage extends Component {
  state = {
    posts: []
  };

  render() {
    return (
      <div className="page-wrapper home-page">
        <Hero />
        <SecretSuppers />
        <MeetTheChefs />

        <Helmet>
          <title>{"Red Rock Deli®"}</title>
          <meta name="description" content={"Red Rock Deli® - Feed Your Curiosity™"} />
          <meta name="keywords" content={"Red, Rock, Deli, Chips, Nuts, Feed your curiosity, curious chips and nuts"} />
        </Helmet>
      </div>
    );
  }
}

export default HomePage;
