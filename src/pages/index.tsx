import React from 'react';
import { Row, Column, FlexSpacer, Background } from '~/components/Layout';
import { Editor } from '~/components/Editor/index';
import { Language, LanguageMap, SupportedSyntax } from '~/util/syntax';
import { Input, Select, Button } from '~/components/Form';
import styled from '@emotion/styled';
import { sendPaste } from '~/util/api';
import { EncryptModal, ClipboardModal } from '~/components/Modal';
import { buildPasteUrl, PassphraseForm, PasteForm } from '~/util/form';
import { useForm, Controller } from 'react-hook-form';

const StyledColumn = styled(Column)`
  max-width: 1200px;
  margin: auto;
`;

const Index = () => {
  const [encryptModalOpen, setEncryptModalOpen] = React.useState(false);
  const [clipboardModalOpen, setClipboardModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [pasteUrl, setPasteUrl] = React.useState('');

  const {
    register: pasteRegister,
    control: pasteControl,
    handleSubmit: pasteHandleSubmit,
    getValues: pasteGetValues,
  } = useForm<PasteForm>();

  const {
    register: passphraseRegister,
    handleSubmit: passphraseHandleSubmit,
    reset: passphraseReset,
  } = useForm<PassphraseForm>();

  const languages = Object.keys(SupportedSyntax)
    .map((key: Language) => {
      return {
        label: SupportedSyntax[key].label,
        value: key,
      };
    })
    .sort((a, b) => {
      return a.label.localeCompare(b.label);
    }) as LanguageMap;

  const onSubmit = () => {
    console.log(pasteGetValues());
    setEncryptModalOpen(true);
  };

  const onModalSubmit = (data: PassphraseForm) => {
    const form = { ...data, ...pasteGetValues() };
    setLoading(true);

    sendPaste(form)
      .then(res => {
        return res.json();
      })
      .then(json => {
        const id = json['_id'];
        setPasteUrl(buildPasteUrl(id));
        setLoading(false);
        setClipboardModalOpen(true);
        setEncryptModalOpen(false);
      });
  };

  const handleModalClose = () => {
    setEncryptModalOpen(false);
    setClipboardModalOpen(false);
    passphraseReset();
  };

  return (
    <Background fullHeight padding="32px">
      <StyledColumn>
        <Row padding="0 0px 24px 0px">
          <Input
            placeholder="Title"
            {...pasteRegister('title', { required: true, maxLength: 256 })}
          />
          <FlexSpacer />
          <Controller
            control={pasteControl}
            name="language"
            rules={{ required: true }}
            render={({ field }) => <Select {...field} options={languages} />}
          />
        </Row>
        <Editor control={pasteControl} register={pasteRegister} />
        <Button type="submit" onClick={pasteHandleSubmit(onSubmit)}>
          Paste {'>'}
        </Button>
      </StyledColumn>
      <EncryptModal
        open={encryptModalOpen}
        loading={loading}
        handleClose={handleModalClose}
        handleSubmit={passphraseHandleSubmit(onModalSubmit)}
        register={passphraseRegister}
      />
      <ClipboardModal
        open={clipboardModalOpen}
        pasteUrl={pasteUrl}
        handleClose={handleModalClose}
      />
    </Background>
  );
};

export default Index;
