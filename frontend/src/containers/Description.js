import { connect } from "react-redux";
import Description from "../components/Description";
import { requestSelectedBook } from "../actions";

const mapStateToProps = state => ({
  selectedBook: state.selectedBook
});

const mapDispatchToProps = dispatch => ({
  requestSelectedBook: selectedBook => dispatch(requestSelectedBook(selectedBook))
});

const DescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);

export default DescriptionContainer;
