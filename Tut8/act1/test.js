// test.js
const { encryptText, decryptText } = require('./crypto');

// Define a key and a message to encrypt and decrypt
const key = '1234567890123456'; // Exactly 16 bytes
const message = 'Hello, AES-128-ECB!';

// Encrypt the message
const encryptedMessage = encryptText(message, key);
console.log('Encrypted Message:', encryptedMessage);

// Decrypt the message
const decryptedMessage = decryptText(encryptedMessage, key);
console.log('Decrypted Message:', decryptedMessage);