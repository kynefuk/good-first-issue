import React, { useState } from "react";
import { FormControl, FormLabel, Input, Center } from "@chakra-ui/react";
import { QueryTag } from "../QueryTag/index";

export type QueryFormProps = {
  label: string;
  queryDataList: string[];
};

export const QueryForm: React.FC<QueryFormProps> = ({
  label,
  queryDataList,
}) => {
  const [queryData, setQueryData] = useState<string[]>([]);
  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    if (queryData.includes(input)) {
      return;
    }
    if (!queryDataList.includes(input)) {
      return;
    }
    // TODO
    if (event.which === 13) {
      setQueryData([...queryData, input]);
    }
    event.currentTarget.value = "";
  };

  return (
    <Center>
      <FormControl id="query" w="80%">
        <FormLabel>{label}</FormLabel>
        {queryData.map((data) => (
          <QueryTag key={data} query={data} setQueryData={setQueryData} />
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
