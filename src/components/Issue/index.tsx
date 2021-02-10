import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Issue } from "../../domains/github/models/issues";

export type IssueItemProps = Issue;

export const IssueItem: React.FC<Issue> = ({
  repository_url,
  labels_url,
  html_url,
  title,
  user,
  label,
  state,
  created_at,
  updated_at,
  body,
}) => {
  return (
    <Box>
      <Image src={user.avatar_url} alt={user.avatar_url} />
    </Box>
  );
};
