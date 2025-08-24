/** @type {import('next').NextConfig} */
const nextConfig = {
	// Set workspace root to fix build issues
	outputFileTracingRoot: process.cwd(),

	// Production optimizations
	compress: true,
	poweredByHeader: false,

	// Security headers
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self';",
					},
				],
			},
		];
	},

	// Disable source maps in production for security
	productionBrowserSourceMaps: false,

	// Experimental features for better security
	experimental: {
		optimizePackageImports: ["lucide-react"],
	},
};

export default nextConfig;
