import React from "react";
import { QueryFormPresenter } from "../../components/Form/index";
import { constants } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { QueryLangState, QueryLang } from "../../features/queryLang";
import { queryLangSlice } from "../../features/queryLang";
import { RootState } from "../../features/root";

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
    if (isQueryLang(input)) {
      if (queryLangs.includes(input)) {
        return;
      }
      if (queryDataList.filter((lang) => lang === input)) {
        return;
      }
      if (event.which === 13) {
        dispatch(queryLangSlice.actions.add(input));
      }
    }
    event.currentTarget.value = "";
  };

  return (
    <QueryFormPresenter
      label={label}
      queryDataList={queryDataList}
      queryTags={queryLangs}
      handleOnKeyPress={handleOnKeyPress}
    />
  );
};

export const isQueryLang = (arg: string): arg is QueryLang => {
  return ((constants.searchFilters.languages as unknown) as string[]).includes(
    arg
  );
};
