import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Lupe from "../img/lupe.jpg";

class PostDetail extends Component {
  state = {
    // posts: []
    post: { body: "", title: "" }
  };

  componentDidMount() {
    console.log(this.props.match.params.id);

    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(post => {
        console.log(post);
        this.setState({ post });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.post.title}</h1>
        <article>{this.state.post.body}</article>
        <img src={Lupe} alt="A very cute doggo" />
        <p>
          <Link to="/">Back to all articles</Link>
        </p>
        <Helmet>
          <title>{this.state.post.title}</title>
          <meta name="description" content={this.state.post.body.slice(0, 100) + "..."} />
          <meta name="keywords" content={"React Helmet Test, " + this.state.post.title.split(" ")} />
        </Helmet>
      </div>
    );
  }
}

export default PostDetail;
