import React from 'react';
import styled from '@emotion/styled';
import Prism from 'prismjs';
import { Input } from './Input';
import { View } from './View';
import { theme } from '~/util/theme';
import { Container } from '~/components/Layout';
import { SupportedSyntax, Language } from '~/util/syntax';
import { LengthIndicator } from './LengthIndicator';

const Wrapper = styled(Container)`
  min-height: 400px;
  max-height: 80vh;
  overflow: auto;
  box-shadow: ${theme.shadows.box};
  border-radius: ${theme.borders.radius};
  transition: ${theme.transitions.shadow};

  &:focus-within {
    box-shadow: ${theme.shadows.borderBox};
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  width: 100%;
  min-height: 400px;
  overflow: hidden;
`;

interface EditorProps {
  readonly?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  language: Language;
  content: string;
}
export const Editor = ({
  readonly,
  language,
  handleChange,
  content,
}: EditorProps) => {
  const [htmlContent, setHtmlContent] = React.useState('');

  React.useEffect(() => {
    const highlighted =
      Prism.highlight(content, SupportedSyntax[language].grammar, language) +
      '<br />';
    setHtmlContent(highlighted);
  }, [content, language]);

  return (
    <Wrapper>
      <StyledContainer>
        <LengthIndicator content={content} />
        <Input
          handleChange={handleChange}
          content={content}
          readonly={readonly}
        />
        <View content={htmlContent} />
      </StyledContainer>
    </Wrapper>
  );
};
