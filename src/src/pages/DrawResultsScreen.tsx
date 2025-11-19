import React, { useState } from 'react';
import { TrophyIcon, SparklesIcon, CalendarIcon, UnlockIcon, LockIcon, CheckCircleIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
interface DrawResultsScreenProps {
  onNavigate: (screen: string) => void;
}
export function DrawResultsScreen({
  onNavigate
}: DrawResultsScreenProps) {
  const [revealedPrize, setRevealedPrize] = useState<string | null>(null);
  const currentProgress = 67; // Updated to 67%
  const prizeResults = [{
    tier: '100%',
    prize: '3-Bedroom Duplex',
    winner: null,
    unlocked: false,
    icon: '🏠',
    description: 'Grand Prize - Fully furnished',
    gradient: 'from-gold to-gold-light'
  }, {
    tier: '75%',
    prize: 'iPhone 15 Pro Max',
    winner: null,
    unlocked: false,
    icon: '📱',
    description: '256GB - Latest model',
    gradient: 'from-purple-500 to-purple-600'
  }, {
    tier: '50%',
    prize: '5KVA Generator',
    winner: 'PH9-****-3421',
    unlocked: true,
    icon: '⚡',
    description: 'Brand new with warranty',
    gradient: 'from-blue-500 to-blue-600'
  }];
  const pastResults = [{
    draw: 'December 2024 Draw',
    date: '2024-12-15',
    prizes: [{
      tier: '100%',
      prize: '2-Bedroom Apartment',
      winner: 'PH9-****-1234',
      icon: '🏠'
    }, {
      tier: '75%',
      prize: 'Samsung TV 65"',
      winner: 'PH9-****-5678',
      icon: '📺'
    }, {
      tier: '50%',
      prize: 'Washing Machine',
      winner: 'PH9-****-9012',
      icon: '🧺'
    }]
  }];
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      <Header showBalance balance={25000} onMenuClick={() => onNavigate('profile')} />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Prize Results
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Current draw progress: {currentProgress}%
          </p>
        </div>

        {/* Current Draw Status */}
        <Card className="bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full -translate-y-16 translate-x-16"></div>

          <div className="relative z-10">
            <Badge variant="gold" className="mb-3">
              <SparklesIcon size={12} className="mr-1" />
              Active Draw
            </Badge>

            <h2 className="text-xl font-bold mb-2">January 2025 Draw</h2>
            <p className="text-white/80 text-sm mb-4">
              Prizes unlock as tickets sell
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Progress</span>
                <span className="text-lg font-bold">{currentProgress}%</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500" style={{
                width: `${currentProgress}%`
              }}></div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-white/70">
                  Next prize unlocks at 75%
                </p>
                <Badge variant="success" className="text-xs">
                  <CheckCircleIcon size={10} className="mr-1" />
                  50% Unlocked
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Prize Tiers - Current Draw */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Prize Milestones
          </h3>

          <div className="space-y-3">
            {prizeResults.map((result, index) => {
            const isUnlocked = result.unlocked;
            const tierProgress = parseInt(result.tier);
            const canUnlock = currentProgress >= tierProgress;
            return <Card key={index} className={`${isUnlocked ? 'border-2 border-green-500' : canUnlock ? 'border-2 border-primary dark:border-gold' : 'opacity-60'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${result.gradient} rounded-xl flex items-center justify-center text-4xl flex-shrink-0 relative`}>
                      {!canUnlock && <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <LockIcon size={24} className="text-white" />
                        </div>}
                      {result.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={isUnlocked ? 'success' : canUnlock ? 'info' : 'info'}>
                          {result.tier} Tier
                        </Badge>
                        {isUnlocked && <Badge variant="gold">
                            <TrophyIcon size={12} className="mr-1" />
                            Winner Announced
                          </Badge>}
                      </div>

                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {result.prize}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {result.description}
                      </p>

                      {isUnlocked ? <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                          <p className="text-xs text-green-700 dark:text-green-400 font-semibold mb-1">
                            🎉 Winner Announced!
                          </p>
                          <p className="text-sm text-green-800 dark:text-green-300 font-mono font-bold">
                            {result.winner}
                          </p>
                        </div> : canUnlock ? <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 border border-blue-200 dark:border-blue-800">
                          <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold flex items-center gap-1">
                            <UnlockIcon size={12} />
                            Ready to unlock!
                          </p>
                        </div> : <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Unlocks at {result.tier} ticket sales
                          </p>
                        </div>}
                    </div>
                  </div>
                </Card>;
          })}
          </div>
        </div>

        {/* Past Results */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Past Winners
          </h3>

          {pastResults.map((draw, drawIndex) => <Card key={drawIndex} className="mb-4">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {draw.draw}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                    <CalendarIcon size={14} />
                    {draw.date}
                  </p>
                </div>
                <Badge variant="success">Completed</Badge>
              </div>

              <div className="space-y-3">
                {draw.prizes.map((prize, prizeIndex) => <div key={prizeIndex} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl">{prize.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="info" className="text-xs">
                          {prize.tier}
                        </Badge>
                        {prizeIndex === 0 && <TrophyIcon size={14} className="text-gold" />}
                      </div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white">
                        {prize.prize}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Winner: {prize.winner}
                      </p>
                    </div>
                  </div>)}
              </div>
            </Card>)}
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary to-primary-light text-white text-center">
          <TrophyIcon size={48} className="mx-auto mb-3 text-gold" />
          <h3 className="text-xl font-bold mb-2">
            Want to be the next winner?
          </h3>
          <p className="text-white/80 mb-4">
            Buy more tickets to increase your chances!
          </p>
          <Button variant="secondary" size="md" fullWidth onClick={() => onNavigate('home')}>
            Buy Tickets Now
          </Button>
        </Card>
      </div>

      <BottomNav active="results" onNavigate={onNavigate} />
    </div>;
}