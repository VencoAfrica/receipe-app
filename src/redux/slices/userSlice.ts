import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  userToken?: string | null;
  refreshToken?: string | null;
  userId?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  roleName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idNumber?: string | null;
  isActive?: string | null;
  restaurantId?: string | null;
  revenueCenterId?: string | null;
}

const initialState: UserState = {
  userToken: null,
  refreshToken: null,
  userId: null,
  email: '',
  phoneNumber: '',
  roleName: '',
  firstName: '',
  lastName: '',
  idNumber: '',
  isActive: '',
  restaurantId: '',
  revenueCenterId: '',
};

// @ts-ignore
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserToken: (state: RootState, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
    setRefreshToken: (state: RootState, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setUserId: (state: RootState, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setUserEmail: (state: RootState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserPhone: (state: RootState, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setUserFirstName: (state: RootState, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setUserLastName: (state: RootState, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmptyUser: (state: RootState, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.userToken = null;
        state.refreshToken = null;
        state.userId = null;
        state.email = '';
        state.phoneNumber = '';
        state.roleName = '';
        state.firstName = '';
        state.lastName = '';
        state.idNumber = '';
        state.isActive = false;
        state.restaurantId = '';
        state.revenueCenterId = '';
      }
    },
  },
});

export const {
  setUserToken,
  setRefreshToken,
  setUserId,
  setUserEmail,
  setUserPhone,
  setUserFirstName,
  setUserLastName,
  setEmptyUser,
} = userSlice.actions;

export default userSlice.reducer;
