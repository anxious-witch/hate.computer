import React from 'react';
import { Row, Column, Container, FlexSpacer } from '~/components/Layout';
import { Editor } from '~/components/Editor/index';
import { Language } from '~/util/syntax';

const Index = () => {
  const [language, setLanguage] = React.useState<Language>('typescript');

  const handleChange = (c: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = c.target.value as Language;
    setLanguage(selectedLanguage);
  };

  return (
    <Container fullHeight padding="32px">
      <Column>
        <Row padding="0 0 16px 0">
          <input placeholder="Title" />
          <FlexSpacer />
          <select onChange={handleChange}>
            <option value="css">css</option>
            <option value="markup">markup</option>
            <option value="typescript">typescript</option>
            <option value="python">python</option>
            <option value="tsx">tsx</option>
          </select>
        </Row>
        <Editor language={language} />
      </Column>
    </Container>
  );
};

export default Index;
