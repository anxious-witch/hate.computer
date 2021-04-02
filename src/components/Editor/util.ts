import { theme } from '~/util/theme';
import { Dracula } from '~/assets/editor/dracula';

export const CommonStyles = `
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  margin: 0;
  padding: 8px 12px;
  border-radius: ${theme.borders.radius};

  font-family: "${theme.fonts.mono}";
  overflow-wrap: break-word;
  word-break: break-all;
  hyphens: auto;
  white-space: break-spaces;

  ::selection {
    background-color: ${theme.colors.accent};
  }
`;

export const getEditorTheme = (): string => {
  return Dracula;
};
