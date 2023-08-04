import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import DragonsPage from '../components/Dragons';

const mockStore = configureMockStore([]);

// Mock the axios module
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe('DragonsPage Component', () => {
  let store;
  let component;

  beforeEach(() => {
    // Mock dragons data
    const initialState = {
      dragons: {
        dragons: [
          {
            id: 1,
            name: 'Dragon 1',
            description: 'Description for Dragon 1',
            flickr_images: ['url1', 'url2'],
            reserved: false,
          },
          {
            id: 2,
            name: 'Dragon 2',
            description: 'Description for Dragon 2',
            flickr_images: ['url3', 'url4'],
            reserved: true,
          },
        ],
      },
    };

    store = mockStore(initialState);
    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <DragonsPage />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
