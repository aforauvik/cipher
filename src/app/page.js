import {CipherForm} from "@/components/CipherForm";

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
			<div className="w-full max-w-4xl">
				{/* <div className="text-center mb-8">
					<h1 className="text-2xl md:text-2xl font-bold text-white mb-4">
						Mini Cipher
					</h1>
					<p className="text-xl text-slate-300 max-w-2xl mx-auto">
						Advanced text encryption with dual-key authentication system.
						Secure, fast, and completely client-side.
					</p>
				</div> */}

				<CipherForm />

				<div className="text-center mt-4 text-slate-500 text-sm">
					<p>Your data never leaves your device</p>
				</div>
			</div>
		</main>
	);
}
