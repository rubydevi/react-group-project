import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReservedDragons from '../components/ReservedDragons';

const mockStore = configureStore([]);

test('ReservedDragons component renders correctly with reserved dragons', () => {
  const store = mockStore({
    dragons: {
      dragons: [
        {
          id: '1',
          name: 'Dragon 1',
          reserved: true,
        },
        {
          id: '2',
          name: 'Dragon 2',
          reserved: true,
        },
      ],
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <ReservedDragons />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ReservedDragons component renders correctly with no reserved dragons', () => {
  const store = mockStore({
    dragons: {
      dragons: [
        {
          id: '3',
          name: 'Dragon 3',
          reserved: false,
        },
      ],
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <ReservedDragons />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
