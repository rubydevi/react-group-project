import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rocketsSlice';
import dragonsReducer from './Dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
