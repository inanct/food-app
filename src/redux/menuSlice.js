import { createSlice } from '@reduxjs/toolkit';
import menuData from './data';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menu: menuData,
  },
  reducers: {},
});

export const selectMenu = state => state.menu.menu;

export default menuSlice.reducer;
