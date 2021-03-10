import React from 'react';
import { FormControl, FormLabel, Input, Center } from '@chakra-ui/react';
import { QueryTag } from '../QueryTag/index';
import { constants } from '../../constants';
import { QueryLangSliceType, QueryLabelSliceType } from '../../types/index';

export type queryLangs = typeof constants.searchFilters.languages[number];
export type queryLabels = typeof constants.searchFilters.labels[number];

export type QueryFormPresenterProps = {
  label: string;
  queryDataList: readonly any[];
  queryTags: readonly any[];
  handleOnKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  slice: QueryLangSliceType | QueryLabelSliceType;
};

export const QueryFormPresenter: React.FC<QueryFormPresenterProps> = ({
  label,
  queryDataList,
  queryTags,
  handleOnKeyPress,
  slice,
}) => {
  return (
    <Center>
      <FormControl id='query'>
        <FormLabel>{label}</FormLabel>
        {queryTags.map((data) => (
          <QueryTag key={data} query={data} slice={slice} />
        ))}
        <Input type='text' list={label} onKeyPress={handleOnKeyPress} />
        <datalist id={label}>
          {queryDataList.map((data) => (
            <option key={data}>{data}</option>
          ))}
        </datalist>
      </FormControl>
    </Center>
  );
};
