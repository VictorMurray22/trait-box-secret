import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Lock, Unlock, Sparkles } from 'lucide-react';
import mysteryBoxImg from '@/assets/mystery-box-premium.jpg';
import traitGemImg from '@/assets/trait-gem.jpg';

interface Trait {
  name: string;
  value: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  percentage: number;
}

interface MysteryBoxProps {
  id: string;
  name: string;
  isRevealed: boolean;
  traits: Trait[];
  onReveal: (id: string) => void;
}

const rarityColors = {
  Common: 'bg-muted text-muted-foreground',
  Rare: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Epic: 'bg-purple-500/20 text-purple-300 border-purple-500/30', 
  Legendary: 'premium-badge'
};

export function MysteryBox({ id, name, isRevealed, traits, onReveal }: MysteryBoxProps) {
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = async () => {
    setIsRevealing(true);
    // Simulate reveal delay
    setTimeout(() => {
      onReveal(id);
      setIsRevealing(false);
    }, 1000);
  };

  if (isRevealed) {
    return (
      <Card className="mystery-box animate-reveal p-6">
        <div className="mystery-box-glow" />
        <div className="relative z-10">
          <div className="mb-4 text-center">
            <img 
              src={traitGemImg} 
              alt="Revealed NFT"
              className="w-32 h-32 mx-auto rounded-lg shadow-lg"
            />
            <h3 className="mt-3 text-xl font-bold glow-text">{name}</h3>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Traits Revealed
            </h4>
            {traits.map((trait, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <div className="font-medium">{trait.name}</div>
                  <div className="text-sm text-muted-foreground">{trait.value}</div>
                </div>
                <div className="text-right">
                  <Badge className={rarityColors[trait.rarity]}>
                    {trait.rarity}
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">
                    {trait.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="mystery-box animate-mystery-pulse p-6 cursor-pointer group" onClick={handleReveal}>
      <div className="mystery-box-glow" />
      <div className="relative z-10 text-center">
        <div className="mb-4">
          <img 
            src={mysteryBoxImg} 
            alt="Mystery Box"
            className="w-32 h-32 mx-auto rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <Lock className="w-4 h-4" />
          <span>Traits Hidden</span>
        </div>
        
        <Button 
          className="w-full cyber-border bg-primary/20 hover:bg-primary/30 text-primary border-primary/50"
          disabled={isRevealing}
        >
          {isRevealing ? (
            <>
              <Sparkles className="w-4 h-4 mr-2 animate-spin" />
              Revealing...
            </>
          ) : (
            <>
              <Unlock className="w-4 h-4 mr-2" />
              Reveal Traits
            </>
          )}
        </Button>
        
        <div className="mt-3 text-xs text-muted-foreground">
          Click to unlock your NFT's hidden traits
        </div>
      </div>
    </Card>
  );
}