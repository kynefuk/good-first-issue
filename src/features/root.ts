import { combineReducers } from "@reduxjs/toolkit";
import { queryLangSlice } from "./queryLang";
import { queryLabelSlice } from "./queryLabel";
import { issueSlice } from "./results";

export const rootReducer = combineReducers({
  issue: issueSlice.reducer,
  queryLang: queryLangSlice.reducer,
  queryLabel: queryLabelSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
