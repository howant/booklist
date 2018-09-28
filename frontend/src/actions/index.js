export const requestBooks = () => ({
  type: 'REQUEST_BOOKS'
})

export const bookSuccess = (books) => ({
  type: 'BOOK_SUCCESS',
  books
})

export const requestSelectedBook = (book) => ({
  type: "REQUEST_SELECTED_BOOK",
  book
})
