import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./scss/App.scss";
import Posts from "./js/Posts";
import PostDetail from "./js/PostDetail";
import Nav from "./js/Nav";
import HomePage from "./js/HomePage";

function App() {
  return (
    <div className="wrapper">
      <div className="animationOverlay" />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posts/" exact component={Posts} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
