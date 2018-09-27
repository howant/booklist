const initialState = {
  "To-read": [],
  Reading: { },
  "Finished-reading": []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BOOKS":
      return state;
    case "BOOK_SUCCESS":
      return action.books;
    default:
      return state;
  }
};

export default bookReducer;
