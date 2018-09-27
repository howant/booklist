import React from 'react';
import Description from '../components/Description';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const lists = {
    selectedBook: {
      title: "Book One",
      synopsis: "synopsis goes here..."
    }
  }
  const tree = renderer
    .create(<Description selectedBook={lists}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});