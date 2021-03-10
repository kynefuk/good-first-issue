import React from 'react';
import { Box, Avatar, Text, Flex, Link, Divider } from '@chakra-ui/react';
import {
  Issue,
  getUserName,
  getRepoName,
  getRepoURL,
  removeBCFromBody,
} from '../../domains/github/models/issues';

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
    <Flex marginTop='10'>
      <Box>
        <Link href={user.html_url} isExternal>
          <Avatar src={user.avatar_url} alt={user.avatar_url} size='2xl' />
          <Text fontSize='xs'>{getUserName(user)}</Text>
        </Link>
      </Box>
      <Box marginLeft='10' width='100%' textAlign='left'>
        <Text>
          <Link href={html_url} isExternal color='blue'>
            {title}
          </Link>
        </Text>
        <Text fontSize='xs'>
          <Link href={getRepoURL(html_url)} isExternal color='blue'>
            {getRepoName(html_url)}
          </Link>
        </Text>
        <small>{created_at}</small>
        <Divider />
        <Text
          fontSize='small'
          color='gray.500'
          isTruncated
          style={{ whiteSpace: 'pre-line' }}
        >
          {removeBCFromBody(body)}
        </Text>
      </Box>
    </Flex>
  );
};
