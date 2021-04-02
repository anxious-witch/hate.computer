import styled from '@emotion/styled';
import React from 'react';
import ReactSelect, { StylesConfig, GroupTypeBase } from 'react-select';
import { theme } from '~/util/theme';
import { LabeledLanguage } from '~/util/syntax';

const SelectStyles: StylesConfig<
  LabeledLanguage,
  false,
  GroupTypeBase<LabeledLanguage>
> = {
  input: base => ({
    ...base,
    color: theme.colors.text,
    border: 0,
  }),
  container: base => ({
    ...base,
    border: 0,
    background: theme.colors.background,
    boxShadow: theme.shadows.box,
  }),
  control: base => ({
    ...base,
    background: 'transparent',
    border: 0,
    transition: theme.transitions.shadow,
    ':focus-within': {
      boxShadow: theme.shadows.border,
    },
  }),
  singleValue: base => ({
    ...base,
    color: theme.colors.text,
  }),
};

type WrappedSelectProps = React.ComponentPropsWithoutRef<typeof ReactSelect>;

const WrappedSelect = (props: WrappedSelectProps) => {
  return (
    <ReactSelect
      {...props}
      instanceId="language-select"
      styles={SelectStyles}
    />
  );
};
export const Select = styled(WrappedSelect)`
  width: 240px;
  font-family: ${theme.fonts.mono};
`;
