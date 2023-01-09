import { configureStore } from "@reduxjs/toolkit";
import magesReducer from '../features/mages/magesSlice';


export const store = configureStore({
    reducer: {
        mages: magesReducer
    }
})