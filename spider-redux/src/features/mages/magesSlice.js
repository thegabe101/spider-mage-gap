import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MAGE_URL = `api3/mages`;

const initialState = []

export const fetchMages = createAsyncThunk('mages/fetchMages', async () => {
    const response = await axios.get(MAGE_URL);
    return response.data
})

export const addNewMage = createAsyncThunk('mages/addNewMage', async (mage) => {
    const response = await axios.post(MAGE_URL, mage)
    return response.data
})


const magesSlice = createSlice({
    name: 'mages',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMages.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllMages = (state) => state.mages;

export default magesSlice.reducer