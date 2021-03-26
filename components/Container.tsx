import React from 'react';
import styled from '@emotion/styled';

interface WrappedContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  fullHeight?: boolean;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
}

const WrappedContainer = ({
  children,
  fullHeight,
  backgroundColor,
  padding,
  margin,
  ...rest
}: WrappedContainerProps) => <div {...rest}>{children}</div>;

export const Container = styled(WrappedContainer)`
  display: flex;
  ${props => props.fullHeight && 'height: 100%'};
  ${props =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
`;
