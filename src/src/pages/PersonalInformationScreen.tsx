import React, { useState } from 'react'
import { ArrowLeftIcon, UserIcon, CameraIcon, SaveIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card } from '../components/ui/Card'
interface PersonalInformationScreenProps {
  onBack: () => void
}
export function PersonalInformationScreen({
  onBack,
}: PersonalInformationScreenProps) {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+234 801 234 5678',
    dob: '1990-05-15',
    address: '123 Victoria Island, Lagos',
  })
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1500)
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
          <h1 className="text-xl font-bold">Personal Information</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800">
              <UserIcon size={48} className="text-white" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-gold rounded-full shadow-lg hover:bg-gold-light transition-colors text-white">
              <CameraIcon size={18} />
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Tap camera icon to update photo
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center py-4">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              12
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total Tickets
            </p>
          </Card>
          <Card className="text-center py-4">
            <p className="text-2xl font-bold text-primary dark:text-gold">3</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Prizes Won
            </p>
          </Card>
        </div>

        {/* Form */}
        <Card>
          <div className="space-y-4">
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            <Input
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>
        </Card>

        {showSuccess && (
          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-xl text-center text-sm font-medium animate-pulse">
            Changes saved successfully!
          </div>
        )}

        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Saving...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <SaveIcon size={18} />
              Save Changes
            </span>
          )}
        </Button>
      </div>
    </div>
  )
}
