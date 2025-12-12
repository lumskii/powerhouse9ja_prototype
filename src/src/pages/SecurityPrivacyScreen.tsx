import React, { useState } from 'react'
import {
  ArrowLeftIcon,
  ShieldIcon,
  KeyIcon,
  LockIcon,
  Trash2Icon,
  CheckCircleIcon,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
interface SecurityPrivacyScreenProps {
  onBack: () => void
}
export function SecurityPrivacyScreen({ onBack }: SecurityPrivacyScreenProps) {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  })
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [profileVisibility, setProfileVisibility] = useState(true)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }))
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
          <h1 className="text-xl font-bold">Security & Privacy</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Security Status */}
        <Card className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <ShieldIcon
                size={20}
                className="text-green-600 dark:text-green-400"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Account Secure
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Last login: Today, 10:23 AM
              </p>
            </div>
          </div>
        </Card>

        {/* Change Password */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <KeyIcon size={20} className="text-primary dark:text-gold" />
            <h3 className="font-bold text-gray-900 dark:text-white">
              Change Password
            </h3>
          </div>
          <div className="space-y-4">
            <Input
              label="Current Password"
              name="current"
              type="password"
              value={passwords.current}
              onChange={handlePasswordChange}
              placeholder="••••••••"
            />
            <Input
              label="New Password"
              name="new"
              type="password"
              value={passwords.new}
              onChange={handlePasswordChange}
              placeholder="••••••••"
            />
            <Input
              label="Confirm New Password"
              name="confirm"
              type="password"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              placeholder="••••••••"
            />
            <Button variant="outline" fullWidth>
              Update Password
            </Button>
          </div>
        </Card>

        {/* Two-Factor Auth */}
        <Card>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <LockIcon size={20} className="text-primary dark:text-gold" />
              <h3 className="font-bold text-gray-900 dark:text-white">
                Two-Factor Auth
              </h3>
            </div>
            <Badge variant={twoFactorEnabled ? 'success' : 'info'}>
              {twoFactorEnabled ? 'Enabled' : 'Disabled'}
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Add an extra layer of security to your account by requiring a code
            when signing in.
          </p>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`w-12 h-6 rounded-full transition-colors relative ${twoFactorEnabled ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform ${twoFactorEnabled ? 'left-6.5' : 'left-0.5'}`}
              style={{
                left: twoFactorEnabled ? '26px' : '2px',
              }}
            />
          </button>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">
            Privacy Settings
          </h3>

          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                Profile Visibility
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Allow others to see your wins
              </p>
            </div>
            <button
              onClick={() => setProfileVisibility(!profileVisibility)}
              className={`w-12 h-6 rounded-full transition-colors relative ${profileVisibility ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform`}
                style={{
                  left: profileVisibility ? '26px' : '2px',
                }}
              />
            </button>
          </div>
        </Card>

        {/* Delete Account */}
        <div className="pt-4">
          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full flex items-center justify-center gap-2 text-red-600 dark:text-red-400 py-3 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors text-sm font-medium"
            >
              <Trash2Icon size={18} />
              Delete Account
            </button>
          ) : (
            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">
                Are you sure?
              </h4>
              <p className="text-sm text-red-600 dark:text-red-300 mb-4">
                This action cannot be undone. All your data and tickets will be
                permanently removed.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-white dark:bg-gray-800"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1 bg-red-600 hover:bg-red-700 border-red-600"
                >
                  Delete
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
