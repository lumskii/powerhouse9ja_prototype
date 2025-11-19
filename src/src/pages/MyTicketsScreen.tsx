import React, { useState } from 'react';
import { QrCodeIcon, ShareIcon, DownloadIcon, ClockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
interface MyTicketsScreenProps {
  onNavigate: (screen: string) => void;
}
export function MyTicketsScreen({
  onNavigate
}: MyTicketsScreenProps) {
  const [visibleTicketIds, setVisibleTicketIds] = useState<Set<string>>(new Set());
  const tickets = [{
    id: 'PH9-2024-001234',
    draw: 'Mega Jackpot',
    date: '2024-01-15',
    status: 'active'
  }, {
    id: 'PH9-2024-001235',
    draw: 'Daily Draw',
    date: '2024-01-12',
    status: 'active'
  }, {
    id: 'PH9-2024-001236',
    draw: 'Weekend Special',
    date: '2024-01-10',
    status: 'drawn'
  }];
  const toggleTicketIdVisibility = (ticketId: string) => {
    setVisibleTicketIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(ticketId)) {
        newSet.delete(ticketId);
      } else {
        newSet.add(ticketId);
      }
      return newSet;
    });
  };
  const isTicketIdVisible = (ticketId: string) => visibleTicketIds.has(ticketId);
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      <Header showBalance balance={25000} onMenuClick={() => onNavigate('profile')} />

      <div className="max-w-md mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          My Tickets
        </h1>

        <div className="space-y-4">
          {tickets.map(ticket => {
          const isVisible = isTicketIdVisible(ticket.id);
          return <Card key={ticket.id} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant={ticket.status === 'active' ? 'success' : 'info'} className="mb-2">
                        {ticket.status === 'active' ? <>
                            <ClockIcon size={12} className="mr-1" />
                            Active
                          </> : 'Drawn'}
                      </Badge>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                        {ticket.draw}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Draw Date: {ticket.date}
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                      <QrCodeIcon size={32} className="text-primary dark:text-gold" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-primary-light dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-white/70 text-xs">Ticket ID</p>
                      <button onClick={() => toggleTicketIdVisibility(ticket.id)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors active:scale-95" aria-label={isVisible ? 'Hide ticket ID' : 'Show ticket ID'}>
                        {isVisible ? <EyeOffIcon size={18} className="text-white" /> : <EyeIcon size={18} className="text-white" />}
                      </button>
                    </div>
                    <div className="overflow-hidden">
                      <p className={`text-white font-mono text-lg font-bold tracking-wide transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {isVisible ? ticket.id : ''}
                      </p>
                      {!isVisible && <p className="text-white font-mono text-lg font-bold tracking-wider">
                          ••••••••••••••
                        </p>}
                    </div>
                    <p className="text-white/50 text-xs mt-2">
                      {isVisible ? 'Click eye icon to hide' : 'Click eye icon to reveal'}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ShareIcon size={16} className="mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <DownloadIcon size={16} className="mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
              </Card>;
        })}
        </div>
      </div>

      <BottomNav active="tickets" onNavigate={onNavigate} />
    </div>;
}