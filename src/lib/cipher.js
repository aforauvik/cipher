// Cipher utility functions
// This file contains the core encryption/decryption logic

/**
 * Derive a pseudo-random key stream from 3-digit and 3-letter keys
 * @param {string} numKey - 3-digit key
 * @param {string} letKey - 3-letter key
 * @param {number} length - Length of the key stream needed
 * @returns {Array} Array of pseudo-random numbers
 */
export function deriveKeyStream(numKey, letKey, length) {
	const seedStr = (letKey + numKey).toLowerCase();
	let h = 0;
	for (let i = 0; i < seedStr.length; i++) {
		h = (h * 31 + seedStr.charCodeAt(i)) >>> 0; // simple hash
	}
	const stream = [];
	for (let i = 0; i < length; i++) {
		h = (h * 1664525 + 1013904223) >>> 0; // LCG
		stream.push(h);
	}
	return stream;
}

/**
 * Process text with encryption or decryption
 * @param {string} text - Input text to process
 * @param {string} numKey - 3-digit key
 * @param {string} letKey - 3-letter key
 * @param {boolean} encrypt - Whether to encrypt (true) or decrypt (false)
 * @returns {string} Processed text
 */
export function process(text, numKey, letKey, encrypt = true) {
	const stream = deriveKeyStream(numKey, letKey, text.length);
	let out = "";

	for (let i = 0; i < text.length; i++) {
		const ch = text[i];
		const rnd = stream[i];

		if (/[A-Z]/.test(ch)) {
			const base = "A".charCodeAt(0);
			const pos = ch.charCodeAt(0) - base;
			const shift = ((rnd % 26) + i) % 26; // add position-based twist
			const newPos = encrypt ? (pos + shift) % 26 : (pos - shift + 26) % 26;
			out += String.fromCharCode(base + newPos);
		} else if (/[a-z]/.test(ch)) {
			const base = "a".charCodeAt(0);
			const pos = ch.charCodeAt(0) - base;
			const shift = ((rnd % 26) + i) % 26;
			const newPos = encrypt ? (pos + shift) % 26 : (pos - shift + 26) % 26;
			out += String.fromCharCode(base + newPos);
		} else if (/[0-9]/.test(ch)) {
			const pos = ch.charCodeAt(0) - "0".charCodeAt(0);
			const shift = ((rnd % 10) + i) % 10;
			const newPos = encrypt ? (pos + shift) % 10 : (pos - shift + 10) % 10;
			out += String.fromCharCode("0".charCodeAt(0) + newPos);
		} else {
			out += ch; // leave symbols unchanged
		}
	}

	// disguise further: Base64 encode ciphertext for encryption
	return encrypt ? btoa(out) : out;
}

/**
 * Validate input keys
 * @param {string} numKey - 3-digit key
 * @param {string} letKey - 3-letter key
 * @returns {boolean} Whether keys are valid
 */
export function validateKeys(numKey, letKey) {
	return /^\d{3}$/.test(numKey) && /^[a-zA-Z]{3}$/.test(letKey);
}
