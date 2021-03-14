import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { Issue } from '../../domains/github/models/issues';
import { IssueItem } from '../Issue/index';
import { useDispatch, useSelector } from 'react-redux';
import { IssueState } from '../../features/results';
import { useQuery } from 'react-query';
import { queryIssues } from '../../domains/github/services/index';
import { RootState } from '../../features/root';
import { QueryLangState } from '../../features/queryLang';
import { QueryLabelState } from '../../features/queryLabel';

export type IssueListProps = {
  issues: Issue[];
};

export const IssueList: React.FC<IssueListProps> = () => {
  const issueState = useSelector<RootState, IssueState>((state) => state.issue);
  const langFormState = useSelector<RootState, QueryLangState>(
    (state) => state.queryLang
  );
  const labelFormState = useSelector<RootState, QueryLabelState>(
    (state) => state.queryLabel
  );

  const dispatch = useDispatch();

  const constructParams = (
    langForm: QueryLangState,
    labelForm: QueryLabelState
  ) => {
    const langParams = langForm.queryLangs.join(':');
    const labelPrams = labelForm.queryLabels.join(':');
    return `q=+label:${labelPrams.toLowerCase()}+language:${langParams.toLowerCase()}+state:open&sort=created&order=desc`;
  };

  const { data = [] } = useQuery(
    [...langFormState.queryLangs, ...labelFormState.queryLabels],
    () => queryIssues(constructParams(langFormState, labelFormState))
  );

  // dispatch(issueSlice.actions.add(issues));

  return (
    <Box>
      {data?.map((issue) => (
        <React.Fragment key={issue.html_url}>
          <IssueItem {...issue} />
          <Divider marginTop='0.8rem' />
        </React.Fragment>
      ))}
    </Box>
  );
};
