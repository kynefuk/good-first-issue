import React from "react";
import { FormControl, FormLabel, Select, Input } from "@chakra-ui/react";
import { constants } from "../../constants";

export const QueryForm: React.FC = () => {
  return (
    <FormControl id="query">
      <FormLabel>Language</FormLabel>
      <Input placeholder="Select Language" list="language" />
      <datalist id="language">
        {constants.searchFilters.languages.map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </datalist>
    </FormControl>
  );
};
