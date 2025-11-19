import React from 'react';
import { BellIcon, MenuIcon } from 'lucide-react';
interface HeaderProps {
  showBalance?: boolean;
  balance?: number;
  onMenuClick?: () => void;
}
export function Header({
  showBalance = false,
  balance = 0,
  onMenuClick
}: HeaderProps) {
  return <header className="bg-gradient-to-r from-primary to-primary-light dark:from-gray-800 dark:to-gray-900 text-white px-4 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <button onClick={onMenuClick} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <MenuIcon size={24} />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
            <img src="https://uploadthingy.s3.us-west-1.amazonaws.com/7PhhF5n42qvpwp1TQSmfPp/phouse_logo_nobg.png" alt="Powerhouse9ja Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-lg">Powerhouse9ja</span>
        </div>

        <div className="flex items-center gap-3">
          {showBalance && <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <span className="text-xs opacity-80">Balance</span>
              <p className="font-bold text-sm">₦{balance.toLocaleString()}</p>
            </div>}
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
            <BellIcon size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></span>
          </button>
        </div>
      </div>
    </header>;
}