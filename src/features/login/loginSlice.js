import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    user:JSON.parse(localStorage.getItem('user')) || {},
    apply:{}
};

const userSlice = createSlice({
    name:'user',
    initialState:initalState,
    reducers:{
        setUser(state, action){
            state.user =action.payload;
        }, 
        setApply(state, action) {
            state.apply = action.payload;
        }
    }
})

export const {setApply, setUser} = userSlice.actions
export const reducer2 = userSlice.reducer;