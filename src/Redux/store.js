import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missions';
import rocketsReducer from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
