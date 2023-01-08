import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mage: '',
}

export const mageSlice = createSlice({
    name: 'selectedMage',
    initialState,
    reducers: {
        setMage: (state, action) => {
            state.mage = action.payload
        }
    }
})


export const { setMage } = mageSlice.actions
export default mageSlice.reducer