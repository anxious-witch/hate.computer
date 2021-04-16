import Prism from 'prismjs';

export const SupportedSyntax = {
  bash: {
    grammar: Prism.languages.bash,
    label: 'bash / shell',
  },
  c: {
    grammar: Prism.languages.c,
    label: 'C',
  },
  cpp: {
    grammar: Prism.languages.cpp,
    label: 'C++',
  },
  csharp: {
    grammar: Prism.languages.csharp,
    label: 'C#',
  },
  css: {
    grammar: Prism.languages.css,
    label: 'CSS',
  },
  diff: {
    grammar: Prism.languages.diff,
    label: 'Diff',
  },
  elixir: {
    grammar: Prism.languages.elixir,
    label: 'Elixir',
  },
  erlang: {
    grammar: Prism.languages.erlang,
    label: 'Erlang',
  },
  go: {
    grammar: Prism.languages.go,
    label: 'Go',
  },
  haskell: {
    grammar: Prism.languages.haskell,
    label: 'Haskell',
  },
  java: {
    grammar: Prism.languages.java,
    label: 'Java',
  },
  javascript: {
    grammar: Prism.languages.javascript,
    label: 'JavaScript',
  },
  json: {
    grammar: Prism.languages.json,
    label: 'JSON',
  },
  jsx: {
    grammar: Prism.languages.jsx,
    label: 'JSX',
  },
  julia: {
    grammar: Prism.languages.julia,
    label: 'Julia',
  },
  kotlin: {
    grammar: Prism.languages.kotlin,
    label: 'Kotlin',
  },
  latex: {
    grammar: Prism.languages.latex,
    label: 'LaTeX',
  },
  lua: {
    grammar: Prism.languages.lua,
    label: 'Lua',
  },
  markdown: {
    grammar: Prism.languages.markdown,
    label: 'Markdown',
  },
  markup: {
    grammar: Prism.languages.markup,
    label: 'Markup',
  },
  ocaml: {
    grammar: Prism.languages.ocaml,
    label: 'OCaml',
  },
  php: {
    grammar: Prism.languages.php,
    label: 'PHP',
  },
  python: {
    grammar: Prism.languages.python,
    label: 'Python',
  },
  r: {
    grammar: Prism.languages.r,
    label: 'R',
  },
  ruby: {
    grammar: Prism.languages.ruby,
    label: 'Ruby',
  },
  rust: {
    grammar: Prism.languages.rust,
    label: 'Rust',
  },
  scala: {
    grammar: Prism.languages.scala,
    label: 'Scala',
  },
  scheme: {
    grammar: Prism.languages.scheme,
    label: 'Scheme',
  },
  smalltalk: {
    grammar: Prism.languages.smalltalk,
    label: 'Smalltalk',
  },
  sql: {
    grammar: Prism.languages.sql,
    label: 'SQL',
  },
  swift: {
    grammar: Prism.languages.swift,
    label: 'Swift',
  },

  toml: {
    grammar: Prism.languages.toml,
    label: 'TOML',
  },
  tsx: {
    grammar: Prism.languages.tsx,
    label: 'TSX',
  },
  typescript: {
    grammar: Prism.languages.typescript,
    label: 'TypeScript',
  },
  vb: {
    grammar: Prism.languages.vb,
    label: 'Visual Basic',
  },
  yaml: {
    grammar: Prism.languages.yaml,
    label: 'YAML',
  },
};

export type Language = keyof typeof SupportedSyntax;

export type LabeledLanguage = {
  label: string;
  value: Language;
};

export type LanguageMap = LabeledLanguage[];
