import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, Check } from 'lucide-react';
import { useAccount } from 'wagmi';

export function WalletConnect() {
  const { isConnected, address } = useAccount();

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (isConnected && address) {
    return (
      <Card className="mystery-box p-4 max-w-sm">
        <div className="mystery-box-glow" />
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">Connected</div>
              <div className="text-sm text-muted-foreground">
                {shortenAddress(address)}
              </div>
            </div>
          </div>
          <ConnectButton />
        </div>
      </Card>
    );
  }

  return (
    <Card className="mystery-box p-6 max-w-sm">
      <div className="mystery-box-glow" />
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
          <Wallet className="w-8 h-8 text-primary" />
        </div>
        
        <h3 className="text-lg font-bold mb-2">Connect Wallet</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Connect your wallet to reveal your NFT traits
        </p>
        
        <ConnectButton />
        
        <div className="mt-3 flex justify-center">
          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
            Secure Connection
          </Badge>
        </div>
      </div>
    </Card>
  );
}