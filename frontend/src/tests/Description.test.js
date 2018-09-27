import React from 'react';
import Description from '../components/Description';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Description/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});