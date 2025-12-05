import React, { useState, useRef } from 'react';
import { TrendingUpIcon, TicketIcon, SparklesIcon, ArrowRightIcon, ChevronRightIcon, CheckCircleIcon, PlayCircleIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { PrizeCard } from '../components/raffle/PrizeCard';
import { WinnerCardStack } from '../components/ui/WinnerCardStack';
interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  onBuyTicket: () => void;
}
export function HomeScreen({
  onNavigate,
  onBuyTicket
}: HomeScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPrizeSlide, setCurrentPrizeSlide] = useState(0);
  // Current raffle state - 67% means 50% milestone is unlocked!
  const currentProgress = 67;
  const nextMilestone = 75;
  // Grand prize video link (example - replace with actual link)
  const prizeVideoUrl = 'https://www.youtube.com/watch?v=example';
  // 10 winners at 50% milestone
  const fiftyPercentWinners = ['PH9-****-3421', 'PH9-****-7892', 'PH9-****-1563', 'PH9-****-9204', 'PH9-****-4567', 'PH9-****-8123', 'PH9-****-6789', 'PH9-****-2345', 'PH9-****-5678', 'PH9-****-9012'];
  const prizes = [{
    tier: '50%' as const,
    name: '5KVA Generator',
    unlocked: true,
    progress: currentProgress,
    winner: 'Multiple Winners'
  }, {
    tier: '75%' as const,
    name: 'iPhone 15 Pro Max',
    unlocked: false,
    progress: currentProgress
  }, {
    tier: '100%' as const,
    name: '3-Bedroom Duplex',
    unlocked: false,
    progress: currentProgress,
    isGrand: true
  }];
  const grandPrize = prizes[2];
  const handlePrizeSlideChange = (index: number) => {
    setCurrentPrizeSlide(index);
  };
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header showBalance balance={25000} onMenuClick={() => onNavigate('profile')} />

      {/* Main Content with proper spacing */}
      <div className="pt-20 pb-32 px-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Featured Grand Prize Hero */}
          <Card className="bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/20 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full translate-y-16 -translate-x-16"></div>

            <div className="relative z-10">
              <Badge variant="gold" className="mb-3">
                <SparklesIcon size={12} className="mr-1" />
                Grand Prize Draw
              </Badge>

              {/* Prize Image Slider */}
              <div className="relative mb-4">
                <div className="overflow-hidden rounded-xl">
                  <div className="flex transition-transform duration-300 ease-out" style={{
                  transform: `translateX(-${currentPrizeSlide * 100}%)`
                }}>
                    {/* Slide 1: Prize Image */}
                    <div className="w-full flex-shrink-0">
                      <div className="w-full h-40 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                          <div className="text-6xl mb-2">🏠</div>
                          <p className="text-sm text-primary font-semibold">
                            Grand Prize
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: Video Link */}
                    <div className="w-full flex-shrink-0">
                      <a href={prizeVideoUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-40 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl hover:scale-[1.02] transition-transform active:scale-95">
                        <div className="text-center">
                          <PlayCircleIcon size={64} className="text-white mx-auto mb-2" />
                          <p className="text-sm text-white font-semibold">
                            Watch Prize Video
                          </p>
                          <p className="text-xs text-white/70 mt-1">
                            See it on social media
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-3">
                  {[0, 1].map(index => <button key={index} onClick={() => handlePrizeSlideChange(index)} className={`h-1.5 rounded-full transition-all ${index === currentPrizeSlide ? 'w-6 bg-gold' : 'w-1.5 bg-white/40 hover:bg-white/60'}`} aria-label={`Go to slide ${index + 1}`} />)}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2">{grandPrize.name}</h2>
              <p className="text-white/80 text-sm mb-4">
                Fully furnished property in prime location
              </p>

              {/* Progress to Next Milestone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/80">Tickets Sold</span>
                  <span className="text-lg font-bold">{currentProgress}%</span>
                </div>
                <div className="pt-6">
                  <ProgressBar progress={currentProgress} showPercentage={false} height="lg" milestones={[50, 75, 100]} />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs text-white/70">
                    Next prize unlocks at {nextMilestone}% • Only{' '}
                    {nextMilestone - currentProgress}% to go!
                  </p>
                  <Badge variant="success" className="text-xs">
                    <CheckCircleIcon size={10} className="mr-1" />
                    50% Unlocked
                  </Badge>
                </div>
              </div>

              <Button variant="secondary" size="lg" fullWidth onClick={onBuyTicket}>
                Buy Tickets Now
                <ArrowRightIcon size={20} />
              </Button>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <TicketIcon size={24} className="text-primary dark:text-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your Tickets
              </p>
            </Card>
            <Card className="text-center">
              <TrendingUpIcon size={24} className="text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentProgress}%
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Draw Progress
              </p>
            </Card>
          </div>

          {/* Winner Card Stack - 50% Milestone */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <Badge variant="gold" className="mb-2">
                  50% Milestone Reached!
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  10 Winners Announced
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Swipe to see all winners
                </p>
              </div>
            </div>

            <WinnerCardStack winners={fiftyPercentWinners} prizeName="5KVA Generator" prizeIcon="⚡" tier="50%" />
          </div>

          {/* Prize Tier Preview */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Prize Milestones
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1 unlocked • 2 remaining
                </p>
              </div>
              <button onClick={onBuyTicket} className="text-primary dark:text-gold text-sm font-medium hover:underline flex items-center gap-1">
                View All
                <ChevronRightIcon size={16} />
              </button>
            </div>

            <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
              {prizes.map((prize, index) => <div key={index} className="snap-start">
                  <PrizeCard tier={prize.tier} prizeName={prize.name} isUnlocked={prize.unlocked} progress={prize.progress} isGrandPrize={prize.isGrand} compact onClick={onBuyTicket} />
                </div>)}
            </div>
          </div>

          {/* How It Works */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-200 dark:border-gray-600">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <SparklesIcon size={20} className="text-primary dark:text-gold" />
              How Prize Unlocks Work
            </h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex gap-2 items-center">
                <CheckCircleIcon size={16} className="text-green-500 flex-shrink-0" />
                <span className="font-bold text-green-600 dark:text-green-400">
                  50%
                </span>
                <span className="line-through opacity-60">
                  10 winners announced
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-primary dark:text-gold">
                  75%
                </span>
                <span>10 more winners announced</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-primary dark:text-gold">
                  100%
                </span>
                <span>Grand prize winner takes it all!</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <BottomNav active="home" onNavigate={onNavigate} />
    </div>;
}