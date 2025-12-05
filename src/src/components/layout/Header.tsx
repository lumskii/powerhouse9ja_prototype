import React from 'react';
import { BellIcon } from 'lucide-react';
interface HeaderProps {
  showBalance?: boolean;
  balance?: number;
  onMenuClick?: () => void;
}
export function Header({
  showBalance = false,
  balance = 0
}: HeaderProps) {
  return <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2">
      <div className="max-w-md mx-auto">
        {/* Floating Header Content */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
            <img src="https://uploadthingy.s3.us-west-1.amazonaws.com/7PhhF5n42qvpwp1TQSmfPp/phouse_logo_nobg.png" alt="Powerhouse9ja" className="w-full h-full object-contain" />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {showBalance && <div className="bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-400 block">
                  Balance
                </span>
                <p className="font-bold text-sm text-gray-900 dark:text-white">
                  ₦{balance.toLocaleString()}
                </p>
              </div>}

            <button className="w-11 h-11 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center relative border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform active:scale-95">
              <BellIcon size={20} className="text-gray-700 dark:text-gray-300" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>;
}