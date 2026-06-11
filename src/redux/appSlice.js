import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        username:"HimerCutz",
        count : 10,
        students:["Kunle", "Sayo", "Sade", "Bayo", "Bola"]
        //adding to students,
        //removing from students 
        //update students
    },

    reducers:{
        increaseCount:(state)=>{
            state.count++
        },

        decreaseCount:(state)=>{
            state.count= state.count-1
        },

        increaseCountWithNum:(state, action)=>{
            state.count= state.count+action.payload
        }
    }

})


export default appSlice.reducer

export const {increaseCount, decreaseCount, increaseCountWithNum} = appSlice.actions