import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Rocket from '../components/Rocket';

// Create a mock store with the state you want to use in the test
const mockStore = configureStore([]);

test('Rocket component renders correctly', () => {
  const mockRocket = {
    id: '5e9d0d95eda69955f709d1eb',
    name: 'Falcon 1',
    description: 'Description 1',
    flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
    reserved: false,
  };

  const store = mockStore({});

  const tree = renderer.create(
    <Provider store={store}>
      <Rocket rocket={mockRocket} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
