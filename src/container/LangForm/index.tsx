import React from 'react';
import { QueryFormPresenter } from '../../components/Form/index';
import { useDispatch, useSelector } from 'react-redux';
import { isQueryLang } from '../../features/queryLang';
import { QueryLangState, QueryLang } from '../../features/queryLang';
import { queryLangSlice } from '../../features/queryLang';
import { RootState } from '../../features/root';

export type LangFormProps = {
  label: string;
  queryDataList: readonly QueryLang[];
};

export const LangForm: React.FC<LangFormProps> = ({ label, queryDataList }) => {
  const queryLang = useSelector<RootState, QueryLangState>(
    (state) => state.queryLang
  );
  const queryLangs = queryLang.queryLangs;
  const dispatch = useDispatch();

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    if (event.which !== 13) {
      return;
    } else {
      if (isQueryLang(input)) {
        if (queryLangs.includes(input)) {
          return;
        } else if (queryDataList.includes(input)) {
          dispatch(queryLangSlice.actions.add(input));
        }
      }
    }
    event.currentTarget.value = '';
  };

  return (
    <QueryFormPresenter
      label={label}
      queryDataList={queryDataList}
      queryTags={queryLangs}
      handleOnKeyPress={handleOnKeyPress}
      slice={queryLangSlice}
    />
  );
};
