import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

// @ts-ignore
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isOnboarded: false,
  },
  reducers: {
    setUserOnboarded: (state: RootState, action: PayloadAction<boolean>) => {
      state.isOnboarded = action.payload;
    },
    setUserAuthState: (state: RootState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setUserAuthState, setUserOnboarded} = authSlice.actions;
export default authSlice.reducer;
