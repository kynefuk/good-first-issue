import React from "react";
import "./App.css";
import { ChakraProvider, Box, Flex, Spacer, Icon } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Box>
          <Box>
            <Flex bgColor="black">
              <Box p="5" color="white">
                TEst
              </Box>
              <Spacer />
              <Box>
                <Icon as={GoMarkGithub} w={10} h={10} />
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
