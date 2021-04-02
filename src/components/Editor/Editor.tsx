import React from 'react';
import styled from '@emotion/styled';
import Prism from 'prismjs';
import { Container } from '~/components/Container';
import { Input } from './Input';
import { View } from './View';
import { theme } from '~/util/theme';

const StyledContainer = styled(Container)`
  position: relative;
  width: 100%;
  height: 800px;
  box-shadow: ${theme.shadows.box};
`;

export const Editor = () => {
  const [content, setContent] = React.useState('');
  const [htmlContent, setHtmlContent] = React.useState('');
  const [lineNumbers, setLineNumbers] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  React.useEffect(() => {
    const lineNumbers = content.split('\n').length;
    setLineNumbers(lineNumbers);

    const highlighted = Prism.highlight(
      content,
      Prism.languages.javascript,
      'javascript'
    );
    setHtmlContent(highlighted);
  }, [content]);

  return (
    <React.Fragment>
      {/* {lineNumbers} */}
      <StyledContainer>
        <Input handleChange={handleChange} content={content} />
        <View content={htmlContent} />
      </StyledContainer>
    </React.Fragment>
  );
};
