import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Hero from "./Hero";

class HomePage extends Component {
  state = {
    posts: []
  };

  render() {
    return (
      <div className="page-wrapper home-page">
        <Hero />

        <Helmet>
          <title>{"All Posts Go Here"}</title>
          <meta name="description" content={"A list of posts"} />
          <meta name="keywords" content={"React Helmet Test, Lists, Things, Cats"} />
        </Helmet>
      </div>
    );
  }
}

export default HomePage;
