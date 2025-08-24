import {useState} from "react";
import {process, validateKeys} from "@/lib/cipher";

export function useCipher() {
	const [plainText, setPlainText] = useState("");
	const [numKey, setNumKey] = useState("");
	const [letKey, setLetKey] = useState("");
	const [result, setResult] = useState("");
	const [error, setError] = useState("");

	const encrypt = () => {
		setError("");

		if (!validateKeys(numKey, letKey)) {
			setError("Enter exactly 3 digits and 3 letters as keys.");
			return;
		}

		if (!plainText.trim()) {
			setError("Please enter some text to encrypt.");
			return;
		}

		try {
			const encrypted = process(plainText, numKey, letKey, true);
			setResult(encrypted);
		} catch (err) {
			setError("Encryption failed. Please try again.");
		}
	};

	const decrypt = () => {
		setError("");

		if (!validateKeys(numKey, letKey)) {
			setError("Enter exactly 3 digits and 3 letters as keys.");
			return;
		}

		if (!plainText.trim()) {
			setError("Please enter some text to decrypt.");
			return;
		}

		try {
			// First decode from Base64
			const decoded = atob(plainText.trim());
			const decrypted = process(decoded, numKey, letKey, false);
			setResult(decrypted);
		} catch (err) {
			setError("Decryption failed. Ciphertext must be valid Base64.");
		}
	};

	const clearAll = () => {
		setPlainText("");
		setNumKey("");
		setLetKey("");
		setResult("");
		setError("");
	};

	return {
		plainText,
		setPlainText,
		numKey,
		setNumKey,
		letKey,
		setLetKey,
		result,
		error,
		encrypt,
		decrypt,
		clearAll,
	};
}
