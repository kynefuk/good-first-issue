import React from 'react';
import './App.css';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';
import { Header } from './components/Header/index';
import { Description } from './components/Description/index';
import { LangForm } from './container/LangForm';
import { LabelForm } from './container/LabelForm';
import { constants } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { IssueState, issueSlice } from './features/results';
import { useQuery } from 'react-query';
import { queryIssues } from './domains/github/services/index';
import { RootState } from './features/root';
import { IssueList } from './components/IssueList';

const App = () => {
  const { data: issues = [] } = useQuery(['hoge', 'fuga'], () =>
    queryIssues(
      'q=linux+label:bug+language:python+state:open&sort=created&order=asc'
    )
  );
  const data = useSelector<RootState, IssueState>((state) => state.issue);
  const results = data.issues;
  console.log(results);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(issueSlice.actions.add(issues));
  };

  return (
    <ChakraProvider>
      <div className='App'>
        <Header />
        <main style={{ padding: '3rem' }}>
          <Box alignContent='center'>
            <Description />
            <LangForm
              label='language'
              queryDataList={constants.searchFilters.languages}
            />
            <LabelForm
              label='label'
              queryDataList={constants.searchFilters.labels}
            />
            <h3>{results.length}</h3>
            <Box>
              <Button onClick={handleOnClick}>Search</Button>
            </Box>
          </Box>
          <IssueList issues={results} />
        </main>
      </div>
    </ChakraProvider>
  );
};

export default App;
