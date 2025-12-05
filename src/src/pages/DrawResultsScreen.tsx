import React, { useState } from 'react';
import { TrophyIcon, SparklesIcon, CalendarIcon, UnlockIcon, LockIcon, CheckCircleIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { WinnerCardStack } from '../components/ui/WinnerCardStack';
interface DrawResultsScreenProps {
  onNavigate: (screen: string) => void;
}
export function DrawResultsScreen({
  onNavigate
}: DrawResultsScreenProps) {
  const currentProgress = 67;
  // 10 winners at 50% milestone
  const fiftyPercentWinners = ['PH9-****-3421', 'PH9-****-7892', 'PH9-****-1563', 'PH9-****-9204', 'PH9-****-4567', 'PH9-****-8123', 'PH9-****-6789', 'PH9-****-2345', 'PH9-****-5678', 'PH9-****-9012'];
  const prizeResults = [{
    tier: '100%',
    prize: '3-Bedroom Duplex',
    winners: null,
    unlocked: false,
    icon: '🏠',
    description: 'Grand Prize - Fully furnished',
    gradient: 'from-gold to-gold-light',
    winnerCount: 1
  }, {
    tier: '75%',
    prize: 'iPhone 15 Pro Max',
    winners: null,
    unlocked: false,
    icon: '📱',
    description: '256GB - Latest model',
    gradient: 'from-purple-500 to-purple-600',
    winnerCount: 10
  }, {
    tier: '50%',
    prize: '5KVA Generator',
    winners: fiftyPercentWinners,
    unlocked: true,
    icon: '⚡',
    description: 'Brand new with warranty',
    gradient: 'from-blue-500 to-blue-600',
    winnerCount: 10
  }];
  const pastResults = [{
    draw: 'December 2024 Draw',
    date: '2024-12-15',
    prizes: [{
      tier: '100%',
      prize: '2-Bedroom Apartment',
      winner: 'PH9-****-1234',
      icon: '🏠',
      winnerCount: 1
    }, {
      tier: '75%',
      prize: 'Samsung TV 65"',
      winners: ['PH9-****-5678', 'PH9-****-5679', 'PH9-****-5680', 'PH9-****-5681', 'PH9-****-5682', 'PH9-****-5683', 'PH9-****-5684', 'PH9-****-5685', 'PH9-****-5686', 'PH9-****-5687'],
      icon: '📺',
      winnerCount: 10
    }, {
      tier: '50%',
      prize: 'Washing Machine',
      winners: ['PH9-****-9012', 'PH9-****-9013', 'PH9-****-9014', 'PH9-****-9015', 'PH9-****-9016', 'PH9-****-9017', 'PH9-****-9018', 'PH9-****-9019', 'PH9-****-9020', 'PH9-****-9021'],
      icon: '🧺',
      winnerCount: 10
    }]
  }];
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header showBalance balance={25000} onMenuClick={() => onNavigate('profile')} />

      <div className="pt-20 pb-32 px-4">
        <div className="max-w-md mx-auto space-y-6">
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

            <div className="space-y-6">
              {prizeResults.map((result, index) => {
              const isUnlocked = result.unlocked;
              const tierProgress = parseInt(result.tier);
              const canUnlock = currentProgress >= tierProgress;
              return <div key={index}>
                    <Card className={`${isUnlocked ? 'border-2 border-green-500' : canUnlock ? 'border-2 border-primary dark:border-gold' : 'opacity-60'}`}>
                      <div className="flex items-start gap-4 mb-4">
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
                                {result.winnerCount} Winners
                              </Badge>}
                          </div>

                          <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                            {result.prize}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {result.description}
                          </p>
                        </div>
                      </div>

                      {!isUnlocked && !canUnlock && <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                            Unlocks at {result.tier} • {result.winnerCount}{' '}
                            winner{result.winnerCount > 1 ? 's' : ''}
                          </p>
                        </div>}

                      {!isUnlocked && canUnlock && <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                          <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold flex items-center justify-center gap-1">
                            <UnlockIcon size={12} />
                            Ready to unlock {result.winnerCount} winner
                            {result.winnerCount > 1 ? 's' : ''}!
                          </p>
                        </div>}
                    </Card>

                    {/* Winner Card Stack for unlocked prizes */}
                    {isUnlocked && result.winners && <div className="mt-4">
                        <WinnerCardStack winners={result.winners} prizeName={result.prize} prizeIcon={result.icon} tier={result.tier} />
                      </div>}

                    {/* CTA Card after 5KVA Generator (50% tier) */}
                    {result.tier === '50%' && <Card className="bg-gradient-to-r from-primary to-primary-light text-white text-center mt-4">
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
                      </Card>}
                  </div>;
            })}
            </div>
          </div>

          {/* Past Results */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Past Winners
            </h3>

            {pastResults.map((draw, drawIndex) => <div key={drawIndex} className="space-y-4">
                <Card>
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
                    {draw.prizes.map((prize, prizeIndex) => <div key={prizeIndex} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{prize.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="info" className="text-xs">
                                {prize.tier}
                              </Badge>
                              {prizeIndex === 0 && <TrophyIcon size={14} className="text-gold" />}
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {prize.winnerCount} winner
                                {prize.winnerCount > 1 ? 's' : ''}
                              </span>
                            </div>
                            <p className="font-semibold text-sm text-gray-900 dark:text-white">
                              {prize.prize}
                            </p>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </Card>

                {/* Winner Card Stacks for past results with multiple winners */}
                {draw.prizes.map((prize, prizeIndex) => prize.winners && prize.winners.length > 1 && <WinnerCardStack key={`past-${prizeIndex}`} winners={prize.winners} prizeName={prize.prize} prizeIcon={prize.icon} tier={prize.tier} />)}
              </div>)}
          </div>
        </div>
      </div>

      <BottomNav active="results" onNavigate={onNavigate} />
    </div>;
}