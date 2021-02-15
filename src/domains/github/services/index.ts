import ky from "ky";
import { Issue } from "../models/issues";
import { isIssues } from "../models/issues";

export const queryIssues = async (query: string): Promise<Issue[]> => {
  const response = await ky.get(
    `https://api.github.com/search/issues?${query}`
  );
  const data = (await response.json()) as unknown;
  console.log(data);

  if (!isIssues(data)) {
    throw Error("API type error");
  }

  return data.items;
};
