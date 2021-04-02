import React from 'react';
import { Container } from '~/components/Container';
import { Editor } from '~/components/Editor/index';
import { Language } from '~/util/syntax';

const Index = () => {
  const [language, setLanguage] = React.useState<Language>('typescript');

  const handleChange = (c: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = c.target.value as Language;
    setLanguage(selectedLanguage);
  };

  return (
    <Container fullHeight padding="32px" flex="column">
      <select onChange={handleChange}>
        <option value="css">css</option>
        <option value="markup">markup</option>
        <option value="typescript">typescript</option>
        <option value="python">python</option>
        <option value="tsx">tsx</option>
      </select>
      <Editor language={language} />
    </Container>
  );
};

export default Index;
