import type { AppProps } from 'next/app';
import React from 'react';
import { Reset } from '~/components/Reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Reset />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
