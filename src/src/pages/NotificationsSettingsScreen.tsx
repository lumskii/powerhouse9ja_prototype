import React, { useState } from 'react'
import {
  ArrowLeftIcon,
  BellIcon,
  MailIcon,
  MessageSquareIcon,
  TicketIcon,
  TrophyIcon,
  ShieldAlertIcon,
} from 'lucide-react'
import { Card } from '../components/ui/Card'
interface NotificationsSettingsScreenProps {
  onBack: () => void
}
export function NotificationsSettingsScreen({
  onBack,
}: NotificationsSettingsScreenProps) {
  const [settings, setSettings] = useState({
    push: true,
    email: true,
    sms: false,
    prizeResults: true,
    ticketPurchase: true,
    promotions: false,
    security: true,
  })
  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }
  const Toggle = ({
    active,
    onToggle,
  }: {
    active: boolean
    onToggle: () => void
  }) => (
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full transition-colors relative ${active ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform`}
        style={{
          left: active ? '26px' : '2px',
        }}
      />
    </button>
  )
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
          <h1 className="text-xl font-bold">Notifications</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Channels */}
        <Card>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">
            Notification Channels
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BellIcon size={20} className="text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Push Notifications
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Receive alerts on your device
                  </p>
                </div>
              </div>
              <Toggle
                active={settings.push}
                onToggle={() => toggleSetting('push')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MailIcon size={20} className="text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Updates sent to your inbox
                  </p>
                </div>
              </div>
              <Toggle
                active={settings.email}
                onToggle={() => toggleSetting('email')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquareIcon size={20} className="text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    SMS Notifications
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Text messages for urgent alerts
                  </p>
                </div>
              </div>
              <Toggle
                active={settings.sms}
                onToggle={() => toggleSetting('sms')}
              />
            </div>
          </div>
        </Card>

        {/* Notification Types */}
        <Card>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">
            Notification Types
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrophyIcon size={20} className="text-gold" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Prize Results
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Draw outcomes & win alerts
                  </p>
                </div>
              </div>
              <Toggle
                active={settings.prizeResults}
                onToggle={() => toggleSetting('prizeResults')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TicketIcon
                  size={20}
                  className="text-primary dark:text-green-400"
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Ticket Purchases
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Confirmations & receipts
                  </p>
                </div>
              </div>
              <Toggle
                active={settings.ticketPurchase}
                onToggle={() => toggleSetting('ticketPurchase')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldAlertIcon size={20} className="text-blue-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Account Security
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Logins & password changes
                  </p>
                </div>
              </div>
              <Toggle
                active={settings.security}
                onToggle={() => toggleSetting('security')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BellIcon size={20} className="text-purple-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Promotions & Offers
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Special deals and bonuses
                  </p>
                </div>
              </div>
              <Toggle
                active={settings.promotions}
                onToggle={() => toggleSetting('promotions')}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
