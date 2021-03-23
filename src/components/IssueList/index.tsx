import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { Issue } from '../../domains/github/models/issues';
import { IssueItem } from '../Issue/index';

export type IssueListProps = {
  issues: Issue[];
};

export const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <Box>
      {issues.map((issue) => (
        <React.Fragment key={issue.html_url}>
          <IssueItem {...issue} />
          <Divider marginTop='0.8rem' />
        </React.Fragment>
      ))}
    </Box>
  );
};
