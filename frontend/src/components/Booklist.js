import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBlue = styled.div`
  color: blue;
`;

const StyledRed = styled.div`
  color: red;
  font-style: italic
`;

const StyledGreen = styled.div`
  color: green;
`;

class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: "None"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(book) {
    console.log(`clicked ${book.Title}`);
    this.setState({
      selectedBook: book
    });
    this.props.requestSelectedBook(book);
  }

  componentDidMount() {
    this.props.requestBooks();
  }

  render() {
    return (
      <div className="App-booklist">
        <StyledBlue>
          <h2>To read</h2>
          <ul className="Books-to-read">
            {this.props.lists["To-read"].map(book => (
              <Book
                onClick={() => this.handleClick(book)}
                key={book.Title}
                Title={book.Title}
                Author={book.Author}
              />
            ))}
          </ul>
        </StyledBlue>
        <StyledRed>
        <h2>Currently reading</h2>
        <ul className="Books-reading">
          {this.props.lists["Reading"] ? (
            <Book
              onClick={() => this.handleClick(this.props.lists["Reading"])}
              Title={this.props.lists["Reading"].Title}
              Author={this.props.lists["Reading"].Author}
            />
          ) : (
            <p>READ MORE MORON!</p>
          )}
        </ul>
        </StyledRed>
        <StyledGreen>
        <h2>Finished reading</h2>
        <ul className="Books-finished">
          {this.props.lists["Finished-reading"].map(book => (
            <Book
              onClick={() => this.handleClick(book)}
              key={book.Title}
              Title={book.Title}
              Author={book.Author}
            />
          ))}
        </ul>
        </StyledGreen>
      </div>
    );
  }
}

const Book = props => {
  return (
    <li onClick={props.onClick}>
      {props.Title}
      <ul>
        <li>{props.Author}</li>
      </ul>
    </li>
  );
};

Booklist.propTypes = {
  requestBooks: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired
};

Book.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired
};

export default Booklist;
