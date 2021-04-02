import styled from '@emotion/styled';
import React from 'react';
import { theme } from '~/util/theme';

type WrappedButtonProps = React.ComponentPropsWithRef<'button'>;

const WrappedButton = (props: WrappedButtonProps) => <button {...props} />;

export const Button = styled(WrappedButton)`
  height: 42px;
  width: 180px;
  align-self: flex-start;
  margin-top: 24px;
  border: 0;
  outline: none;
  cursor: pointer;

  background-image: ${theme.gradients.pink};
  background-size: 200% auto;
  background-position: left center;

  transition: ${theme.transitions.background};

  color: ${theme.colors.text};
  box-shadow: ${theme.shadows.box};

  border-radius: ${theme.borders.radius};
  font-family: ${theme.fonts.mono};
  text-transform: lowercase;

  :hover {
    background-position: right center;
  }
`;
