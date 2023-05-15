import { createSlice } from "@reduxjs/toolkit";
import RecipeeStore from "./recipeStore";


const initialState = RecipeeStore

const recipeSlice = createSlice({
    name: 'transfer',
    initialState,
    reducers:{
        toggleShowMessageState: (state, {payload}) => {
            state.showMessage = payload
        }
    },
    extraReducers: builder => {
        
    }
})

export const {toggleShowMessageState}  = recipeSlice.actions
export default recipeSlice.reducer

