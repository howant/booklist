import React, { Component } from "react";
import Booklist from "./containers/Booklist";
import Description from "./containers/Description";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";

const PREFIX_PATH='/booklist';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">My Book List</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Booklist} />
            <Route path={`${PREFIX_PATH}/description`} component={Description} />
            <Route path="/" component={Booklist} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
