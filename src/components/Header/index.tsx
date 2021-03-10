import React from 'react';
import { Box, Flex, Spacer, Icon, Link } from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';
import { ColorToggle } from '../ColorToggle/index';

export const Header: React.FC = () => {
  return (
    <Box>
      <Flex bgColor="black">
        <Box p="5" color="white">
          Good First Issue
        </Box>
        <Spacer />
        <Box>
          <Link href="https://github.com/kynefuk" isExternal>
            <Icon as={GoMarkGithub} w={10} h={10} color="white" mt="3" mr="5" />
          </Link>
        </Box>
        <Box>
          <ColorToggle />
        </Box>
      </Flex>
    </Box>
  );
};
