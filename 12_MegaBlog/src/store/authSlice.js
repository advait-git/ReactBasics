import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    statue:false,
    userData:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.statue = true;
            state.userData = action.payload;
        },
        logout: (state) =>{
            state.statue = false;
            state.userData = null;
        }
    }
})
export const {login,logout}= authSlice.actions;
export default authSlice.reducer;