import {createSlice} from '@reduxjs/toolkit';
import {updates} from './reducers';

const initialState= {
  theme: 'light',
};

export const slice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    updates,
    reset: _ => initialState,
  },
});

export default slice.reducer;
// Action creators are generated for each case reducer function
export const settingsActions = slice.actions;
