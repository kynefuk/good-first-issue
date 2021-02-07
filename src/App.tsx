import React from "react";
import "./App.css";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import { Header } from "./components/Header/index";
import { Description } from "./components/Description/index";
import { QueryForm } from "./components/Form/index";
import { constants } from "./constants";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Box>
          <Header />
          <Description />
          <QueryForm
            label="language"
            queryDataList={constants.searchFilters.languages}
          />
          <QueryForm
            label="label"
            queryDataList={constants.searchFilters.labels}
          />
          <Box>
            <Button>Search</Button>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
