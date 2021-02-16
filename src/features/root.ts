import { combineReducers } from "@reduxjs/toolkit";
import { queryLangSlice } from "./queryLang";
import { issueSlice } from "./results";

export const rootReducer = combineReducers({
  issue: issueSlice.reducer,
  queryLang: queryLangSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
