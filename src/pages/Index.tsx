import { useState } from 'react';
import { Header } from '@/components/Header';
import { WalletConnect } from '@/components/WalletConnect';
import { MysteryBox } from '@/components/MysteryBox';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAccount } from 'wagmi';
import heroImage from '@/assets/mystery-box-hero.jpg';

// Mock data for NFTs
const mockNFTs = [
  {
    id: '1',
    name: 'Mystic Crystal #001',
    traits: [
      { name: 'Element', value: 'Cosmic', rarity: 'Legendary' as const, percentage: 0.1 },
      { name: 'Power Level', value: 'Supreme', rarity: 'Epic' as const, percentage: 2.3 },
      { name: 'Aura', value: 'Golden', rarity: 'Rare' as const, percentage: 8.7 },
      { name: 'Background', value: 'Void', rarity: 'Common' as const, percentage: 45.2 }
    ]
  },
  {
    id: '2', 
    name: 'Shadow Gem #042',
    traits: [
      { name: 'Element', value: 'Shadow', rarity: 'Epic' as const, percentage: 3.2 },
      { name: 'Power Level', value: 'Ancient', rarity: 'Legendary' as const, percentage: 0.3 },
      { name: 'Aura', value: 'Purple', rarity: 'Rare' as const, percentage: 12.1 },
      { name: 'Background', value: 'Nebula', rarity: 'Rare' as const, percentage: 15.8 }
    ]
  },
  {
    id: '3',
    name: 'Light Shard #189', 
    traits: [
      { name: 'Element', value: 'Light', rarity: 'Rare' as const, percentage: 11.4 },
      { name: 'Power Level', value: 'Enhanced', rarity: 'Common' as const, percentage: 32.1 },
      { name: 'Aura', value: 'Silver', rarity: 'Epic' as const, percentage: 4.6 },
      { name: 'Background', value: 'Celestial', rarity: 'Epic' as const, percentage: 6.9 }
    ]
  }
];

const Index = () => {
  const { isConnected, address } = useAccount();
  const [revealedNFTs, setRevealedNFTs] = useState<Set<string>>(new Set());

  const handleReveal = (nftId: string) => {
    setRevealedNFTs(prev => new Set([...prev, nftId]));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Wallet Connection */}
        <div className="flex justify-center mb-12">
          <WalletConnect />
        </div>

        {/* NFT Collection */}
        {isConnected ? (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Your NFT Collection</h2>
              <p className="text-muted-foreground">
                {revealedNFTs.size} of {mockNFTs.length} NFTs revealed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockNFTs.map((nft) => (
                <MysteryBox
                  key={nft.id}
                  id={nft.id}
                  name={nft.name}
                  isRevealed={revealedNFTs.has(nft.id)}
                  traits={nft.traits}
                  onReveal={handleReveal}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <Card className="mystery-box max-w-md mx-auto p-8">
              <div className="mystery-box-glow" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
                <p className="text-muted-foreground mb-6">
                  Connect your wallet to discover your hidden NFT traits and experience the thrill of revelation.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Secure
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Private
                  </Badge>
                  <Badge variant="outline" className="border-mystery-secondary/30 text-mystery-secondary">
                    Encrypted
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4">
          <p>Built with cutting-edge encryption to preserve the mystery of your NFT traits.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
