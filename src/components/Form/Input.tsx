import styled from '@emotion/styled';
import React from 'react';
import { theme } from '~/util/theme';

type WrappedInputProps = React.ComponentPropsWithoutRef<'input'>;

export const WrappedInput = (props: WrappedInputProps) => <input {...props} />;

export const Input = styled(WrappedInput)`
  flex: 1 1 auto;
  font-family: ${theme.fonts.mono};
  font-size: 16px;
  border: 0;
  outline: none;
  padding: 4px;
  padding-left: 12px;
  border-radius: 4px;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  box-shadow: ${theme.shadows.box};
  transition: ${theme.transitions.shadow};

  ::placeholder {
    color: ${theme.colors.accent};
  }
  :focus {
    box-shadow: ${theme.shadows.borderBox};
  }
`;
