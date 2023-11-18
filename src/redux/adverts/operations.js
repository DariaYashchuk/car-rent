import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64db8a7d593f57e435b11aed.mockapi.io/api/v1";

export const fetchAdvert = createAsyncThunk(
  "advert/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/advert?page=${page}&limit=12`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAdvertById = createAsyncThunk(
  "advert/fetchAdvertById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/advert/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
