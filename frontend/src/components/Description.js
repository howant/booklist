import React, { Component } from "react";
import PropTypes from "prop-types";

class Description extends Component {
  render() {
    return (
      <div className="App-description">
        <h2>Title: {this.props.selectedBook.Title}</h2>
        <h2>Synopsis: {this.props.selectedBook.Synopsis}</h2>
      </div>
    );
  }
}

Description.propTypes = {
  selectedBook: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Synopsis: PropTypes.string.isRequired
  }).isRequired
};

export default Description;
