import React, { SetStateAction } from "react";
import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

export type QueryTagProps = {
  query: string;
  setQueryData: React.Dispatch<SetStateAction<string[]>>;
};

export const QueryTag: React.FC<QueryTagProps> = ({ query, setQueryData }) => {
  const handleOnClick = () => {
    setQueryData((prev) => prev.filter((array) => array !== query));
  };
  return (
    <Tag size="lg" ml="3">
      <TagLabel>{query}</TagLabel>
      <TagCloseButton onClick={handleOnClick} />
    </Tag>
  );
};
