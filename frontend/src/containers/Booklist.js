import { connect } from "react-redux";
import Booklist from "../components/Booklist";
import { requestBooks, requestSelectedBook } from "../actions";
import { push } from "connected-react-router";

const mapStateToProps = state => ({
  lists: state,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  requestBooks: books => dispatch(requestBooks(books)),
  requestSelectedBook: bookTitle => {
    dispatch(requestSelectedBook(bookTitle));
    dispatch(push('/booklist/description'));
  }
});

const BooklistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Booklist);

export default BooklistContainer;
