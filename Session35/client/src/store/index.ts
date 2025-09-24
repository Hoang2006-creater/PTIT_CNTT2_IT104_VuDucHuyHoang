import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice"
//Noi luu tru du lieu tap trung cho toan bo du an 
export const store =configureStore({
    reducer:{
        counter:counterSlice,
    },
})
//Dinh nghia tyoe cho toan bo State
export type RootState=ReturnType<typeof store.getState>
//Dinh nghia type cho dispatch
export type AppDispatch =typeof store.dispatch
