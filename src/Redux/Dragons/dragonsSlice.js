import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  activeDragons: [],
};
const DragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers:{
    add(state, action){
      
    }
  }
});

export default DragonSlice.reducer;
