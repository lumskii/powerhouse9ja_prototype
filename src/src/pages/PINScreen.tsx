import React, { useState } from 'react'
import {
  ArrowLeftIcon,
  LockIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

interface PINScreenProps {
  onBack: () => void
}

export function PINScreen({ onBack }: PINScreenProps) {
  const [pinMode, setPinMode] = useState<'view' | 'create' | 'change'>('view')
  const [hasPIN, setHasPIN] = useState(false)
  const [step, setStep] = useState<'enter' | 'confirm'>('enter')
  const [pin, setPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [currentPin, setCurrentPin] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [pinVisible, setPinVisible] = useState(false)
  const pinBoxClasses =
    'w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800'
  const pinGridClasses = 'flex gap-2 sm:gap-3 justify-center'
  const pinInputClass = 'absolute inset-0 w-full h-full opacity-0'

  const handlePinInput = (value: string) => {
    if (value.length > 4 || !/^\d*$/.test(value)) return
    
    if (pinMode === 'create' || pinMode === 'change') {
      if (step === 'enter') {
        setPin(value)
      } else {
        setConfirmPin(value)
      }
    }
  }

  const handleVerifyCurrentPin = () => {
    if (currentPin.length !== 4) {
      setError('PIN must be 4 digits')
      return
    }
    // In a real app, verify the PIN against backend
    setError('')
    setStep('enter')
  }

  const handleCreatePin = () => {
    if (pin.length !== 4) {
      setError('PIN must be 4 digits')
      return
    }

    if (step === 'enter') {
      setStep('confirm')
      setError('')
      return
    }

    if (pin !== confirmPin) {
      setError('PINs do not match')
      return
    }

    // In a real app, save PIN to backend
    setHasPIN(true)
    setSuccess('PIN created successfully')
    setPin('')
    setConfirmPin('')
    setStep('enter')
    setPinMode('view')
    setError('')
    setTimeout(() => setSuccess(''), 3000)
  }

  const handleChangePin = () => {
    if (!hasPIN) {
      setError('No existing PIN found')
      return
    }

    if (currentPin.length !== 4) {
      setError('Current PIN must be 4 digits')
      return
    }

    if (pin !== confirmPin) {
      setError('New PINs do not match')
      return
    }

    // In a real app, verify current PIN and update new PIN
    setHasPIN(true)
    setSuccess('PIN changed successfully')
    setPin('')
    setConfirmPin('')
    setCurrentPin('')
    setStep('enter')
    setPinMode('view')
    setError('')
    setTimeout(() => setSuccess(''), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light dark:from-gray-800 dark:to-gray-900 text-white px-4 py-6 pt-12 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeftIcon size={24} />
          </button>
          <h1 className="text-xl font-bold">Transaction PIN</h1>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* PIN Status */}
        {pinMode === 'view' && (
          <Card className={`${hasPIN ? 'bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800' : 'bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${hasPIN ? 'bg-green-100 dark:bg-green-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'}`}>
                {hasPIN ? (
                  <CheckCircleIcon
                    size={20}
                    className="text-green-600 dark:text-green-400"
                  />
                ) : (
                  <AlertCircleIcon
                    size={20}
                    className="text-yellow-600 dark:text-yellow-400"
                  />
                )}
              </div>
              <div>
                <h3 className={`font-bold ${hasPIN ? 'text-green-700 dark:text-green-400' : 'text-yellow-700 dark:text-yellow-400'}`}>
                  {hasPIN ? 'PIN Set' : 'No PIN Set'}
                </h3>
                <p className={`text-xs ${hasPIN ? 'text-green-600 dark:text-green-300' : 'text-yellow-600 dark:text-yellow-300'}`}>
                  {hasPIN
                    ? 'Your PIN is configured for secure transactions'
                    : 'Create a PIN to secure your withdrawals and ticket purchases'}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Success Message */}
        {success && (
          <Card className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2">
              <CheckCircleIcon size={20} className="text-green-600 dark:text-green-400" />
              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                {success}
              </p>
            </div>
          </Card>
        )}

        {/* Error Message */}
        {error && (
          <Card className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-2">
              <AlertCircleIcon size={20} className="text-red-600 dark:text-red-400" />
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                {error}
              </p>
            </div>
          </Card>
        )}

        {/* Create PIN Section */}
        {pinMode === 'create' && !hasPIN && (
          <Card>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <LockIcon size={20} className="text-primary dark:text-gold" />
              Create Transaction PIN
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Set a 4-digit PIN for withdrawals and ticket purchases
            </p>

            <div className="space-y-4">
              {step === 'enter' && (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white block mb-2">
                      Enter 4-Digit PIN
                    </label>
                    <div className="relative">
                      <div className={pinGridClasses}>
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={pinBoxClasses}>
                            {pin[i] ? (pinVisible ? pin[i] : '•') : ''}
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        value={pin}
                        onChange={(e) => handlePinInput(e.target.value)}
                        className={pinInputClass}
                        maxLength={4}
                        inputMode="numeric"
                        autoFocus
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setPinVisible(!pinVisible)}
                    className="text-sm text-primary dark:text-gold font-medium hover:underline"
                  >
                    {pinVisible ? 'Hide PIN' : 'Show PIN'}
                  </button>
                </>
              )}

              {step === 'confirm' && (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white block mb-2">
                      Confirm PIN
                    </label>
                    <div className="relative">
                      <div className={pinGridClasses}>
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={pinBoxClasses}>
                            {confirmPin[i] ? (pinVisible ? confirmPin[i] : '•') : ''}
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        value={confirmPin}
                        onChange={(e) => handlePinInput(e.target.value)}
                        className={pinInputClass}
                        maxLength={4}
                        inputMode="numeric"
                        autoFocus
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setPinVisible(!pinVisible)}
                    className="text-sm text-primary dark:text-gold font-medium hover:underline"
                  >
                    {pinVisible ? 'Hide PIN' : 'Show PIN'}
                  </button>
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setPinMode('view')
                    setPin('')
                    setConfirmPin('')
                    setStep('enter')
                    setError('')
                    setPinVisible(false)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={handleCreatePin}
                  disabled={step === 'enter' ? pin.length !== 4 : confirmPin.length !== 4}
                >
                  {step === 'enter' ? 'Next' : 'Create PIN'}
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Change PIN Section */}
        {pinMode === 'change' && hasPIN && (
          <Card>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <LockIcon size={20} className="text-primary dark:text-gold" />
              Change Transaction PIN
            </h3>

            <div className="space-y-4">
              {currentPin === '' && step === 'enter' && (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white block mb-2">
                      Enter Current PIN
                    </label>
                    <div className="relative">
                      <div className={pinGridClasses}>
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={pinBoxClasses}>
                            {currentPin[i] ? '•' : ''}
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        value={currentPin}
                        onChange={(e) => {
                          if (e.target.value.length > 4 || !/^\d*$/.test(e.target.value)) return
                          setCurrentPin(e.target.value)
                        }}
                        className={pinInputClass}
                        maxLength={4}
                        inputMode="numeric"
                        autoFocus
                      />
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={handleVerifyCurrentPin}
                    disabled={currentPin.length !== 4}
                  >
                    Verify PIN
                  </Button>
                </>
              )}

              {currentPin !== '' && step === 'enter' && (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white block mb-2">
                      Enter New PIN
                    </label>
                    <div className="relative">
                      <div className={pinGridClasses}>
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={pinBoxClasses}>
                            {pin[i] ? (pinVisible ? pin[i] : '•') : ''}
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        value={pin}
                        onChange={(e) => handlePinInput(e.target.value)}
                        className={pinInputClass}
                        maxLength={4}
                        inputMode="numeric"
                        autoFocus
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setPinVisible(!pinVisible)}
                    className="text-sm text-primary dark:text-gold font-medium hover:underline"
                  >
                    {pinVisible ? 'Hide PIN' : 'Show PIN'}
                  </button>
                </>
              )}

              {currentPin !== '' && step === 'confirm' && (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white block mb-2">
                      Confirm New PIN
                    </label>
                    <div className="relative">
                      <div className={pinGridClasses}>
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={pinBoxClasses}>
                            {confirmPin[i] ? (pinVisible ? confirmPin[i] : '•') : ''}
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        value={confirmPin}
                        onChange={(e) => handlePinInput(e.target.value)}
                        className={pinInputClass}
                        maxLength={4}
                        inputMode="numeric"
                        autoFocus
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setPinVisible(!pinVisible)}
                    className="text-sm text-primary dark:text-gold font-medium hover:underline"
                  >
                    {pinVisible ? 'Hide PIN' : 'Show PIN'}
                  </button>
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setPinMode('view')
                    setPin('')
                    setConfirmPin('')
                    setCurrentPin('')
                    setStep('enter')
                    setError('')
                    setPinVisible(false)
                  }}
                >
                  Cancel
                </Button>
                {currentPin === '' && step === 'enter' ? null : (
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={() => {
                      if (step === 'enter' && pin.length === 4) {
                        setStep('confirm')
                      } else if (step === 'confirm' && confirmPin.length === 4) {
                        handleChangePin()
                      }
                    }}
                    disabled={step === 'enter' ? pin.length !== 4 : confirmPin.length !== 4}
                  >
                    {step === 'enter' ? 'Next' : 'Change PIN'}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        )}

        {/* View PIN Options */}
        {pinMode === 'view' && (
          <div className="space-y-3">
            {!hasPIN ? (
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  setPinMode('create')
                  setPin('')
                  setConfirmPin('')
                  setStep('enter')
                  setError('')
                }}
              >
                Create PIN
              </Button>
            ) : (
              <>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    setPinMode('change')
                    setPin('')
                    setConfirmPin('')
                    setCurrentPin('')
                    setStep('enter')
                    setError('')
                  }}
                >
                  Change PIN
                </Button>
                <Card className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    PIN Protection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Your PIN is required for:
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1 list-disc list-inside">
                    <li>Withdrawing funds</li>
                    <li>Purchasing tickets</li>
                  </ul>
                </Card>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
