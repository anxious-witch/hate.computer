import React from 'react';
import styled from '@emotion/styled';
import { Button, ClipboardButton, Input } from '~/components/Form';
import { Row } from '~/components/Layout';
import { Modal } from './Modal';

const StyledInput = styled(Input)`
  padding: 11px;
  flex: 1 1 auto;
`;

const StyledButton = styled(Button)`
  flex: 1 1 auto;
`;

interface EncryptModalProps {
  open: boolean;
  loading: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  pasteUrl?: string;
  passphrase: string;
  setPassphrase: (inputChange: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EncryptModal = (props: EncryptModalProps) => {
  if (!props.open) {
    return null;
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      props.handleSubmit();
    }
  };

  return (
    <Modal isOpen={props.open} onRequestClose={props.handleClose}>
      {props.pasteUrl ? (
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
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </Row>
          <Row>
            <StyledButton
              type="submit"
              onClick={props.handleSubmit}
              disabled={props.loading}
            >
              {'encrypt >'}
            </StyledButton>
          </Row>
        </React.Fragment>
      )}
    </Modal>
  );
};
