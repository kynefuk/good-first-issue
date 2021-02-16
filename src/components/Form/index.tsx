import React from "react";
import { FormControl, FormLabel, Input, Center } from "@chakra-ui/react";
import { QueryTag } from "../QueryTag/index";
import { constants } from "../../constants";

export type queryLangs = typeof constants.searchFilters.languages[number];
export type queryLabels = typeof constants.searchFilters.labels[number];

export type QueryFormPresenterProps = {
  label: string;
  queryDataList: readonly any[];
  queryTags: readonly any[];
  handleOnKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const QueryFormPresenter: React.FC<QueryFormPresenterProps> = ({
  label,
  queryDataList,
  queryTags,
  handleOnKeyPress,
}) => {
  return (
    <Center>
      <FormControl id="query" w="80%">
        <FormLabel>{label}</FormLabel>
        {queryTags.map((data) => (
          <QueryTag key={data} query={data} />
        ))}
        <Input type="text" list={label} onKeyPress={handleOnKeyPress} />
        <datalist id={label}>
          {queryDataList.map((data) => (
            <option key={data}>{data}</option>
          ))}
        </datalist>
      </FormControl>
    </Center>
  );
};
