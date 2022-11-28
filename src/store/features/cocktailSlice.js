import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const urlAllCocktails =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async () => {
    const response = await axios.get(urlAllCocktails);
    const data = await response.data;
    return data;
  }
);

const urlSingleSelected =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const fetchSelectedCocktail = createAsyncThunk(
  'cocktails/fetchSelectedCocktail',
  async (id) => {
    const response = await axios.get(`${urlSingleSelected}${id}`);
    const data = await response.data;

    return data;
  }
);

const initialState = {
  cocktails: [],
  selectedCocktail: {},
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
    [fetchSelectedCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSelectedCocktail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.selectedCocktail = payload.drinks[0];
    },
    [fetchSelectedCocktail.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default cocktailSlice.reducer;
