import React from 'react';
import { useDispatch } from 'react-redux';
import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { isQueryLang } from '../../features/queryLang';
import { isQueryLabel } from '../../features/queryLabel';
import { QueryLabelSliceType, QueryLangSliceType } from '../../types/index';

export type QueryTagProps = {
  query: string;
  slice: QueryLangSliceType | QueryLabelSliceType;
};

export const QueryTag: React.FC<QueryTagProps> = ({ query, slice }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (slice.name === 'queryLang') {
      if (isQueryLang(query)) {
        dispatch(slice.actions.delete(query));
      }
    } else {
      if (isQueryLabel(query)) {
        dispatch(slice.actions.delete(query));
      }
    }
  };
  return (
    <Tag size="lg" ml="3">
      <TagLabel>{query}</TagLabel>
      <TagCloseButton onClick={handleOnClick} />
    </Tag>
  );
};
