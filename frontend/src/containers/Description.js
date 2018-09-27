import { connect } from "react-redux";
import Description from "../components/Description";

const mapStateToProps = state => ({
  lists: state
});

const DescriptionContainer = connect(
  mapStateToProps,
)(Description);

export default DescriptionContainer;
