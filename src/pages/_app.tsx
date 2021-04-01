import type { AppProps } from 'next/app';
import React from 'react';
import { Reset } from '~/components/Reset';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Reset />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
