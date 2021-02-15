import React from "react";
import "./App.css";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import { Header } from "./components/Header/index";
import { Description } from "./components/Description/index";
import { QueryForm } from "./components/Form/index";
import { constants } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { IssueState, issueSlice } from "./features/results";
import { Issue } from "./domains/github/models/issues";
import { useQuery } from "react-query";
import { queryIssues } from "./domains/github/services/index";

function App() {
  const { data: issues = [] } = useQuery(["hoge", "fuga"], () =>
    queryIssues(
      "q=linux+label:bug+language:python+state:open&sort=created&order=asc"
    )
  );
  const results = useSelector<IssueState, Issue[]>((state) => state.issues);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(issueSlice.actions.add(issues));
  };
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
          <h3>{results.length}</h3>
          <Box>
            <Button onClick={handleOnClick}>Search</Button>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
