import Prism from 'prismjs';

export const SupportedSyntax = {
  javascript: Prism.languages.javascript,
  typescript: Prism.languages.typescript,
  markup: Prism.languages.markup,
  python: Prism.languages.python,
  css: Prism.languages.css,
  tsx: Prism.languages.tsx,
};

export type Language = keyof typeof SupportedSyntax;
