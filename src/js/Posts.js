import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => posts.slice(0, 10))
      .then(posts => this.setState({ posts }));
  }

  render() {
    const posts = this.state.posts.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${JSON.stringify(post.id)}`} id={post.id}>
          {post.title}
        </Link>
      </li>
    ));
    return (
      <div>
        <h2>All Posts</h2>
        <ul>{posts}</ul>
      </div>
    );
  }
}

export default Posts;
