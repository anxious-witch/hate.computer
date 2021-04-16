import React from 'react';
import styled from '@emotion/styled';
import Prism from 'prismjs';
import { Input } from './Input';
import { View } from './View';
import { theme } from '~/util/theme';
import { Container } from '~/components/Layout';
import { SupportedSyntax } from '~/util/syntax';
import { LengthIndicator } from './LengthIndicator';
import { Control, UseFormRegister, useWatch } from 'react-hook-form';
import { PasteForm } from '~/util/form';

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
  readOnly?: boolean;
  register: UseFormRegister<PasteForm>;
  control: Control<PasteForm>;
}
export const Editor = ({ readOnly, register, control }: EditorProps) => {
  const [htmlContent, setHtmlContent] = React.useState('');

  const content = useWatch({
    control,
    name: 'body',
    defaultValue: '',
  });

  const language = useWatch({
    control,
    name: 'language',
    defaultValue: {
      label: 'Diff',
      value: 'diff',
    },
  });

  React.useEffect(() => {
    const highlighted =
      Prism.highlight(
        content,
        SupportedSyntax[language.value].grammar,
        language.value
      ) + '<br />';
    setHtmlContent(highlighted);
  }, [content, language]);

  return (
    <Wrapper>
      <StyledContainer>
        <LengthIndicator content={content} />
        <Input
          readOnly={readOnly}
          {...register('body', { required: true, maxLength: 10240 })}
        />
        <View content={htmlContent} />
      </StyledContainer>
    </Wrapper>
  );
};
