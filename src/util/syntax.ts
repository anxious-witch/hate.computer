import Prism from 'prismjs';

export const SupportedSyntax = {
  javascript: {
    grammar: Prism.languages.javascript,
    label: 'JavaScript',
  },
  typescript: {
    grammar: Prism.languages.typescript,
    label: 'TypeScript',
  },
  markup: {
    grammar: Prism.languages.markup,
    label: 'Markup',
  },
  python: {
    grammar: Prism.languages.python,
    label: 'Python',
  },
  css: {
    grammar: Prism.languages.css,
    label: 'CSS',
  },
  tsx: {
    grammar: Prism.languages.tsx,
    label: 'TSX',
  },
  jsx: {
    grammar: Prism.languages.jsx,
    label: 'JSX',
  },
};

export type Language = keyof typeof SupportedSyntax;

export type LabeledLanguage = {
  label: string;
  value: Language;
};

export type LanguageMap = LabeledLanguage[];
