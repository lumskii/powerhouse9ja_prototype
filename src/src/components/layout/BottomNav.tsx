import React from 'react';
import { HomeIcon, TicketIcon, TrophyIcon, WalletIcon, UserIcon } from 'lucide-react';
interface BottomNavProps {
  active: string;
  onNavigate: (screen: string) => void;
}
export function BottomNav({
  active,
  onNavigate
}: BottomNavProps) {
  const navItems = [{
    id: 'home',
    icon: HomeIcon,
    label: 'Home'
  }, {
    id: 'tickets',
    icon: TicketIcon,
    label: 'Tickets'
  }, {
    id: 'results',
    icon: TrophyIcon,
    label: 'Results'
  }, {
    id: 'wallet',
    icon: WalletIcon,
    label: 'Wallet'
  }, {
    id: 'profile',
    icon: UserIcon,
    label: 'Profile'
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-3">
        {navItems.map(item => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return <button key={item.id} onClick={() => onNavigate(item.id)} className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${isActive ? 'text-primary dark:text-gold bg-primary/10 dark:bg-gold/10' : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-gold'}`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>;
      })}
      </div>
    </nav>;
}