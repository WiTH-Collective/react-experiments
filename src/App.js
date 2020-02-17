import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./js/Posts";
import PostDetail from "./js/PostDetail";

function App() {
  return (
    // <div className="App">
    //   <Posts />
    // </div>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
