import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ReservedRockets from '../components/ReservedRockets';

// Create a mock store with the state you want to use in the test
const mockStore = configureStore([]);

test('ReservedRockets component renders correctly with reserved rockets', () => {
  const mockReservedRockets = [
    {
      id: '5e9d0d95eda69955f709d1eb',
      name: 'Falcon 1',
      description: 'Description 1',
      flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
      reserved: true,
    },
    {
      id: '5e9d0d95eda69973a809d1ec',
      name: 'Falcon 9',
      description: 'Description 2',
      flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
      reserved: true,
    },
  ];

  const store = mockStore({
    rockets: {
      rockets: mockReservedRockets,
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <ReservedRockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ReservedRockets component renders correctly with no reserved rockets', () => {
  const mockReservedRockets = [];

  const store = mockStore({
    rockets: {
      rockets: mockReservedRockets,
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <ReservedRockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
