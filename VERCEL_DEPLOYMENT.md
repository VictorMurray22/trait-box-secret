# Vercel Deployment Guide for Trait Box Secret

## Step-by-Step Manual Deployment Instructions

### Prerequisites
- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

### Step 1: Prepare the Repository
1. Ensure all code is committed and pushed to GitHub
2. Verify the repository is public or you have access permissions
3. Check that `package.json` contains all necessary dependencies

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project" or "Add New..." → "Project"
4. Import the repository: `VictorMurray22/trait-box-secret`

### Step 3: Configure Project Settings
1. **Project Name**: `trait-box-secret` (or your preferred name)
2. **Framework Preset**: Select "Vite"
3. **Root Directory**: Leave as default (./)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

### Step 4: Environment Variables Configuration
In the Vercel dashboard, go to Settings → Environment Variables and add:

```
NEXT_PUBLIC_CHAIN_ID=your_chain_id
NEXT_PUBLIC_RPC_URL=your_rpc_url
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key
```

### Step 5: Build Settings
1. **Node.js Version**: 18.x (recommended)
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

### Step 6: Deploy
1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Vercel will provide a deployment URL (e.g., `https://trait-box-secret.vercel.app`)

### Step 7: Custom Domain (Optional)
1. Go to Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel
4. Wait for SSL certificate to be issued

### Step 8: Verify Deployment
1. Visit the deployment URL
2. Test wallet connection functionality
3. Verify all features are working correctly
4. Check browser console for any errors

### Step 9: Production Optimizations
1. **Analytics**: Enable Vercel Analytics in Settings
2. **Performance**: Monitor Core Web Vitals
3. **Security**: Review security headers in Settings
4. **Monitoring**: Set up error tracking if needed

### Step 10: Continuous Deployment
- Every push to the main branch will trigger automatic deployment
- Preview deployments are created for pull requests
- Use Vercel CLI for local testing: `npx vercel`

## Troubleshooting

### Common Issues:
1. **Build Failures**: Check Node.js version and dependencies
2. **Environment Variables**: Ensure all required variables are set
3. **Wallet Connection**: Verify WalletConnect project ID is correct
4. **Network Issues**: Check RPC URL and network configuration

### Build Commands Reference:
```bash
# Local development
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Install dependencies
npm install
```

### Environment Variables Reference:
- `NEXT_PUBLIC_CHAIN_ID`: Your target blockchain chain ID
- `NEXT_PUBLIC_RPC_URL`: Your RPC endpoint URL
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: Your WalletConnect project ID
- `NEXT_PUBLIC_INFURA_API_KEY`: Your Infura API key for RPC access

## Post-Deployment Checklist
- [ ] Application loads without errors
- [ ] Wallet connection works with multiple providers
- [ ] All UI components render correctly
- [ ] Responsive design works on mobile devices
- [ ] Performance metrics are acceptable
- [ ] SSL certificate is active
- [ ] Custom domain (if used) is properly configured

## Support
For deployment issues, check:
1. Vercel documentation: https://vercel.com/docs
2. Project README.md for technical details
3. GitHub repository issues section
4. Vercel community forums
