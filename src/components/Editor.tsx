import React from 'react';
import styled from '@emotion/styled';
import { Container } from '~/components/Container';
import '@fontsource/fira-mono';
import Prism from 'prismjs';

type WrappedTextAreaProps = React.ComponentPropsWithoutRef<'textarea'>;

const styles = `
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  margin: 4px;
  padding: 8px;
  width: 720px;
  height: 640px;
  font-family: "Fira Mono";
  border-radius: 4px;
  overflow-wrap: break-word;
  word-break: break-all;
  hyphens: auto;
  white-space: break-spaces;

  ::selection {
    background-color: #bd93f9;
  }
`;

const StyledPre = styled.pre`
  ${styles};
  color: #ddd;

  pointer-events: none;
  z-index: 100;

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6272a4;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #bd93f9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #50fa7b;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #f1fa8c;
  }

  .token.keyword {
    color: #8be9fd;
  }

  .token.regex,
  .token.important {
    color: #ffb86c;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
`;

const StyledTextArea = styled.textarea`
  ${styles};
  resize: none;
  color: transparent;
  caret-color: #fff;
  background: #282a36;
  outline: none;
`;

const WrappedTextArea = (props: WrappedTextAreaProps) => {
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
      {lineNumbers}
      <StyledContainer>
        <StyledTextArea
          onChange={handleChange}
          value={content}
          {...props}
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          spellCheck="false"
        />
        <StyledPre dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </StyledContainer>
    </React.Fragment>
  );
};

export const Editor = styled(WrappedTextArea)``;
