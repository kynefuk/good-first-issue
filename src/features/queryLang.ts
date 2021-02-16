import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { constants } from "../constants";

export type QueryLang = typeof constants.searchFilters.languages[number];

export type QueryLangState = {
  queryLangs: QueryLang[];
};
export const initialState: QueryLangState = {
  queryLangs: [],
};

export const queryLangSlice = createSlice({
  name: "queryLang",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<QueryLang>) => ({
      ...state,
      queryLangs: [...state.queryLangs, action.payload],
    }),
    delete: (state, action: PayloadAction<QueryLang>) => {
      const newArray = state.queryLangs.filter(
        (lang) => lang !== action.payload
      );
      return { ...state, queryLangs: newArray };
    },
    removeAll: (state) => ({
      ...state,
      queryLangs: [],
    }),
  },
});
