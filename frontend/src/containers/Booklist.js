import { connect } from 'react-redux';
import Booklist from '../components/Booklist';

const mapStateToProps = (state) => ({
  lists: state,
});

const BooklistContainer = connect(
  mapStateToProps
)(Booklist)


export default BooklistContainer