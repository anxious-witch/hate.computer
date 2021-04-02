import React from 'react';
import { CommonStyles, getEditorTheme } from './util';
import styled from '@emotion/styled';

const StyledPre = styled.pre`
  ${CommonStyles};
  color: #ddd;

  pointer-events: none;
  z-index: 100;
  ${getEditorTheme()}
`;

interface ViewProps {
  content: string;
}
export const View = (props: ViewProps) => (
  <StyledPre
    className="editor-view"
    dangerouslySetInnerHTML={{ __html: props.content }}
  />
);
