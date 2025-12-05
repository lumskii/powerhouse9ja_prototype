import React, { useState } from 'react';
import { PlusIcon, ArrowDownIcon, ArrowUpIcon, XIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
interface WalletScreenProps {
  onNavigate: (screen: string) => void;
}
export function WalletScreen({
  onNavigate
}: WalletScreenProps) {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const walletBalance = 25000;
  const handleWithdraw = () => {
    // Handle withdrawal logic here
    console.log('Withdraw:', {
      withdrawAmount,
      bankName,
      accountNumber,
      accountName
    });
    setShowWithdrawModal(false);
    // Reset form
    setWithdrawAmount('');
    setBankName('');
    setAccountNumber('');
    setAccountName('');
  };
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
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header showBalance={false} onMenuClick={() => onNavigate('profile')} />

      <div className="pt-20 pb-32 px-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Balance Card */}
          <Card className="bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <p className="text-white/70 text-sm mb-2">Available Balance</p>
              <h2 className="text-4xl font-bold mb-6">
                ₦{walletBalance.toLocaleString()}
              </h2>

              <div className="flex gap-3">
                <Button variant="secondary" size="sm" className="flex-1">
                  <PlusIcon size={16} className="mr-2" />
                  Add Funds
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-white/30 text-white hover:bg-white/10" onClick={() => setShowWithdrawModal(true)}>
                  <ArrowDownIcon size={16} className="mr-2" />
                  Withdraw
                </Button>
              </div>
            </div>
          </Card>

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
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && <div className="fixed inset-0 z-[100] flex items-end justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowWithdrawModal(false)}></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl animate-slide-up">
            <div className="px-6 py-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Withdraw Funds
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Available: ₦{walletBalance.toLocaleString()}
                  </p>
                </div>
                <button onClick={() => setShowWithdrawModal(false)} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <XIcon size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Form */}
              <div className="space-y-4 mb-6">
                <Input label="Amount" type="number" placeholder="Enter amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.target.value)} />

                <Input label="Bank Name" type="text" placeholder="e.g., First Bank" value={bankName} onChange={e => setBankName(e.target.value)} />

                <Input label="Account Number" type="text" placeholder="10-digit account number" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} maxLength={10} />

                <Input label="Account Name" type="text" placeholder="Account holder name" value={accountName} onChange={e => setAccountName(e.target.value)} />
              </div>

              {/* Info Card */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  💡 Withdrawals are processed within 24 hours on business days
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1" onClick={() => setShowWithdrawModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="lg" className="flex-1" onClick={handleWithdraw} disabled={!withdrawAmount || !bankName || !accountNumber || !accountName}>
                  Confirm Withdrawal
                </Button>
              </div>
            </div>
          </div>
        </div>}

      <BottomNav active="wallet" onNavigate={onNavigate} />
    </div>;
}