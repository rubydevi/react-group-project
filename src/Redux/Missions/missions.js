/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  misions: [],
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
  extraReducers: (builder) => {
    builder.addCase(getMission.fulfilled, (state, action) => {
      state.misions = action.payload;
      state.status = 'success';
    });
    builder.addCase(getMission.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default missionSlice.reducer;
