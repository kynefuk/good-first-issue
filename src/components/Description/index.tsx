import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

export const Description: React.FC = () => {
  return (
    <Box mt="20" w="50%" textAlign="center">
      <Heading as="h1" size="xl">
        GitHubのOSSにコントリビュート
      </Heading>
      <Text fontFamily="mono" mt="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Box>
  );
};
