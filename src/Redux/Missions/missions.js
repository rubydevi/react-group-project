/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: 'idle',
};

export const getMission = createAsyncThunk('get/missions', async (thunkAPI) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const newData = data.map((mission) => ({ ...mission, reserved: false }));
    return newData;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (
        mission.mission_id !== missionId ? mission : { ...mission, reserved: true }));
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (
        mission.mission_id !== missionId ? mission : { ...mission, reserved: false }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMission.fulfilled, (state, action) => {
      state.missions = action.payload;
      state.status = 'success';
    });
    builder.addCase(getMission.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
