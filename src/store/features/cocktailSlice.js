import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async () => {
    const response = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    );
    const data = await response.data;
    return data;
  }
);

const initialState = {
  cocktails: [],
  cocktail: [],
  loading: false,
  error: null,
};

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cocktails = payload.drinks;
    },
    [fetchCocktails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default cocktailSlice.reducer;
