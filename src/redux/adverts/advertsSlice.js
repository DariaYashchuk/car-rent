import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvert, fetchAdvertById } from "./operations";

const advertInitialState = {
  items: [],
  advertById: {},
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const advertSlice = createSlice({
  name: "advert",
  initialState: advertInitialState,
  extraReducers: {
    [fetchAdvert.pending]: handlePending,
    [fetchAdvert.rejected]: handleRejected,
    [fetchAdvertById.pending]: handlePending,
    [fetchAdvertById.rejected]: handleRejected,
    [fetchAdvert.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAdvertById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.advertById = action.payload;
    },
  },
});

export const advertReducer = advertSlice.reducer;
