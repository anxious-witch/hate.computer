import React from 'react';
import { useRouter } from 'next/router';
import { Background, Row, Column, FlexSpacer } from '~/components/Layout';
import { getPaste } from '~/util/api';
import { Paste as PasteType } from '~/schemas/Paste';
import { DecryptModal } from '~/components/Modal';
import { decrypt } from '~/util/crypto';
import { Editor } from '~/components/Editor';
import { theme } from '~/util/theme';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { PasteForm, PassphraseForm } from '~/util/form';

const StyledColumn = styled(Column)`
  max-width: 1200px;
  margin: auto;
`;

const StyledRow = styled(Row)`
  align-items: center;
`;

const Header = styled.h1`
  color: ${theme.colors.purple};
  font-family: ${theme.fonts.mono};
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  color: ${theme.colors.accent};
  font-family: ${theme.fonts.mono};
  margin: 0;
  padding: 0;
`;

const Paste = () => {
  const router = useRouter();
  const { id } = router.query;
  const [paste, setPaste] = React.useState<PasteType>();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [decrypted, setDecrypted] = React.useState(false);

  const {
    control: pasteControl,
    register: pasteRegister,
    setValue: pasteSetValue,
  } = useForm<PasteForm>();

  const {
    register: passphraseRegister,
    handleSubmit: passphraseHandleSubmit,
    reset: passphraseReset,
  } = useForm<PassphraseForm>();

  React.useEffect(() => {
    if (id && !paste) {
      getPaste(id as string)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject('NOPE');
        })
        .catch(() => router.push('/404'))
        .then(setPaste);
    }
  }, [id, paste, router]);

  React.useEffect(() => {
    if (paste && !decrypted) {
      setModalOpen(true);
    }
  }, [paste, decrypted]);

  React.useEffect(() => {
    if (paste) {
      Object.keys(paste).forEach((k: keyof PasteForm) => {
        pasteSetValue(k, paste[k]);
      });
    }
  }, [paste, pasteSetValue]);

  const onSubmit = (data: PassphraseForm) => {
    setLoading(true);

    const plaintext = decrypt(paste.body, data.passphrase);
    pasteSetValue('body', plaintext);

    passphraseReset();
    setModalOpen(false);
    setLoading(false);
    setDecrypted(true);
  };

  const handleModalClose = () => {
    setModalOpen(true);
    passphraseReset();
  };

  return (
    <Background fullHeight padding="32px">
      <DecryptModal
        register={passphraseRegister}
        open={modalOpen}
        loading={loading}
        handleClose={handleModalClose}
        handleSubmit={passphraseHandleSubmit(onSubmit)}
      />
      {paste ? (
        <StyledColumn>
          <StyledRow padding="0 0px 24px 0px">
            <Header>{paste.title}</Header>
            <FlexSpacer />
            <Text>{paste.language.label}</Text>
          </StyledRow>
          <Editor control={pasteControl} register={pasteRegister} readOnly />
        </StyledColumn>
      ) : null}
    </Background>
  );
};

export default Paste;
