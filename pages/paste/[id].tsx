import { useRouter } from 'next/router';

const Paste = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>paste: {id}</p>
    </div>
  );
};

export default Paste;
