import {createSlice} from '@reduxjs/toolkit';
import * as reducers from './reducers';

const initialState= [];

export const slice = createSlice({
  initialState,
  name: 'notes',
  reducers: {
    ...reducers,
  },
});

export default slice.reducer;
// Action creators are generated for each case reducer function
export const notesActions = slice.actions;
