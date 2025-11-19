import React from 'react';
import { UserIcon, ShieldIcon, BellIcon, HelpCircleIcon, LogOutIcon, MoonIcon, SunIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Card } from '../components/ui/Card';
import { useTheme } from '../contexts/ThemeContext';
interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}
export function ProfileScreen({
  onNavigate,
  onLogout
}: ProfileScreenProps) {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const menuItems = [{
    icon: UserIcon,
    label: 'Personal Information',
    action: () => {}
  }, {
    icon: ShieldIcon,
    label: 'Security & Privacy',
    action: () => {}
  }, {
    icon: BellIcon,
    label: 'Notifications',
    action: () => {}
  }, {
    icon: HelpCircleIcon,
    label: 'Help & Support',
    action: () => {}
  }];
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      <Header showBalance={false} onMenuClick={() => {}} />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
            <UserIcon size={40} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            John Doe
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            john.doe@email.com
          </p>
          <div className="flex gap-4 justify-center text-sm">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">12</p>
              <p className="text-gray-500 dark:text-gray-400">Tickets</p>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">3</p>
              <p className="text-gray-500 dark:text-gray-400">Wins</p>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <p className="font-bold text-primary dark:text-gold">₦2.5M</p>
              <p className="text-gray-500 dark:text-gray-400">Total Won</p>
            </div>
          </div>
        </Card>

        {/* Theme Toggle */}
        <Card>
          <button onClick={toggleTheme} className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'light' ? <MoonIcon size={24} className="text-gray-600 dark:text-gray-400" /> : <SunIcon size={24} className="text-gray-600 dark:text-gray-400" />}
              <span className="font-medium text-gray-900 dark:text-white">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
            <div className={`w-12 h-6 rounded-full transition-colors ${theme === 'dark' ? 'bg-primary' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform mt-0.5 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
            </div>
          </button>
        </Card>

        {/* Menu Items */}
        <Card>
          <div className="space-y-1">
            {menuItems.map((item, index) => {
            const Icon = item.icon;
            return <button key={index} onClick={item.action} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Icon size={20} className="text-gray-600 dark:text-gray-400" />
                  <span className="flex-1 text-left font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </span>
                  <span className="text-gray-400">›</span>
                </button>;
          })}
          </div>
        </Card>

        {/* Logout */}
        <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-4 rounded-xl font-semibold hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
          <LogOutIcon size={20} />
          Logout
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Version 1.0.0 • © 2024 Powerhouse9ja
        </p>
      </div>

      <BottomNav active="profile" onNavigate={onNavigate} />
    </div>;
}