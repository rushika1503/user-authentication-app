import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
    },

    reducers: {
    
        login: (state,action) => {
            debugger
           state.user = action.payload;
           console.log(action);
        },
        registration: (state,action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const {login,logout,registration} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

