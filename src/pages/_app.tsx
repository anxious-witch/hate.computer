import type { AppProps } from 'next/app';
import React from 'react';
import { Reset } from '~/components/Reset';
import '@fontsource/fira-mono';
import '@fontsource/open-sans';
import '@fontsource/poppins';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Reset />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
