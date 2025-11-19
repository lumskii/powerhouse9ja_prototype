import React, { useState } from 'react';
import { ChevronRightIcon, TicketIcon, TrophyIcon, UserCheckIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
interface OnboardingScreenProps {
  onComplete: () => void;
}
export function OnboardingScreen({
  onComplete
}: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    icon: UserCheckIcon,
    title: 'Register in Seconds',
    description: 'Quick and secure signup. Join thousands of winners today.',
    color: 'from-blue-500 to-blue-600'
  }, {
    icon: TicketIcon,
    title: 'Buy Your Lucky Ticket',
    description: 'Choose your draw, select tickets, and pay securely in just a few taps.',
    color: 'from-primary to-primary-light'
  }, {
    icon: TrophyIcon,
    title: 'Win Big Prizes',
    description: 'Watch live draws, check results instantly, and claim your winnings.',
    color: 'from-gold to-gold-light'
  }];
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };
  const slide = slides[currentSlide];
  const Icon = slide.icon;
  return <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className={`w-32 h-32 bg-gradient-to-br ${slide.color} rounded-3xl flex items-center justify-center mb-8 shadow-2xl`}>
          <Icon size={64} className="text-white" strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {slide.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm">
          {slide.description}
        </p>
      </div>

      <div className="p-8">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => <div key={index} className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-primary dark:bg-gold' : 'w-2 bg-gray-300 dark:bg-gray-700'}`} />)}
        </div>

        <Button variant="primary" size="lg" fullWidth onClick={handleNext}>
          {currentSlide < slides.length - 1 ? <>
              Next <ChevronRightIcon size={20} className="ml-2" />
            </> : 'Get Started'}
        </Button>

        {currentSlide < slides.length - 1 && <button onClick={onComplete} className="w-full mt-4 py-3 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-gold transition-colors">
            Skip
          </button>}
      </div>
    </div>;
}