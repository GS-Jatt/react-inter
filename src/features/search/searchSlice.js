import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    data:[],
}


const searchSlice = createSlice({
    name:'search',
    initialState:initalState,
    reducers:{
        setdata(state, action){
            state.data= action.payload;
        },
        
    }
})


export const {setdata} = searchSlice.actions;
export const reducer = searchSlice.reducer