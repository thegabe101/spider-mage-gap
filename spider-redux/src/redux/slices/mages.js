import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MageService from "../..//services/MageService";

const initialState = [];

export const createMage = createAsyncThunk(
  "mages/create",
  async ({ title, description }) => {
    const res = await MageService.create({ title, description });
    return res.data;
  }
);

export const retrieveMages = createAsyncThunk(
  "mages/retrieve",
  async () => {
    const res = await MageService.getAll();
    return res.data;
  }
);

const tutorialSlice = createSlice({
  name: "mage",
  initialState,
  extraReducers: {
    [createMage.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveMages.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = tutorialSlice;
export default reducer;