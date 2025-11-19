import React, { useEffect } from 'react';
interface SplashScreenProps {
  onComplete: () => void;
}
export function SplashScreen({
  onComplete
}: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary-dark flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light rounded-full animate-pulse-slow opacity-50"></div>
          <div className="absolute inset-2 rounded-full flex items-center justify-center shadow-2xl">
            <img src="public/phouse_logo_nobg.png" alt="Powerhouse9ja Logo" className="w-full h-full object-contain" />
          </div>
          <div className="absolute inset-0 border-4 border-gold/30 rounded-full animate-spin-slow"></div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-2">Powerhouse9ja</h1>
        <p className="text-gold text-lg font-medium">
          Your Winning Moment Awaits
        </p>

        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{
          animationDelay: '0.2s'
        }}></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{
          animationDelay: '0.4s'
        }}></div>
        </div>
      </div>
    </div>;
}