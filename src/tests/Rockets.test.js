import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import mock store
import RocketsComponent from '../components/Rockets';

// Create a mock store with the state you want to use in the test
const mockStore = configureStore([]);

test('RocketsComponent renders correctly', () => {
  const store = mockStore({
    rockets: {
      rockets: [
        {
          id: '5e9d0d95eda69955f709d1eb',
          name: 'Falcon 1',
          description: 'Description 1',
          flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        },
        {
          id: '5e9d0d95eda69973a809d1ec',
          name: 'Falcon 9',
          description: 'Description 2',
          flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
        },
      ],
      loading: false,
      error: null,
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <RocketsComponent />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
