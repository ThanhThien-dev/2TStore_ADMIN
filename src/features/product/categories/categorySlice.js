import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk để lấy danh sách thể loại từ API
export const fetchCategories = createAsyncThunk("api/categories", async () => {
  const response = await axios.get("https://dummyjson.com/products/");
  return response.data;
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
    updateCategory: (state, action) => {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { addCategory, deleteCategory, updateCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
