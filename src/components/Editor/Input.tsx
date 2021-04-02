import React from 'react';
import styled from '@emotion/styled';
import { CommonStyles, getEditorTheme } from './util';

const StyledTextArea = styled.textarea`
  ${CommonStyles};
  resize: none;
  outline: none;
  ${getEditorTheme()}
`;

interface InputProps {
  content: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const Input = (props: InputProps) => {
  return (
    <StyledTextArea
      className="editor-input"
      onChange={props.handleChange}
      value={props.content}
      autoCapitalize="false"
      autoComplete="false"
      autoCorrect="false"
      spellCheck="false"
    />
  );
};
