import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('Navigation renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
