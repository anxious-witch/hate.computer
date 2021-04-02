import { theme } from '~/util/theme';
import { Dracula } from '~/assets/editor/dracula';

export const CommonStyles = `
  display: block;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  border: 0;
  margin: 0;
  padding: 8px 12px;
  min-height: 48px;
  border-radius: ${theme.borders.radius};
  overflow: hidden;

  font-family: "${theme.fonts.mono}";
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-break: keep-all;

  ::selection {
    background-color: ${theme.colors.accent};
  }
`;

export const getEditorTheme = (): string => {
  return Dracula;
};
