import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://apigenerator.dronahq.com/api/sVpfap-X/sales"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  entities: [],
  loading: false,
  success: null,
  error: null,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.entities = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = true;
        state.success = false;
        state.error = true;
      });
  },
});
export default productSlice.reducer;
