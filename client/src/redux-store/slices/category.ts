import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  loading: boolean;
  categories: ICategory[];
}

const initialState: CategoryState = {
  loading: false,
  categories: [],
};

export const categorySlice = createSlice({
  initialState,
  name: "category",
  reducers: {},
  extraReducers(builder) {},
});

export default categorySlice.reducer;
