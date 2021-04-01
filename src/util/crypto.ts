import {
  randomBytes,
  pbkdf2Sync,
  createCipheriv,
  createDecipheriv,
} from 'crypto';

const SALT_BYTES = 16;
const IV_BYTES = 16;
const ITERATIONS = 10000;
const KEY_LENGTH = 32;
const KEY_ALGO = 'sha256';
const CIPHER_ALGO = 'aes-256-gcm';

export const encrypt = (plaintext: string, passphrase: string): string => {
  // Generate random salt and iv
  const salt = randomBytes(SALT_BYTES);
  const iv = randomBytes(IV_BYTES);

  // Create the key and decipher
  const key = pbkdf2Sync(passphrase, salt, ITERATIONS, KEY_LENGTH, KEY_ALGO);
  const cipher = createCipheriv(CIPHER_ALGO, key, iv);

  // Encrypt
  cipher.write(plaintext);
  cipher.end();

  // Concat the salt and iv to the front of the ciphertext
  const cipherText = Buffer.concat([salt, iv, cipher.read()]);

  return cipherText.toString('base64');
};

export const decrypt = (cipherText: string, passphrase: string): string => {
  const cipherBuffer = Buffer.from(cipherText, 'base64');

  // Slice out the salt and iv from the cipherText
  const salt = cipherBuffer.slice(0, SALT_BYTES);
  const iv = cipherBuffer.slice(SALT_BYTES, SALT_BYTES + IV_BYTES);
  const slicedCipherText = cipherBuffer.slice(32);

  // Create the key and decipher
  const key = pbkdf2Sync(passphrase, salt, ITERATIONS, KEY_LENGTH, KEY_ALGO);
  const decipher = createDecipheriv(CIPHER_ALGO, key, iv);

  // Decrypt
  const deciphered = decipher.write(slicedCipherText, 'base64');

  if (!deciphered) {
    // Decryption failed
    throw new Error('Failed to decipher ciphertext');
  }

  // Decryption success, return the results
  return decipher.read().toString();
};
