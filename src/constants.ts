import { Tag } from '@chakra-ui/react';
import { ComponentProps } from 'react';

export const labels = [
  'bug',
  'critical',
  'easy',
  'enhancement',
  'difficulty: easy',
  'difficulty: medium',
  'difficulty: hard',
  'discussion',
  'documentation',
  'feature',
  'first-timers-only',
  'good first issue',
  'hard',
  'help wanted',
  'jump-in',
  'new feature',
  'priority: low',
  'priority: medium',
  'priority: high',
  'prs welcome',
  'question',
  'up for grabs',
  'urgent',
] as const;

export const constants = {
  projectInfo: {
    gitHubURL: 'https://github.com/kynefuk/good-first-issue',
  },
  searchFilters: {
    languages: [
      'ActionScript',
      'Arduino',
      'ASP',
      'C',
      'C++',
      'C#',
      'Clojure',
      'ClojureScript',
      'CSS',
      'CoffeeScript',
      'Elm',
      'Elixir',
      'Emacs Lisp',
      'Erlang',
      'Fortran',
      'Go',
      'Groovy',
      'Haskell',
      'HTML',
      'Java',
      'JavaScript',
      'Lisp',
      'Lua',
      'Makefile',
      'Matlab',
      'Objective-C',
      'OCaml',
      'Pascal',
      'Perl',
      'PHP',
      'PowerShell',
      'Puppet',
      'Python',
      'R',
      'Ruby',
      'Rust',
      'Scala',
      'Shell',
      'SQL',
      'Swift',
      'TeX',
      'TypeScript',
      'VimL',
      'Visual Basic',
    ] as const,
    labels: labels,
  },
};

export type ArrayToUnion<T extends readonly any[]> = T[number];
export type IssueTagLabelUnion = ArrayToUnion<typeof labels>;

export type IssueTagColorSchemeType = Pick<
  ComponentProps<typeof Tag>,
  'colorScheme'
>;

export type ValueOf<T> = T[keyof T];

export type IssueTagColorUnion = ValueOf<IssueTagColorSchemeType>;

export type TagLabelColorType = {
  [K in IssueTagLabelUnion]: IssueTagColorUnion;
};

export const labelColor = {
  bug: 'pink',
  critical: 'red',
  easy: 'blue',
  enhancement: 'green',
  'difficulty: easy': 'green',
  'difficulty: medium': 'orange',
  'difficulty: hard': 'red',
  discussion: 'whiteAlpha',
  documentation: 'whiteAlpha',
  feature: 'facebook',
  'first-timers-only': 'cyan',
  'good first issue': 'twitter',
  hard: 'red',
  'help wanted': 'telegram',
  'jump-in': 'whatsapp',
  'new feature': 'blackAlpha',
  'priority: low': 'green',
  'priority: medium': 'orange',
  'priority: high': 'red',
  'prs welcome': 'cyan',
  question: 'purple',
  'up for grabs': 'teal',
  urgent: 'red',
} as const;
