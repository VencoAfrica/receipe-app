import {AnyAction, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';
import mealSlice from "./slices/mealSlice";
import {ThunkMiddlewareFor} from '@reduxjs/toolkit/dist/getDefaultMiddleware';


export let store: EnhancedStore<any, AnyAction, [ThunkMiddlewareFor<any>]>;
store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    meal: mealSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
