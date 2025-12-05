import React, { useState } from 'react';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { SplashScreen } from './src/pages/SplashScreen';
import { OnboardingScreen } from './src/pages/OnboardingScreen';
import { LoginScreen } from './src/pages/LoginScreen';
import { RegisterScreen } from './src/pages/RegisterScreen';
import { HomeScreen } from './src/pages/HomeScreen';
import { TicketPurchaseScreen } from './src/pages/TicketPurchaseScreen';
import { MyTicketsScreen } from './src/pages/MyTicketsScreen';
import { DrawResultsScreen } from './src/pages/DrawResultsScreen';
import { WinningsScreen } from './src/pages/WinningsScreen';
import { WalletScreen } from './src/pages/WalletScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
type Screen = 'splash' | 'onboarding' | 'login' | 'register' | 'home' | 'purchase' | 'tickets' | 'results' | 'winnings' | 'wallet' | 'profile';
export function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />;
      case 'onboarding':
        return <OnboardingScreen onComplete={() => setCurrentScreen('login')} />;
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('home')} onRegister={() => setCurrentScreen('register')} />;
      case 'register':
        return <RegisterScreen onRegister={() => setCurrentScreen('home')} onLogin={() => setCurrentScreen('login')} />;
      case 'home':
        return <HomeScreen onNavigate={screen => setCurrentScreen(screen as Screen)} onBuyTicket={() => setCurrentScreen('purchase')} />;
      case 'purchase':
        return <TicketPurchaseScreen onBack={() => setCurrentScreen('home')} onComplete={() => setCurrentScreen('tickets')} />;
      case 'tickets':
        return <MyTicketsScreen onNavigate={screen => setCurrentScreen(screen as Screen)} />;
      case 'results':
        return <DrawResultsScreen onNavigate={screen => setCurrentScreen(screen as Screen)} />;
      case 'winnings':
        return <WinningsScreen onNavigate={screen => setCurrentScreen(screen as Screen)} />;
      case 'wallet':
        return <WalletScreen onNavigate={screen => setCurrentScreen(screen as Screen)} />;
      case 'profile':
        return <ProfileScreen onNavigate={screen => setCurrentScreen(screen as Screen)} onLogout={() => setCurrentScreen('login')} />;
      default:
        return <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />;
    }
  };
  return <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {renderScreen()}
      </div>
    </ThemeProvider>;
}