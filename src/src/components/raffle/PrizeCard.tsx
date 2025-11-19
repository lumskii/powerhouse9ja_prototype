import React from 'react';
import { LockIcon, UnlockIcon, TrophyIcon } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
interface PrizeCardProps {
  tier: '50%' | '75%' | '100%';
  prizeName: string;
  prizeImage?: string;
  isUnlocked: boolean;
  progress: number;
  isGrandPrize?: boolean;
  compact?: boolean;
  onClick?: () => void;
}
export function PrizeCard({
  tier,
  prizeName,
  prizeImage,
  isUnlocked,
  progress,
  isGrandPrize = false,
  compact = false,
  onClick
}: PrizeCardProps) {
  const tierColors = {
    '50%': 'from-blue-500 to-blue-600',
    '75%': 'from-purple-500 to-purple-600',
    '100%': 'from-gold to-gold-light'
  };
  if (compact) {
    return <Card className={`min-w-[160px] ${isUnlocked ? '' : 'opacity-60'}`} hover={isUnlocked} onClick={onClick}>
        <div className={`w-full h-24 bg-gradient-to-br ${tierColors[tier]} rounded-xl mb-3 flex items-center justify-center relative overflow-hidden`}>
          {!isUnlocked && <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
              <LockIcon size={32} className="text-white" />
            </div>}
          {prizeImage ? <img src={prizeImage} alt={prizeName} className="w-full h-full object-cover" /> : <TrophyIcon size={40} className="text-white" />}
        </div>

        <Badge variant={isUnlocked ? 'gold' : 'info'} className="mb-2">
          {tier} Tier
        </Badge>

        <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1 line-clamp-2">
          {prizeName}
        </h4>

        {!isUnlocked && <p className="text-xs text-gray-500 dark:text-gray-400">
            Unlocks at {tier}
          </p>}
      </Card>;
  }
  return <Card className={`${isGrandPrize ? 'border-2 border-gold' : ''}`}>
      <div className="relative">
        {isGrandPrize && <Badge variant="gold" className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <TrophyIcon size={12} className="mr-1" />
            Grand Prize
          </Badge>}

        <div className={`w-full h-48 bg-gradient-to-br ${tierColors[tier]} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
          {!isUnlocked && <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
              <LockIcon size={48} className="text-white" />
              <p className="text-white font-semibold">Unlocks at {tier}</p>
            </div>}
          {prizeImage ? <img src={prizeImage} alt={prizeName} className="w-full h-full object-cover" /> : <TrophyIcon size={80} className="text-white" />}
        </div>

        <div className="flex items-center justify-between mb-3">
          <Badge variant={isUnlocked ? 'success' : 'info'}>
            {isUnlocked ? <>
                <UnlockIcon size={12} className="mr-1" />
                Unlocked
              </> : <>
                <LockIcon size={12} className="mr-1" />
                Locked
              </>}
          </Badge>
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {tier} Tier
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {prizeName}
        </h3>

        {!isUnlocked && <ProgressBar progress={progress} showPercentage={false} height="md" />}
      </div>
    </Card>;
}