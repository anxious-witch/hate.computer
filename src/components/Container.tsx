import React from 'react';
import styled from '@emotion/styled';

interface WrappedContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  fullHeight?: boolean;
  padding?: string;
  margin?: string;
  flex?: 'row' | 'column';
}

const WrappedContainer = ({
  children,
  fullHeight,
  padding,
  margin,
  flex,
  ...rest
}: WrappedContainerProps) => <div {...rest}>{children}</div>;

export const Container = styled(WrappedContainer)`
  display: flex;
  flex-direction: ${props => props.flex === 'column' && 'column'};
  ${props => props.fullHeight && 'height: 100%'};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
`;
