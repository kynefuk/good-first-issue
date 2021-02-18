import React from "react";
import { QueryFormPresenter } from "../../components/Form/index";
import { useDispatch, useSelector } from "react-redux";
import { isQueryLabel } from "../../features/queryLabel";
import { QueryLabelState, QueryLabel } from "../../features/queryLabel";
import { queryLabelSlice } from "../../features/queryLabel";
import { RootState } from "../../features/root";

export type LabelFormProps = {
  label: string;
  queryDataList: readonly QueryLabel[];
};

export const LabelForm: React.FC<LabelFormProps> = ({
  label,
  queryDataList,
}) => {
  const queryLabel = useSelector<RootState, QueryLabelState>(
    (state) => state.queryLabel
  );
  const queryLabels = queryLabel.queryLabels;
  const dispatch = useDispatch();

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    if (event.which !== 13) {
      return;
    } else {
      if (isQueryLabel(input)) {
        if (queryLabels.includes(input)) {
          return;
        } else if (queryDataList.includes(input)) {
          dispatch(queryLabelSlice.actions.add(input));
        }
      }
    }
    event.currentTarget.value = "";
  };

  return (
    <QueryFormPresenter
      label={label}
      queryDataList={queryDataList}
      queryTags={queryLabels}
      handleOnKeyPress={handleOnKeyPress}
      slice={queryLabelSlice}
    />
  );
};
