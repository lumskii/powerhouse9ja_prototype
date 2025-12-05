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
  return <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2">
      <div className="max-w-md mx-auto">
        {/* Floating Navigation Items */}
        <div className="flex items-center justify-around px-2 py-3 gap-2">
          {navItems.map(item => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return <button key={item.id} onClick={() => onNavigate(item.id)} className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all shadow-lg border ${isActive ? 'bg-white dark:bg-gray-800 text-primary dark:text-gold border-primary/20 dark:border-gold/20 scale-105' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 hover:text-primary dark:hover:text-gold hover:scale-105 active:scale-95'}`}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>;
        })}
        </div>
      </div>
    </nav>;
}