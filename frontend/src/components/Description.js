import React, { Component } from "react";

class Description extends Component {

  render() {
    return (
      <div>
        <h2>Selected Book: {this.props.lists["Selected-book"]}</h2>
      </div>
    );
  }
}

export default Description;
