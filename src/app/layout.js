import "./globals.css";

export const metadata = {
	title: "Mini Cipher - Advanced Text Encryption",
	description:
		"Secure text encryption with dual-key authentication system. Your data never leaves your device.",
	keywords:
		"encryption, cipher, security, text encryption, client-side encryption, cryptography",
	authors: [{name: "Mini Cipher"}],
	robots: "index, follow",
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
