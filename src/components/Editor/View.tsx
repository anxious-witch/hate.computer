import React from 'react';
import { CommonStyles, getEditorTheme } from './util';
import styled from '@emotion/styled';

const StyledCode = styled.code`
  ${CommonStyles};
  color: #ddd;
  position: relative;

  pointer-events: none;
  z-index: 100;
  ${getEditorTheme()}
`;

interface ViewProps {
  content: string;
}
export const View = (props: ViewProps) => (
  <StyledCode
    className="editor-view"
    dangerouslySetInnerHTML={{ __html: props.content }}
  />
);
