import CryptoJS from 'crypto-js';


export function encodeMessage(message, password) {
	return CryptoJS.AES.encrypt(message, password).toString();
}

export function decodeMessage(cipher, password) {
	return CryptoJS.AES.decrypt(cipher, password).toString(CryptoJS.enc.Utf8);
}

