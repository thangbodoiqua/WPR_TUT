// crypto.js
const crypto = require('crypto');

/**
 * Encrypts the given plainText using AES-128-ECB mode with the provided key.
 * @param {string} plainText - The text to encrypt.
 * @param {string} key - The 16-byte (128-bit) key to use for encryption.
 * @returns {string} - The encrypted text in base64 format.
 */
function encryptText(plainText, key) {
  // Ensure the key is 16 bytes (128 bits)
  if (key.length !== 16) {
    throw new Error('Key must be 16 bytes long (128 bits).');
  }

  const cipher = crypto.createCipheriv('aes-128-ecb', Buffer.from(key), null);
  let encrypted = cipher.update(plainText, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

/**
 * Decrypts the given encryptedText using AES-128-ECB mode with the provided key.
 * @param {string} encryptedText - The encrypted text in base64 format.
 * @param {string} key - The 16-byte (128-bit) key to use for decryption.
 * @returns {string} - The decrypted plain text.
 */
function decryptText(encryptedText, key) {
  // Ensure the key is 16 bytes (128 bits)
  if (key.length !== 16) {
    throw new Error('Key must be 16 bytes long (128 bits).');
  }

  const decipher = crypto.createDecipheriv('aes-128-ecb', Buffer.from(key), null);
  let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Export the functions for reuse in other modules
module.exports = { encryptText, decryptText };