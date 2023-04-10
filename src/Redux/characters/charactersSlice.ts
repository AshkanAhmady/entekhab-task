import { createSlice } from "@reduxjs/toolkit";
import { charactersStateType } from "../../types";
import { fetchCharacters } from "./actions";

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
