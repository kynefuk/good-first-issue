import React, { Suspense } from 'react';
import './App.css';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';
import { Header } from './components/Header/index';
import { Description } from './components/Description/index';
import { LangForm } from './container/LangForm';
import { LabelForm } from './container/LabelForm';
import { constants } from './constants';
import { useSelector, useDispatch } from 'react-redux';
import { IssueState } from './features/results';
import { RootState } from './features/root';
import { IssueList } from './components/IssueList';
import { issueSlice } from './features/results';
import { QueryLangState } from './features/queryLang';
import { QueryLabelState } from './features/queryLabel';
import { useQuery } from 'react-query';
import { queryIssues } from './domains/github/services/index';
import { queryClient } from './index';

const App = () => {
  const issueState = useSelector<RootState, IssueState>((state) => state.issue);
  const dispatch = useDispatch();

  // FIXME API type errorをErrorBoundaryで処理
  const langFormState = useSelector<RootState, QueryLangState>(
    (state) => state.queryLang
  );
  const labelFormState = useSelector<RootState, QueryLabelState>(
    (state) => state.queryLabel
  );

  const constructParams = (
    langForm: QueryLangState,
    labelForm: QueryLabelState
  ) => {
    const langParams = langForm.queryLangs.join(':');
    const labelPrams = labelForm.queryLabels.join(':');
    return `q=+label:${labelPrams.toLowerCase()}+language:${langParams.toLowerCase()}+state:open&sort=created&order=desc`;
  };
  const { data = [], refetch } = useQuery(
    [...langFormState.queryLangs, ...labelFormState.queryLabels],
    async () =>
      await queryIssues(constructParams(langFormState, labelFormState)),
    {
      cacheTime: 6000000,
      staleTime: 6000000,
    }
  );

  // Searchクリック時にデータfetchしたい
  const handleOnClick = async () => {
    dispatch(issueSlice.actions.removeAll());
    // FIXME refetchでcache使うようにしたい
    const { data } = await refetch();
    console.log(data);
    if (data !== undefined) {
      dispatch(issueSlice.actions.add(data));
    }
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
            <Box>
              <Button onClick={handleOnClick}>Search</Button>
            </Box>
          </Box>
          <Suspense fallback={<h1>Loading</h1>}>
            <IssueList issues={issueState.issues} />
          </Suspense>
        </main>
      </div>
    </ChakraProvider>
  );
};

export default App;
