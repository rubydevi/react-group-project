import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    data: 'test',
  },
];

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
});

console.log(dragonSlice);
