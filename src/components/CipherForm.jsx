"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {useCipher} from "@/hooks/useCipher";
import {AlertCircle, Lock, Unlock, RotateCcw, Copy} from "lucide-react";

export function CipherForm() {
	const {
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
	} = useCipher();

	const copyToClipboard = async () => {
		if (result) {
			try {
				await navigator.clipboard.writeText(result);
			} catch (err) {
				console.error("Failed to copy text: ", err);
			}
		}
	};

	return (
		<Card className="w-full max-w-3xl mx-auto bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
					<Lock className="w-6 h-6" />
					Mini Cipher
				</CardTitle>
				<p className="text-slate-400 text-sm">
					Secure text encryption with dual-key authentication
				</p>
			</CardHeader>

			<CardContent className="space-y-6">
				{/* Input Text */}
				<div className="space-y-2">
					<Label htmlFor="plain" className="text-slate-300">
						Your Text
					</Label>
					<Textarea
						id="plain"
						placeholder="Type or paste text to encrypt/decrypt..."
						value={plainText}
						onChange={(e) => setPlainText(e.target.value)}
						className="min-h-[120px] bg-slate-800/50 border-slate-600/50 text-slate-200 placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20"
					/>
				</div>

				{/* Keys Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="numKey" className="text-slate-300">
							3-Digit Key
						</Label>
						<Input
							id="numKey"
							type="text"
							placeholder="e.g. 123"
							maxLength={3}
							value={numKey}
							onChange={(e) => setNumKey(e.target.value.replace(/\D/g, ""))}
							className="bg-slate-800/50 border-slate-600/50 text-slate-200 placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="letKey" className="text-slate-300">
							3-Letter Key
						</Label>
						<Input
							id="letKey"
							type="text"
							placeholder="e.g. abc"
							maxLength={3}
							value={letKey}
							onChange={(e) =>
								setLetKey(e.target.value.replace(/[^a-zA-Z]/g, ""))
							}
							className="bg-slate-800/50 border-slate-600/50 text-slate-200 placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20"
						/>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-3">
					<Button
						onClick={encrypt}
						className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-lg"
					>
						<Lock className="w-4 h-4 mr-2" />
						Encrypt
					</Button>

					<Button
						onClick={decrypt}
						variant="outline"
						className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg"
					>
						<Unlock className="w-4 h-4 mr-2" />
						Decrypt
					</Button>

					<Button
						onClick={clearAll}
						variant="outline"
						className="px-4 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 border-slate-600/50"
					>
						<RotateCcw className="w-4 h-4" />
					</Button>
				</div>

				{/* Error Display */}
				{error && (
					<div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-700/50 rounded-lg text-red-300">
						<AlertCircle className="w-4 h-4 flex-shrink-0" />
						<span className="text-sm">{error}</span>
					</div>
				)}

				{/* Result */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="result" className="text-slate-300">
							Result
						</Label>
						{result && (
							<Button
								onClick={copyToClipboard}
								variant="outline"
								size="sm"
								className="px-2 py-1 h-8 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 border-slate-600/50"
							>
								<Copy className="w-3 h-3 mr-1" />
								Copy
							</Button>
						)}
					</div>
					<Textarea
						id="result"
						value={result}
						readOnly
						placeholder="Encrypted/decrypted text will appear here..."
						className="min-h-[120px] bg-slate-800/30 border-slate-600/30 text-slate-200 placeholder:text-slate-500"
					/>
				</div>

				{/* Security Notice */}
				<div className="text-xs text-slate-500 text-center p-3 bg-slate-800/20 rounded-lg border border-slate-700/30">
					<p>
						<strong>Security Note:</strong> This tool uses client-side
						encryption. Your text is processed locally and never sent to any
						server.
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
