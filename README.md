# Mini Cipher Pro

A secure, client-side text encryption tool built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- **Dual-Key Authentication**: Uses both a 3-digit numeric key and a 3-letter alphabetic key
- **Client-Side Encryption**: All processing happens locally - your data never leaves your device
- **Advanced Cipher Algorithm**: Custom encryption with pseudo-random key streams and position-based shifts
- **Base64 Encoding**: Encrypted text is further disguised using Base64 encoding
- **Modern UI**: Beautiful, responsive interface built with Tailwind CSS and shadcn/ui
- **Security Focused**: Includes security headers and production optimizations

## How It Works

The cipher uses a sophisticated algorithm that:

1. **Key Derivation**: Combines your 3-digit and 3-letter keys to generate a pseudo-random sequence
2. **Position-Based Encryption**: Each character's encryption depends on its position in the text
3. **Multi-Character Support**: Handles uppercase, lowercase, and numeric characters
4. **Symbol Preservation**: Keeps punctuation and symbols unchanged for readability
5. **Base64 Disguise**: Encrypted text is encoded in Base64 for additional obfuscation

## Security Features

- **Client-Side Only**: No server communication, no data storage
- **Custom Algorithm**: Proprietary cipher logic not based on standard algorithms
- **Production Hardening**: Security headers, no source maps, optimized builds
- **Input Validation**: Strict key format requirements and error handling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mini-cipher-pro
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Usage

1. **Enter Your Text**: Type or paste the text you want to encrypt/decrypt
2. **Set 3-Digit Key**: Enter exactly 3 digits (e.g., 112)
3. **Set 3-Letter Key**: Enter exactly 3 letters (e.g., cvc)
4. **Encrypt/Decrypt**: Click the appropriate button
5. **Copy Result**: Use the result field to copy your processed text

## Key Requirements

- **3-Digit Key**: Must be exactly 3 digits (0-9)
- **3-Letter Key**: Must be exactly 3 letters (a-z, A-Z)
- **Text Input**: Any text length is supported

## Technical Details

### Architecture

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom dark theme
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icon set
- **State Management**: Custom React hooks

### Security Measures

- Content Security Policy (CSP) headers
- XSS protection headers
- Frame options to prevent clickjacking
- No source maps in production
- Optimized package imports

### File Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── CipherForm.jsx  # Main cipher interface
├── hooks/               # Custom React hooks
│   └── useCipher.js    # Cipher logic hook
└── lib/                 # Utility functions
    └── cipher.js        # Core cipher algorithms
```

## Contributing

This is a security-focused application. Please ensure any contributions maintain the security standards and don't introduce vulnerabilities.

## License

This project is proprietary software. All rights reserved.

## Disclaimer

This tool is provided for educational and personal use. While it implements strong encryption techniques, it should not be used for highly sensitive or critical security applications without thorough testing and validation.

---

**Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui**
