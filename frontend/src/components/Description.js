import React, { Component } from "react";
import PropTypes from "prop-types";

class Description extends Component {
  render() {
    return (
      <div className="App-description">
        <h2>Title: {this.props.selectedBook.title}</h2>
        <h2>Synopsis: {this.props.selectedBook.synopsis}</h2>
      </div>
    );
  }
}

Description.propTypes = {
  selectedBook: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
  }).isRequired
};

export default Description;
