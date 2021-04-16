import React from 'react';
import { useRouter } from 'next/router';
import { Background, Row, Column, FlexSpacer } from '~/components/Layout';
import { getPaste } from '~/util/api';
import { Paste as PasteType } from '~/schemas/Paste';
import { DecryptModal } from '~/components/Modal';
import { decrypt } from '~/util/crypto';
import { Editor } from '~/components/Editor';
import { Language } from '~/util/syntax';
import { theme } from '~/util/theme';
import styled from '@emotion/styled';

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
  const [passphrase, setPassphrase] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [decrypted, setDecrypted] = React.useState(false);

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
        .then(json => setPaste(json));
    }
  }, [id, paste, router]);

  React.useEffect(() => {
    if (paste && !decrypted) {
      setModalOpen(true);
    }
  }, [paste, decrypted]);

  const handlePassphraseChange = (c: React.ChangeEvent<HTMLInputElement>) => {
    const value = c.target.value;
    if (value.length < 256) {
      setPassphrase(value);
    }
  };

  const handleModalSubmit = () => {
    setLoading(true);

    const plaintext = decrypt(paste.body, passphrase);
    const decryptedPaste = Object.assign({}, paste);
    decryptedPaste.body = plaintext;
    setPaste(decryptedPaste);

    setPassphrase('');
    setModalOpen(false);
    setLoading(false);
    setDecrypted(true);
  };

  const handleModalClose = () => {
    setModalOpen(true);
    setPassphrase('');
  };

  return (
    <Background fullHeight padding="32px">
      <DecryptModal
        open={modalOpen}
        loading={loading}
        handleClose={handleModalClose}
        handleSubmit={handleModalSubmit}
        setPassphrase={handlePassphraseChange}
        passphrase={passphrase}
      />
      {paste ? (
        <StyledColumn>
          <StyledRow padding="0 0px 24px 0px">
            <Header>{paste.title}</Header>
            <FlexSpacer />
            <Text>{paste.language}</Text>
          </StyledRow>
          <Editor
            language={paste.language as Language}
            content={paste.body}
            readonly
          />
        </StyledColumn>
      ) : null}
    </Background>
  );
};

export default Paste;
