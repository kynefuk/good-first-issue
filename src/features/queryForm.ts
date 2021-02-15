import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { constants } from "../constants";

export type TupleToUnion<T extends readonly unknown[]> = T[number];
export type QueryLangUnion = TupleToUnion<
  typeof constants.searchFilters.languages
>;
export type QueryLangs = QueryLangUnion[];
export type QueryTagUnion = TupleToUnion<typeof constants.searchFilters.labels>;
export type QueryTags = QueryTagUnion[];

export type IssueState = {
  queryLangs: QueryLangs;
  queryTags: QueryTags;
};
export const initialState: IssueState = {
  queryLangs: [],
  queryTags: [],
};

export const issueSlice = createSlice({
  name: "queryForm",
  initialState,
  reducers: {
    addLangs: (state, action: PayloadAction<QueryLangs>) => ({
      ...state,
      queryLangs: action.payload,
    }),
    removeAll: (state) => ({
      ...state,
      queryLangs: [],
      queryTags: [],
    }),
  },
});

// export const isQueryLangs = (
//   arg: PayloadAction<QueryLangs | QueryTags>
// ): arg is PayloadAction<QueryLangs> => {
//   return arg.type === "lang";
// };

// export const isQueryTags = (
//   arg: PayloadAction<QueryLangs | QueryTags>
// ): arg is PayloadAction<QueryTags> => {
//   return arg.type === "tag";
// };
