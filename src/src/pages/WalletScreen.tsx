import React from 'react';
import { PlusIcon, ArrowDownIcon, ArrowUpIcon, CreditCardIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
interface WalletScreenProps {
  onNavigate: (screen: string) => void;
}
export function WalletScreen({
  onNavigate
}: WalletScreenProps) {
  const transactions = [{
    id: 1,
    type: 'credit',
    amount: 50000,
    description: 'Winning Prize - Weekend Special',
    date: '2024-01-08',
    status: 'completed'
  }, {
    id: 2,
    type: 'debit',
    amount: 3000,
    description: 'Ticket Purchase - Mega Jackpot',
    date: '2024-01-07',
    status: 'completed'
  }, {
    id: 3,
    type: 'credit',
    amount: 25000,
    description: 'Wallet Top-up',
    date: '2024-01-05',
    status: 'completed'
  }, {
    id: 4,
    type: 'debit',
    amount: 2000,
    description: 'Ticket Purchase - Daily Draw',
    date: '2024-01-04',
    status: 'completed'
  }];
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      <Header showBalance={false} onMenuClick={() => onNavigate('profile')} />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <p className="text-white/70 text-sm mb-2">Available Balance</p>
            <h2 className="text-4xl font-bold mb-6">₦25,000</h2>

            <div className="flex gap-3">
              <Button variant="secondary" size="sm" className="flex-1">
                <PlusIcon size={16} className="mr-2" />
                Add Funds
              </Button>
              <Button variant="outline" size="sm" className="flex-1 border-white/30 text-white hover:bg-white/10">
                <ArrowDownIcon size={16} className="mr-2" />
                Withdraw
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        {/* <div className="grid grid-cols-3 gap-3">
          <button className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
            <CreditCardIcon size={24} className="text-primary dark:text-gold mx-auto mb-2" />
            <p className="text-xs font-medium text-gray-900 dark:text-white">
              Add Card
            </p>
          </button>
          <button className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
            <ArrowUpIcon size={24} className="text-primary dark:text-gold mx-auto mb-2" />
            <p className="text-xs font-medium text-gray-900 dark:text-white">
              Transfer
            </p>
          </button>
          <button className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
            <ArrowDownIcon size={24} className="text-primary dark:text-gold mx-auto mb-2" />
            <p className="text-xs font-medium text-gray-900 dark:text-white">
              Request
            </p>
          </button>
        </div> */}

        {/* Transactions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Transactions
            </h3>
            <button className="text-primary dark:text-gold text-sm font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {transactions.map(transaction => <Card key={transaction.id} hover>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${transaction.type === 'credit' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                    {transaction.type === 'credit' ? <ArrowDownIcon size={20} className="text-green-600 dark:text-green-400" /> : <ArrowUpIcon size={20} className="text-red-600 dark:text-red-400" />}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      {transaction.description}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {transaction.date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className={`font-bold ${transaction.type === 'credit' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {transaction.type === 'credit' ? '+' : '-'}₦
                      {transaction.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </div>

      <BottomNav active="wallet" onNavigate={onNavigate} />
    </div>;
}