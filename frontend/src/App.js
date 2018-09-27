import React, { Component } from "react";
import Booklist from "./containers/Booklist";
import Description from "./components/Description";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">My Book List</h1>
          </header>
          <Route exact path="/" component={Booklist} />
          <Route path="/description" component={Description} />
          <Route path="/" component={Booklist} />
        </div>
      </Router>
    );
  }
}

export default App;
