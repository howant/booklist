const initialState = {
  "To-read": [
    {
      "Title": "Lead With Respect",
      "Author": "Michael Ballé & Freddy Ballé"
    },
    {
      "Title": "Star Shroud",
      "Author": "Ken Lozito"
    },
    {
      "Title": "The Great Gatsby",
      "Author": "F. Scott Fitzgerald"
    }
  ],
  "Reading": {
    "Title": "Black Man",
    "Author": "Richard Morgan"
  },
  "Finished-reading": [
    {
      "Title": "Dark Eden",
      "Author": "Chris Beckett"
    },
    {
      "Title": "A Wild Sheep Chase",
      "Author": "Haruki Murakami"
    }
  ]
};

const bookReducer = (state = initialState, action) => state;

export default bookReducer;
