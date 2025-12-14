import React from 'react';
import { TrophyIcon, CalendarIcon, PackageIcon, CheckCircleIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
interface WinningsScreenProps {
  onNavigate: (screen: string) => void;
}
export function WinningsScreen({
  onNavigate
}: WinningsScreenProps) {
  const winnings = [{
    id: 1,
    prize: '5KVA Generator',
    icon: '⚡',
    draw: 'December 2024 Draw',
    date: '2024-12-15',
    ticketId: 'PH9-2024-001236',
    status: 'delivered',
    tier: '50%'
  }, {
    id: 2,
    prize: 'Samsung TV 65"',
    icon: '📺',
    draw: 'November 2024 Draw',
    date: '2024-11-20',
    ticketId: 'PH9-2024-000892',
    status: 'delivered',
    tier: '75%'
  }, {
    id: 3,
    prize: 'iPhone 14 Pro',
    icon: '📱',
    draw: 'October 2024 Draw',
    date: '2024-10-10',
    ticketId: 'PH9-2024-000456',
    status: 'in_transit',
    tier: '50%'
  }];
  const totalWinnings = winnings.length;
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header showBalance balance={25000} onMenuClick={() => onNavigate('profile')} />

      <div className="pt-20 pb-32 px-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              My Winnings
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Your prize history and delivery status
            </p>
          </div>

          {/* Stats Card */}
          <Card className="bg-gradient-to-br from-gold to-gold-light text-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <TrophyIcon size={32} className="text-primary" />
                </div>
                <div>
                  <p className="text-primary/70 text-sm font-medium">
                    Total Prizes Won
                  </p>
                  <h2 className="text-4xl font-bold text-primary">
                    {totalWinnings}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-primary/70 text-xs mb-1">Delivered</p>
                  <p className="text-2xl font-bold text-primary">
                    {winnings.filter(w => w.status === 'delivered').length}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Winnings List */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Prize History
            </h3>

            {winnings.length > 0 ? <div className="space-y-4">
                {winnings.map(winning => <Card key={winning.id} hover>
                    <div className="flex items-start gap-4">
                      {/* Prize Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                        {winning.icon}
                      </div>

                      {/* Prize Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="gold" className="text-xs">
                            {winning.tier} Tier
                          </Badge>
                          <Badge variant={winning.status === 'delivered' ? 'success' : 'info'} className="text-xs">
                            {winning.status === 'delivered' ? <>
                                <CheckCircleIcon size={10} className="mr-1" />
                                Delivered
                              </> : <>
                                <PackageIcon size={10} className="mr-1" />
                                In Transit
                              </>}
                          </Badge>
                        </div>

                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                          {winning.prize}
                        </h4>

                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <p className="flex items-center gap-1">
                            <CalendarIcon size={14} />
                            {winning.draw} • {winning.date}
                          </p>
                          <p className="font-mono text-xs">
                            Ticket: {winning.ticketId}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>)}
              </div> : <Card className="text-center py-12">
                <TrophyIcon size={48} className="text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No Winnings Yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Keep playing to win amazing prizes!
                </p>
              </Card>}
          </div>

          {/* Info Card */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-200 dark:border-gray-600">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <PackageIcon size={20} className="text-primary dark:text-gold" />
              Prize Delivery
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              All prizes are delivered to your registered address within 7-14
              business days after the draw. Track your delivery status here.
            </p>
          </Card>
        </div>
      </div>

      <BottomNav active="winnings" onNavigate={onNavigate} />
    </div>;
}