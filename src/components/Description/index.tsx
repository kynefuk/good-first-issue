import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

export const Description: React.FC = () => {
  return (
    <Box alignContent='center' alignItems='center' textAlign='center'>
      <Heading as='h1' size='xl'>
        GitHubのOSSにコントリビュート
      </Heading>
      <Text fontFamily='mono' mt='3' align='center'>
        Open-Source projects are looking for your help. Below are recent issues
        <br />
        that maintainers labelled as help wanted. Use the filters to find issues
        <br />
        you&apos;d like to contribute to.
      </Text>
    </Box>
  );
};
