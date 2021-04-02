import React from 'react';
import { Row, Column, Container, FlexSpacer } from '~/components/Layout';
import { Editor } from '~/components/Editor/index';
import {
  Language,
  LanguageMap,
  LabeledLanguage,
  SupportedSyntax,
} from '~/util/syntax';
import { Title, Select } from '~/components/Form';
import styled from '@emotion/styled';
import { theme } from '~/util/theme';

const StyledContainer = styled(Container)`
  background-color: ${theme.colors.backgroundLight};
  min-height: 100vh;
`;

const StyledColumn = styled(Column)`
  max-width: 1200px;
  margin: auto;
`;

const Index = () => {
  const [language, setLanguage] = React.useState<Language>('typescript');
  const [title, setTitle] = React.useState('');
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
    setTitle(value);
  };

  return (
    <StyledContainer fullHeight padding="32px">
      <StyledColumn>
        <Row padding="0 0px 24px 0px">
          <Title
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
        <Editor language={language} />
      </StyledColumn>
    </StyledContainer>
  );
};

export default Index;
