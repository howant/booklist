export const requestBooks = () => ({
  type: 'REQUEST_BOOKS'
})

export const bookSuccess = (books) => ({
  type: 'BOOK_SUCCESS',
  books
})
