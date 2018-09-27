import React, { Component } from "react";
import Booklist from "./containers/Booklist";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Book List</h1>
        </header>
        <Booklist/>
      </div>
    );
  }
}

export default App;
