import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { charactersStateType } from "../../types";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        url: "https://rickandmortyapi.com/graphql",
        method: "post",
        data: {
          query: `
          query {
            characters(page: 1) {
              results {
                name
              }
            }
          }
            `,
        },
      });
      return data.data.characters.results;
    } catch (error: any) {
      console.log("error", error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState: charactersStateType = {
  loading: false,
  data: [],
  error: null,
};

const chareactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      return { ...state, error: null, data: [], loading: true };
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      return { ...state, error: null, data: action.payload, loading: false };
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      return {
        ...state,
        error: action.error.message,
        data: [],
        loading: false,
      };
    });
  },
});

export default chareactersSlice.reducer;
