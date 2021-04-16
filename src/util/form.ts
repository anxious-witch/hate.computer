import { Paste } from '~/schemas/Paste';

export type PasteForm = Pick<Paste, 'title' | 'body' | 'language'>;
export type PassphraseForm = Pick<Paste, 'passphrase'>;
export type Form = PasteForm & PassphraseForm;

export const buildPasteUrl = (pasteId: string): string => {
  if (typeof window !== undefined) {
    return `${window.location.origin}/paste/${pasteId}`;
  } else {
    return `https://hate.computer/paste/${pasteId}`;
  }
};
