import React from 'react';
import { useRouter } from 'next/router';
import { Background } from '~/components/Layout';

const Paste = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.query);

  return (
    <Background fullHeight padding="32px">
      paste: {id}
    </Background>
  );
};

export default Paste;
