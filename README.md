# Trait Box Secret

A revolutionary NFT trait revelation platform built with FHE (Fully Homomorphic Encryption) technology. Discover your NFT traits in complete privacy while maintaining the mystery and excitement of the revelation process.

## Features

- **FHE-Encrypted Trait Storage**: All NFT traits are encrypted using Fully Homomorphic Encryption
- **Private Revelation Process**: Reveal traits without exposing sensitive data
- **Real Wallet Integration**: Connect with RainbowKit and multiple wallet providers
- **Secure Smart Contracts**: Deployed on Sepolia testnet with FHE capabilities
- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Wallet Integration**: RainbowKit, Wagmi, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHEVM

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- A Web3 wallet (MetaMask, Rainbow, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/VictorMurray22/trait-box-secret.git

# Navigate to the project directory
cd trait-box-secret

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

The following environment variables are configured in `vite.config.ts`:

- `NEXT_PUBLIC_CHAIN_ID`: 11155111 (Sepolia)
- `NEXT_PUBLIC_RPC_URL`: Sepolia Infura endpoint
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: WalletConnect project ID
- `NEXT_PUBLIC_INFURA_API_KEY`: Infura API key

## Smart Contract Deployment

### Prerequisites for Contract Deployment

- Hardhat
- FHEVM setup
- Private key for deployment

### Deploy Contracts

```bash
# Install hardhat dependencies
npm install @nomicfoundation/hardhat-toolbox @fhevm/hardhat-fhevm hardhat

# Deploy to Sepolia
npx hardhat run contracts/deploy.js --network sepolia
```

## Project Structure

```
trait-box-secret/
├── contracts/           # Smart contracts
│   ├── TraitBoxSecret.sol
│   └── deploy.js
├── src/
│   ├── components/      # React components
│   ├── lib/            # Utility functions and configurations
│   ├── pages/          # Page components
│   └── assets/         # Static assets
├── public/             # Public assets
└── hardhat.config.js   # Hardhat configuration
```

## Key Features

### FHE-Encrypted Trait System

- All NFT traits are encrypted using Fully Homomorphic Encryption
- Traits can be revealed without exposing sensitive data
- Privacy-preserving trait comparison and rarity calculation

### Wallet Integration

- Multiple wallet support via RainbowKit
- Real-time wallet connection status
- Secure transaction handling

### Smart Contract Features

- FHE-encrypted trait storage
- Private revelation mechanism
- Reputation system
- Verifier-based trait validation

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to your preferred hosting service
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue in the GitHub repository.
