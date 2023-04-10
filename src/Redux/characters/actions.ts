import { createAsyncThunk } from "@reduxjs/toolkit";
import requestHandler from "../../constants/requestHandler";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await requestHandler("post", payload.query)
      return data.characters.results;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
