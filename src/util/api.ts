import { encrypt } from './crypto';
import { Language } from './syntax';

export const sendPaste = (
  title: string,
  language: Language,
  content: string,
  passphrase: string
) => {
  const body = encrypt(content, passphrase);

  return fetch('/api/paste', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      language,
      body,
      encrypted: true,
    }),
  });
};

export const getPaste = (id: string) => {
  return fetch(`/api/paste/${id}`);
};
