import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Issue } from "../domains/github/models/issues";

export type IssueState = {
  issues: Issue[];
  //queryLangs: string[];
  //queryTags: string[];
};
export const initialState: IssueState = {
  issues: [],
  //queryLangs: [],
  //queryTags: [],
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Issue[]>) => ({
      ...state,
      issues: [...state.issues, ...action.payload],
    }),
    removeAll: (state) => ({
      ...state,
      issues: [],
    }),
  },
});
