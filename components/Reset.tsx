import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalized from 'emotion-normalize';

export const Reset = () => (
  <Global
    styles={css`
      ${emotionNormalized}
      body: {
        height: 100vh;
      }
    `}
  />
);
