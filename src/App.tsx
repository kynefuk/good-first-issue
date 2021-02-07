import React from "react";
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Header } from "./components/Header/index";
import { Description } from "./components/Description/index";
import { QueryForm } from "./components/Form/index";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Box>
          <Header />
          <Description />
          <QueryForm />
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
