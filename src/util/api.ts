import { encrypt } from './crypto';
import { Form } from './form';

export const sendPaste = (data: Form) => {
  const body = encrypt(data.body, data.passphrase);

  return fetch('/api/paste', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: data.title,
      language: data.language,
      body,
      encrypted: true,
    }),
  });
};

export const getPaste = (id: string) => {
  return fetch(`/api/paste/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
