import { connect } from "react-redux";
import Booklist from "../components/Booklist";
import { requestBooks, requestSelectedBook } from "../actions";

const mapStateToProps = state => ({
  lists: state
});

const mapDispatchToProps = dispatch => ({
  requestBooks: books => dispatch(requestBooks(books)),
  requestSelectedBook: bookTitle => {
    dispatch(requestSelectedBook(bookTitle))
    // push('/booklist/description');
  }
});

const BooklistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Booklist);

export default BooklistContainer;
