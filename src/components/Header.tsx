import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden py-16 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Badge className="premium-badge mb-4 animate-float">
            <Sparkles className="w-3 h-3 mr-1" />
            Private NFT Reveals
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
          Your NFT,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Your Reveal
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Experience the thrill of discovery. Your NFT metadata remains encrypted until you choose to reveal it, 
          preserving the mystery and excitement of uncovering rare traits.
        </p>
        
        <div className="mt-8 flex justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Encrypted Metadata
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Private Reveals
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-mystery-secondary animate-pulse" />
            Rarity Protected
          </div>
        </div>
      </div>
    </header>
  );
}