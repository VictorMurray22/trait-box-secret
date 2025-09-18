# 🔮 TraitBox Secret

> *Unlock the Mysteries - FHE-Encrypted NFT Trait Revelation Platform*

TraitBox Secret is a cutting-edge NFT trait revelation platform that leverages Fully Homomorphic Encryption (FHE) to preserve the mystery and excitement of trait discovery while ensuring complete privacy and security.

## ✨ Core Features

- 🔐 **FHE-Encrypted Storage**: All traits protected with Fully Homomorphic Encryption
- 🎭 **Private Revelation**: Discover traits without exposing sensitive data
- 💎 **Mystery Box Experience**: Immersive UI with glowing effects and animations
- 🌐 **Multi-Wallet Support**: Connect with RainbowKit, MetaMask, and more
- ⚡ **Real-time Updates**: Instant trait revelation with smooth animations
- 🛡️ **Secure Smart Contracts**: Deployed on Sepolia with advanced encryption

## 🛠️ Technology Stack

- 🎨 **Frontend**: React 18, TypeScript, Vite
- 🎭 **UI/UX**: Tailwind CSS, shadcn/ui, Lucide Icons
- 💳 **Wallet**: RainbowKit, Wagmi, Viem
- ⛓️ **Blockchain**: Ethereum Sepolia Testnet
- 🔒 **Encryption**: FHE (Fully Homomorphic Encryption)
- 📱 **Responsive**: Mobile-first design approach

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Web3 wallet (MetaMask, Rainbow, etc.)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/VictorMurray22/trait-box-secret.git
cd trait-box-secret
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to `http://localhost:8080`

## 🔧 Configuration

### Environment Variables

The following variables are pre-configured in `vite.config.ts`:

```env
# Blockchain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Infura Configuration
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

## 🎯 Smart Contract Integration

### Contract Features

- 🔐 **FHE-Encrypted Trait Storage**: All trait data encrypted on-chain
- 🎭 **Private Revelation Mechanism**: Reveal traits without exposing data
- 🏆 **Reputation System**: Track user reputation securely
- ✅ **Verifier Validation**: Third-party trait verification

### Contract Interaction

```typescript
// Example contract interaction
const { writeContract } = useWriteContract();

const revealTrait = async (boxId: string, traitData: any) => {
  await writeContract({
    address: CONTRACT_ADDRESS,
    abi: TraitBoxSecretABI,
    functionName: 'revealTrait',
    args: [boxId, traitData]
  });
};
```

## 🎨 UI Components

### Mystery Box Component
- Glowing animations and effects
- Smooth reveal transitions
- Rarity-based color coding
- Interactive trait cards

### Wallet Integration
- Multi-provider support
- Real-time connection status
- Secure transaction handling
- User-friendly error messages

## 🚀 Deployment

### Vercel Deployment (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VictorMurray22/trait-box-secret)

### Manual Deployment Steps

1. **Prepare Repository**:
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import repository: `VictorMurray22/trait-box-secret`
   - Configure environment variables
   - Deploy!

3. **Required Environment Variables**:
   ```env
   NEXT_PUBLIC_CHAIN_ID=11155111
   NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
   NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
   ```

### Alternative Deployment Options

- **Netlify**: Static site hosting with form handling
- **AWS S3 + CloudFront**: Scalable cloud hosting
- **GitHub Pages**: Free hosting for open source projects
- **Firebase Hosting**: Google's hosting platform

## 🔒 Security & Privacy

- 🛡️ **FHE Encryption**: All sensitive data protected with homomorphic encryption
- 🔍 **Smart Contract Audits**: Rigorous security testing
- 🌐 **Decentralized Architecture**: No single point of failure
- 🔑 **Wallet Authentication**: Secure identity verification

## 📁 Project Structure

```
trait-box-secret/
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── MysteryBox.tsx # Main mystery box component
│   │   └── WalletConnect.tsx # Wallet connection
│   ├── lib/            # Utility functions
│   │   └── wagmi.ts    # Wallet configuration
│   ├── pages/          # Page components
│   └── assets/         # Static assets
├── public/             # Public assets
│   ├── favicon.svg     # Custom favicon
│   └── placeholder.svg # Placeholder images
└── package.json        # Dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 **Issues**: [GitHub Issues](https://github.com/VictorMurray22/trait-box-secret/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/VictorMurray22/trait-box-secret/discussions)
- 📖 **Documentation**: [Project Wiki](https://github.com/VictorMurray22/trait-box-secret/wiki)

---

**Built with ❤️ for the Web3 community**
