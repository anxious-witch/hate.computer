import React from 'react';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import { theme } from '~/util/theme';
import { Button, ClipboardButton, Input } from '~/components/Form';
import { Row } from './Layout';

ReactModal.setAppElement('#__next');

type WrappedModalProps = ReactModal.Props & {
  className?: string;
};
const WrappedModal = ({ className, ...rest }: WrappedModalProps) => {
  // I'm never using react-modal again
  const contentClass = `${className}__content`;
  const backdropClass = `${className}__backdrop`;
  return (
    <ReactModal
      portalClassName={className}
      className={contentClass}
      overlayClassName={backdropClass}
      {...rest}
    />
  );
};

const StyledModal = styled(WrappedModal)`
  &__backdrop {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(40, 42, 54, 0.7);
    z-index: 500;
  }

  &__content {
    position: absolute;
    top: 200px;
    left: 50%;
    min-width: 400px;
    transform: translate(-50%, 0);

    padding: 24px;
    z-index: 1000;
    outline: none;

    border-radius: ${theme.borders.radius};
    background: ${theme.colors.backgroundLight};
    font-family: ${theme.fonts.mono};
    color: ${theme.colors.text};
    box-shadow: ${theme.shadows.box};
  }
`;

const StyledInput = styled(Input)`
  padding: 11px;
  flex: 1 1 auto;
`;

const StyledButton = styled(Button)`
  flex: 1 1 auto;
`;

interface ModalProps {
  open: boolean;
  loading: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  mode: 'decrypt' | 'encrypt';
  pasteUrl?: string;
  passphrase: string;
  setPassphrase: (inputChange: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordModal = (props: ModalProps) => {
  if (!props.open) {
    return null;
  }

  return (
    <StyledModal isOpen={props.open} onRequestClose={props.handleClose}>
      {props.pasteUrl && props.mode === 'encrypt' ? (
        <React.Fragment>
          <Row>
            <StyledInput value={props.pasteUrl} readOnly={true} />
            <ClipboardButton value={props.pasteUrl} />
          </Row>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Row>
            <StyledInput
              type="password"
              placeholder="passphrase"
              onChange={props.setPassphrase}
              value={props.passphrase}
            />
          </Row>
          <Row>
            <StyledButton
              type="submit"
              onClick={props.handleSubmit}
              disabled={props.loading}
            >
              {props.mode} {'>'}
            </StyledButton>
          </Row>
        </React.Fragment>
      )}
    </StyledModal>
  );
};
