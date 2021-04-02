import { Language } from './syntax';

export const sendPaste = (title: string, language: Language, body: string) => {
  return fetch('/api/paste', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      language,
      body,
    }),
  });
};

export const getPaste = (id: string) => {
  return fetch(`/api/paste/${id}`);
};
