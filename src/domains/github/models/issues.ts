export type User = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type Label = {
  url: string;
  name: string;
  color: string;
};

export type Issue = {
  repository_url: string;
  labels_url: string;
  html_url: string;
  title: string;
  user: User;
  label: Label[];
  state: "open" | "closed";
  created_at: string;
  updated_at: string;
  body: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isIssue = (args: any): args is Issue => {
  return (
    args !== null &&
    args !== undefined &&
    typeof args === "object" &&
    typeof args.html_url === "string"
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isIssues = (args: any): args is Issue[] => {
  return (
    args !== null &&
    args !== undefined &&
    typeof args === "object" &&
    typeof args.items[0].html_url === "string"
  );
};
