import React from 'react';
import { Row, Column, FlexSpacer, Background } from '~/components/Layout';
import { Editor } from '~/components/Editor/index';
import {
  Language,
  LanguageMap,
  LabeledLanguage,
  SupportedSyntax,
} from '~/util/syntax';
import { Input, Select, Button } from '~/components/Form';
import styled from '@emotion/styled';
import { sendPaste } from '~/util/api';
import { EncryptModal } from '~/components/Modal';
import { buildPasteUrl } from '~/util/helpers';

const StyledColumn = styled(Column)`
  max-width: 1200px;
  margin: auto;
`;

const Index = () => {
  const [editorContent, setEditorContent] = React.useState('');
  const [language, setLanguage] = React.useState<Language>('typescript');
  const [title, setTitle] = React.useState('');
  const [passphrase, setPassphrase] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [pasteUrl, setPasteUrl] = React.useState('');

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

  const handleSelectChange = (value: LabeledLanguage) => {
    setLanguage(value.value);
  };

  const handleTitleChange = (c: React.ChangeEvent<HTMLInputElement>) => {
    const value = c.target.value;
    if (value.length < 256) {
      setTitle(value);
    }
  };

  const handleEditorChange = (c: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = c.target.value;
    if (value.length < 10240) {
      setEditorContent(value);
    }
  };

  const handlePassphraseChange = (c: React.ChangeEvent<HTMLInputElement>) => {
    const value = c.target.value;
    if (value.length < 256) {
      setPassphrase(value);
    }
  };

  const handleSubmit = () => {
    if (title.length === 0) {
      return;
    }

    if (language.length === 0) {
      return;
    }

    if (editorContent.length === 0) {
      return;
    }
    setModalOpen(true);
  };

  const handleModalSubmit = () => {
    setLoading(true);

    sendPaste(title, language, editorContent, passphrase)
      .then(res => {
        return res.json();
      })
      .then(json => {
        const id = json['_id'];
        setPasteUrl(buildPasteUrl(id));
        setLoading(false);
      });
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setPasteUrl('');
    setPassphrase('');
  };

  return (
    <Background fullHeight padding="32px">
      <StyledColumn>
        <Row padding="0 0px 24px 0px">
          <Input
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />
          <FlexSpacer />
          <Select
            onChange={handleSelectChange}
            options={languages}
            defaultValue={{
              value: language,
              label: 'TypeScript',
            }}
          />
        </Row>
        <Editor
          language={language}
          handleChange={handleEditorChange}
          content={editorContent}
        />
        <Button type="submit" onClick={handleSubmit}>
          Paste {'>'}
        </Button>
      </StyledColumn>
      <EncryptModal
        open={modalOpen}
        loading={loading}
        handleClose={handleModalClose}
        handleSubmit={handleModalSubmit}
        setPassphrase={handlePassphraseChange}
        passphrase={passphrase}
        pasteUrl={pasteUrl}
      />
    </Background>
  );
};

export default Index;
