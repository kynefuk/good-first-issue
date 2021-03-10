import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue } from '../domains/github/models/issues';

export type IssueState = {
  issues: Issue[];
};
export const initialState: IssueState = {
  issues: [],
};

export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Issue[]>) => ({
      issues: [...state.issues, ...action.payload],
    }),
    removeAll: () => ({
      issues: [],
    }),
  },
});
