import React from 'react';
import Booklist from '../components/Booklist';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const lists = {
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
  const tree = renderer
    .create(<Booklist lists={lists} requestBooks={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
