import { Button } from "antd";
import "./styles.css";
import "antd/dist/antd.css";

import Embed from "./components/embed";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/embed">
          <Embed />
        </Route>
        <Route path="/">
          <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>

            <Button type="primary">Hey There</Button>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
