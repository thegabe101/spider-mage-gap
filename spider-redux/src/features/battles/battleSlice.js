import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";

const MAGE_URL = `/api2/mages`;

const initialState = {
    mages: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchMages = createAsyncThunk('mages/fetchMages', async () => {
    // const response = await axios.get(MAGE_URL)
    console.log("FETCH MAGES")
    const response = [{
            name: "a"
    },
    {
        name: "dfd"
    }    
]
    return response
})

const mageSlice = createSlice({
    name: 'mages',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchMages.pending, (state, action) => {
                state.status = 'idle'
            })
            .addCase(fetchMages.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                let min = 1;
                const loadedMages = action.payload.map(mage => {
                    mage.date = sub(new Date(), { minutes: min++ }).toISOString();
                    return mage;
                });
                console.log("state suceed ", state)
                state.mages = state.mages.concat(loadedMages)
            })
            .addCase(fetchMages.rejected, (state, action) => {
                state.status = 'failed'
                console.log("state suceed ", state)

                state.error = action.error.message
            })
    }
})

export const selectAllMages = (state) => state.mages.mages;
export const getMagesStatus = (state) => state.mages.status;
export const getMagesError = (state) => state.mages.error;

export default mageSlice.reducer
