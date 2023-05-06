import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

// Define a type for the slice state
interface MealState {
  meals?: object;
  categories?: object;
  latestMeals?: object;
    currentMeal?: object;

}

// Define the initial state using that type
const initialState: MealState = {
    meals: [],
    categories: [],
    latestMeals: [],
    currentMeal: {},

};


const MealSlice = createSlice<any>({
  name: 'Meal',
  initialState,
  reducers: {
    setMeals: (state: RootState, action: PayloadAction<object>) => {
        state.meals = action.payload;
    },
    setCategories: (state: RootState, action: PayloadAction<object>) => {
        state.categories = action.payload;
    },
    setLatestMeals: (state: RootState, action: PayloadAction<object>) => {
        state.latestMeals = action.payload;
    },
      setCurrentMeal: (state: RootState, action: PayloadAction<object>) => {
            state.currentMeal = action.payload;
      },
  },
});

export const {
    setMeals,
    setCategories,
    setLatestMeals,
    setCurrentMeal
} = MealSlice.actions;
export default MealSlice.reducer;
