import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    brand: { value: "", label: "" },
    pricePerHour: { value: "", label: "" },
    minMileage: "",
    maxMileage: "",
  },
  reducers: {
    setBrand(state, action) {
      if (action.payload === null) {
        return { ...state, brand: { value: "", label: "" } };
      }
      return { ...state, brand: action.payload };
    },
    setPricePerHour(state, action) {
      if (action.payload === null) {
        return { ...state, pricePerHour: { value: "", label: "" } };
      }
      return { ...state, pricePerHour: action.payload };
    },
    setMinMileage(state, action) {
      return { ...state, minMileage: action.payload };
    },
    setMaxMileage(state, action) {
      return { ...state, maxMileage: action.payload };
    },
  },
});

export const { setBrand, setPricePerHour, setMinMileage, setMaxMileage } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
