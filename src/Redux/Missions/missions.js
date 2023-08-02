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
    const newData = data.map((mission) => ({ ...mission, status: false }));
    return newData;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      const newData = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, status: true };
      });
      return newData;
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

export const { joinMission } = missionSlice.actions;
export default missionSlice.reducer;
