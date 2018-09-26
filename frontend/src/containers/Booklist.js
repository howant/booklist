import { connect } from "react-redux";
import Booklist from "../components/Booklist";
import { requestBooks } from "../actions";

const mapStateToProps = state => ({
  lists: state
});

const mapDispatchToProps = dispatch => ({
  requestBooks: books => dispatch(requestBooks(books))
});

const BooklistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Booklist);

export default BooklistContainer;
