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
import { QueryLangState } from './features/queryLang';
import { QueryLabelState } from './features/queryLabel';

const App = () => {
  const issueState = useSelector<RootState, IssueState>((state) => state.issue);
  const langFormState = useSelector<RootState, QueryLangState>(
    (state) => state.queryLang
  );
  const labelFormState = useSelector<RootState, QueryLabelState>(
    (state) => state.queryLabel
  );

  const dispatch = useDispatch();

  const constructParams = (
    langForm: QueryLangState,
    labelForm: QueryLabelState
  ) => {
    const langParams = langForm.queryLangs.join(':');
    const labelPrams = labelForm.queryLabels.join(':');
    return `q=+label:${labelPrams.toLowerCase()}+language:${langParams.toLowerCase()}+state:open&sort=created&order=desc`;
  };

  // FIXME フォームのタグ変更のタイミングで再描画されてしまう
  // FIXME API type errorをErrorBoundaryで処理
  const { data: issues = [] } = useQuery(
    [...langFormState.queryLangs, ...labelFormState.queryLabels],
    () => queryIssues(constructParams(langFormState, labelFormState))
  );

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
            <Box>
              <Button onClick={handleOnClick}>Search</Button>
            </Box>
          </Box>
          <IssueList issues={issueState.issues} />
        </main>
      </div>
    </ChakraProvider>
  );
};

export default App;
