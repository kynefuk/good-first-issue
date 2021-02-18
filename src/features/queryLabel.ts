import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { constants } from "../constants";

export type QueryLabel = typeof constants.searchFilters.labels[number];

export type QueryLabelState = {
  queryLabels: QueryLabel[];
};
export const initialState: QueryLabelState = {
  queryLabels: [],
};

export const queryLabelSlice = createSlice({
  name: "queryLabel",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<QueryLabel>) => ({
      ...state,
      queryLabels: [...state.queryLabels, action.payload],
    }),
    delete: (state, action: PayloadAction<QueryLabel>) => {
      const newArray = state.queryLabels.filter(
        (label) => label !== action.payload
      );
      return { ...state, queryLabels: newArray };
    },
    removeAll: (state) => ({
      ...state,
      queryLabels: [],
    }),
  },
});

export const isQueryLabel = (arg: string): arg is QueryLabel => {
  return ((constants.searchFilters.labels as unknown) as string[]).includes(
    arg
  );
};
