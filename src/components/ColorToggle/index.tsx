import React, { useState } from 'react';
import { Box, useColorMode, Switch } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ColorToggle: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    toggleColorMode();
    setIsChecked(!isChecked);
  };

  return (
    <Box mt="5">
      <Box mt="3" display="inline">
        <Switch size="md" onChange={handleOnChange} isChecked={isChecked} />
      </Box>
      <Box display="inline" ml="3" mr="3">
        {isChecked ? (
          <MoonIcon w={5} h={5} color="white" />
        ) : (
          <SunIcon w={5} h={5} color="white" />
        )}
      </Box>
    </Box>
  );
};
