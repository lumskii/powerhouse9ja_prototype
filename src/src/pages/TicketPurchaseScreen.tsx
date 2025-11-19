import React, { useState } from 'react';
import { ArrowLeftIcon, MinusIcon, PlusIcon, WalletIcon, CheckCircleIcon, TrophyIcon, UnlockIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
interface TicketPurchaseScreenProps {
  onBack: () => void;
  onComplete: () => void;
}
export function TicketPurchaseScreen({
  onBack,
  onComplete
}: TicketPurchaseScreenProps) {
  const [step, setStep] = useState<'select' | 'confirm' | 'success'>('select');
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = 1000;
  const total = quantity * ticketPrice;
  const walletBalance = 25000;
  const currentProgress = 67; // Updated to 67%
  const nextMilestone = 75;
  const nextPrize = 'iPhone 15 Pro Max';
  const handlePurchase = () => {
    if (step === 'select') {
      setStep('confirm');
    } else if (step === 'confirm') {
      setStep('success');
      setTimeout(onComplete, 2000);
    }
  };
  if (step === 'success') {
    return <div className="min-h-screen bg-gradient-to-br from-primary to-primary-light flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
            <CheckCircleIcon size={48} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Tickets Purchased!
          </h2>
          <p className="text-white/80 text-lg mb-4">Good luck in the draw</p>
          <div className="text-6xl mb-2">🎟️</div>
          <p className="text-white font-semibold">×{quantity} Tickets Added</p>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-primary to-primary-light dark:from-gray-800 dark:to-gray-900 text-white px-4 py-6">
        <button onClick={onBack} className="mb-4 p-2 hover:bg-white/10 rounded-lg transition-colors">
          <ArrowLeftIcon size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-2">Buy Raffle Tickets</h1>
        <p className="text-white/80">Grand Prize: 3-Bedroom Duplex</p>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Current Progress Card */}
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
          <div className="flex items-start justify-between mb-3">
            <div>
              <Badge variant="info" className="mb-2">
                Next Unlock
              </Badge>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                {nextPrize}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Unlocks at {nextMilestone}%
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl">
              📱
            </div>
          </div>

          <div className="pt-6">
            <ProgressBar progress={currentProgress} height="md" milestones={[50, 75, 100]} showPercentage={false} />
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Only {nextMilestone - currentProgress}% more to unlock!
            </p>
            <Badge variant="success" className="text-xs">
              <CheckCircleIcon size={10} className="mr-1" />
              50% Done
            </Badge>
          </div>
        </Card>

        {step === 'select' && <>
            <Card>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Select Quantity
              </h3>
              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 bg-white dark:bg-gray-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow active:scale-95">
                  <MinusIcon size={24} className="text-gray-700 dark:text-gray-300" />
                </button>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900 dark:text-white">
                    {quantity}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tickets
                  </p>
                </div>
                <button onClick={() => setQuantity(Math.min(50, quantity + 1))} className="w-12 h-12 bg-white dark:bg-gray-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow active:scale-95">
                  <PlusIcon size={24} className="text-gray-700 dark:text-gray-300" />
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                More tickets = Better chances to win!
              </p>
            </Card>

            <Card>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Price per ticket</span>
                  <span>₦{ticketPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Quantity</span>
                  <span>×{quantity}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-primary dark:text-gold">
                    ₦{total.toLocaleString()}
                  </span>
                </div>
              </div>
            </Card>
          </>}

        {step === 'confirm' && <>
            <Card>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Payment Method
              </h3>

              <div className="bg-gradient-to-r from-primary to-primary-light dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <WalletIcon size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Wallet Balance</p>
                      <p className="text-sm text-white/80">
                        Pay from your wallet
                      </p>
                    </div>
                  </div>
                  <CheckCircleIcon size={24} className="text-gold" />
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs text-white/70 mb-1">
                    Available Balance
                  </p>
                  <p className="text-2xl font-bold">
                    ₦{walletBalance.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-400 text-center">
                  ✓ Sufficient balance • Instant purchase
                </p>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Order Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Raffle Tickets × {quantity}</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Processing Fee</span>
                  <span className="text-green-600 dark:text-green-400">
                    FREE
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-primary dark:text-gold">
                    ₦{total.toLocaleString()}
                  </span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-gold/10 to-gold/5 border-2 border-gold/30">
              <div className="flex items-start gap-3">
                <TrophyIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    You're helping unlock prizes!
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your purchase brings everyone closer to the {nextMilestone}%
                    milestone.
                  </p>
                </div>
              </div>
            </Card>
          </>}

        <Button variant="primary" size="lg" fullWidth onClick={handlePurchase}>
          {step === 'select' ? 'Continue to Payment' : 'Confirm Purchase'}
        </Button>

        {step === 'select' && <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Secure wallet payment • No hidden fees
          </p>}
      </div>
    </div>;
}