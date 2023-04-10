import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../config/apiEndpoint";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        url: BASE_URL,
        method: "post",
        data: {
          query: payload.query,
        },
      });
      return data.data.characters.results;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
