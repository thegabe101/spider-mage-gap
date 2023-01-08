import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./slices/filterSlice";
import mageSliceReducer from "./slices/mageSlice";


export const store = configureStore({
    reducer: {
        productFilter: filterSliceReducer,
        selectedMage: mageSliceReducer
    }
})