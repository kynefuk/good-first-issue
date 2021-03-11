import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/react';

export type IssueTagProps = {
  tagName: string;
  tagColor: string;
};

export const IssueTag: React.FC<IssueTagProps> = ({ tagName, tagColor }) => {
  return (
    <Tag size='md' ml='3' style={{ background: `#${tagColor}` }}>
      <TagLabel>{tagName}</TagLabel>
    </Tag>
  );
};
