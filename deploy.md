# Deployment Guide for Mini Cipher Pro

## Security Considerations

This application contains proprietary cipher algorithms that should be protected in production. Follow these security measures:

### 1. Environment Setup

- Use the `env.production` file for production variables
- Ensure `NODE_ENV=production` is set
- Disable development tools and debug features

### 2. Build Configuration

The `next.config.mjs` includes:

- Security headers (CSP, XSS protection, frame options)
- Disabled source maps in production
- Powered-by header removal
- Content compression

### 3. Deployment Steps

#### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard
NODE_ENV=production
NEXT_PUBLIC_APP_NAME="Mini Cipher Pro"
NEXT_PUBLIC_APP_VERSION="1.0.0"
```

#### Option B: Self-Hosted

```bash
# Build the application
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "mini-cipher" -- start
```

### 4. Security Headers Verification

After deployment, verify these headers are present:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Content-Security-Policy: [CSP string]`

### 5. Code Protection

In production:

- Source maps are disabled
- JavaScript is minified and obfuscated
- Bundle analysis is available via `npm run analyze`
- No development tools are accessible

### 6. Monitoring

- Monitor for unusual traffic patterns
- Set up logging for security events
- Regular security audits of the deployed application

## Production Checklist

- [ ] Environment variables set correctly
- [ ] Security headers verified
- [ ] Source maps disabled
- [ ] Development tools inaccessible
- [ ] SSL/TLS enabled
- [ ] Regular backups configured
- [ ] Monitoring and alerting set up

## Troubleshooting

### Common Issues

1. **Security headers not showing**: Check Next.js config and server configuration
2. **Build errors**: Ensure all dependencies are installed
3. **Performance issues**: Run `npm run analyze` to identify bundle problems

### Support

For deployment issues, check:

- Next.js deployment documentation
- Vercel documentation (if using Vercel)
- Server logs and error messages
