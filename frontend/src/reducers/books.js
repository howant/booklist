const initialState = {
  "To-read": [],
  Reading: undefined,
  "Finished-reading": [],
  selectedBook: {
    Title: "Book One",
    Synopsis: "synopsis goes here..."
  }
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BOOKS":
      return state;
    case "BOOK_SUCCESS":
      // console.log(action.books);
      return {
        ...state,
        "To-read": action.books["To-read"],
        Reading: action.books.Reading,
        "Finished-reading": action.books["Finished-reading"]
      };
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
