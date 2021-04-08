export const buildPasteUrl = (pasteId: string): string => {
  if (typeof window !== undefined) {
    return `${window.location.origin}/paste/${pasteId}`;
  } else {
    return `https://hate.computer/paste/${pasteId}`;
  }
};
