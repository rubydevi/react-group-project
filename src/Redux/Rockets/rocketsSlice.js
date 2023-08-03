import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

// Fetch Rockets from API
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (thunkAPI) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (
        rocket.id !== rocketId ? rocket : { ...rocket, reserved: true }));
    },
    unreserveRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (
        rocket.id !== rocketId ? rocket : { ...rocket, reserved: false }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload.map((rocket) => ({
        ...rocket,
        reserved: false, // Set the initial value of reserved to false
      }));
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { reserveRocket, unreserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
