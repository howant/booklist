import React, { Component } from "react";
import PropTypes from "prop-types";

class Booklist extends Component {
  componentDidMount() {
    this.props.requestBooks();
  }

  render() {
    return (
      <div className="App-booklist">
        <h2>To read</h2>
        <ul className="Books-to-read">
          {this.props.lists["To-read"].map(book => (
            <Book key={book.Title} Title={book.Title} Author={book.Author} />
          ))}
        </ul>
        <h2>Currently reading</h2>
        <ul className="Books-reading">
          <Book
            Title={this.props.lists["Reading"].Title}
            Author={this.props.lists["Reading"].Author}
          />
        </ul>
        <h2>Finished reading</h2>
        <ul className="Books-finished">
          {this.props.lists["Finished-reading"].map(book => (
            <Book key={book.Title} Title={book.Title} Author={book.Author} />
          ))}
        </ul>
      </div>
    );
  }
}

const Book = props => {
  return (
    <li>
      {props.Title}
      <ul>
        <li>{props.Author}</li>
      </ul>
    </li>
  );
};

Booklist.propTypes = {
  book: PropTypes.array
};

Book.propTypes = {
  Title: PropTypes.string,
  Author: PropTypes.string
};

export default Booklist;
