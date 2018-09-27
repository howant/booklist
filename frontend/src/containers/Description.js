import { connect } from "react-redux";
import Description from "../components/Description";

const mapStateToProps = state => ({
  selectedBook: state.selectedBook
});

const DescriptionContainer = connect(
  mapStateToProps,
)(Description);

export default DescriptionContainer;
