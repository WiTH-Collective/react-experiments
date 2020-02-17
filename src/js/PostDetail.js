import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostDetail extends Component {
  state = {
    // posts: []
    post: { body: "", title: "" }
  };

  componentDidMount() {
    console.log(this.props.match.params.id);

    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(post => this.setState({ post }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        <article>{this.state.post.body}</article>
        <p>
          <Link to="/">Back to all articles</Link>
        </p>
      </div>
    );
  }
}

export default PostDetail;
