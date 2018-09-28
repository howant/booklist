const initialState = {
  "To-read": [],
  Reading: undefined,
  "Finished-reading": [],
  selectedBook: {
    title: "Book One",
    synopsis: "synopsis goes here..."
  }
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BOOKS":
      return state;
    case "BOOK_SUCCESS":
      return action.books;
    case "REQUEST_SELECTED_BOOK":
      return {
        ...state,
        selectedBook: action.book
      };
    default:
      return state;
  }
};

export default bookReducer;
