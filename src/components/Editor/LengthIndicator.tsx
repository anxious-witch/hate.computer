import styled from '@emotion/styled';
import React from 'react';
import { theme } from '~/util/theme';

const StyledSpan = styled.span`
  position: absolute;
  right: 12px;
  bottom: 16px;

  z-index: 200;
  font-family: ${theme.fonts.mono};
  font-size: 12px;
  color: ${theme.colors.primary};
`;

interface LengthIndicatorProps {
  content: string;
}
export const LengthIndicator = (props: LengthIndicatorProps) => (
  <StyledSpan>{props.content.length} / 10240</StyledSpan>
);
