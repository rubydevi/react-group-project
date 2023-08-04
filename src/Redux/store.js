import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missions';
import rocketsReducer from './Rockets/rocketsSlice';
import dragonsReducer from './Dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
