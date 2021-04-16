import React from 'react';
import styled from '@emotion/styled';
import { CommonStyles, getEditorTheme } from './util';

type WrappedTextAreaProps = React.ComponentPropsWithRef<'textarea'>;

// eslint-disable-next-line react/display-name
const WrappedTextArea = React.forwardRef<
  HTMLTextAreaElement,
  WrappedTextAreaProps
>(
  (
    props: WrappedTextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => (
    <textarea
      {...props}
      ref={ref}
      placeholder="Code goes here"
      className={`editor-input ${props.className}`}
      autoCapitalize="false"
      autoComplete="false"
      autoCorrect="false"
      spellCheck="false"
    />
  )
);

export const Input = styled(WrappedTextArea)`
  ${CommonStyles};
  resize: none;
  outline: none;
  height: 100%;
  ${getEditorTheme()}
`;
