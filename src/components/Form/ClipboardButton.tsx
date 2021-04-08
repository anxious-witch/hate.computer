import styled from '@emotion/styled';
import React from 'react';
import { theme } from '~/util/theme';

type WrappedButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  value: string;
};

const WrappedButton = ({ value, ...rest }: WrappedButtonProps) => {
  const [copied, setCopied] = React.useState(false);

  const setClipboard = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(value).then(() => setCopied(true));
    }
  };

  return (
    <button {...rest} onClick={setClipboard}>
      {copied ? 'copied' : 'copy'}
    </button>
  );
};

export const ClipboardButton = styled(WrappedButton)`
  border: 0;
  outline: none;
  cursor: pointer;

  margin-left: 8px;

  background-image: ${theme.gradients.pink};
  background-size: 200% auto;
  background-position: left center;

  border-radius: ${theme.borders.radius};
  transition: ${theme.transitions.background};

  color: ${theme.colors.text};
  box-shadow: ${theme.shadows.box};

  :hover {
    background-position: right center;
  }
`;
