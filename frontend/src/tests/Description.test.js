import React from 'react';
import Description from '../components/Description';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const lists = {
    "Selected-book": "Book One"
  }
  const tree = renderer
    .create(<Description lists={lists}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});