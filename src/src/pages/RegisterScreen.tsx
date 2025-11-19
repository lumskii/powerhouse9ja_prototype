import React, { useState } from 'react';
import { UserIcon, MailIcon, PhoneIcon, LockIcon, ShieldCheckIcon, CheckCircleIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
interface RegisterScreenProps {
  onRegister: () => void;
  onLogin: () => void;
}
export function RegisterScreen({
  onRegister,
  onLogin
}: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // If validation passes, proceed with registration
    onRegister();
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl overflow-hidden bg-white">
            <img src="/phouse_logo_nobg.png" alt="Powerhouse9ja Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Join thousands of winners today
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input type="text" label="Full Name" placeholder="Enter your full name" icon={<UserIcon size={20} />} value={formData.fullName} onChange={e => setFormData({
            ...formData,
            fullName: e.target.value
          })} error={errors.fullName} required />

            <Input type="email" label="Email Address" placeholder="Enter your email" icon={<MailIcon size={20} />} value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} error={errors.email} required />

            <Input type="tel" label="Phone Number" placeholder="Enter your phone number" icon={<PhoneIcon size={20} />} value={formData.phone} onChange={e => setFormData({
            ...formData,
            phone: e.target.value
          })} error={errors.phone} required />

            <Input type="password" label="Password" placeholder="Create a strong password" icon={<LockIcon size={20} />} value={formData.password} onChange={e => setFormData({
            ...formData,
            password: e.target.value
          })} error={errors.password} required />

            <Input type="password" label="Confirm Password" placeholder="Re-enter your password" icon={<LockIcon size={20} />} value={formData.confirmPassword} onChange={e => setFormData({
            ...formData,
            confirmPassword: e.target.value
          })} error={errors.confirmPassword} required />

            <div>
              <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                <input type="checkbox" checked={formData.agreeToTerms} onChange={e => setFormData({
                ...formData,
                agreeToTerms: e.target.checked
              })} className="mt-1 rounded border-gray-300" />
                <span>
                  I agree to the{' '}
                  <button type="button" className="text-primary dark:text-gold hover:underline">
                    Terms & Conditions
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-primary dark:text-gold hover:underline">
                    Privacy Policy
                  </button>
                </span>
              </label>
              {errors.agreeToTerms && <p className="mt-2 text-sm text-red-500">
                  {errors.agreeToTerms}
                </p>}
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Create Account
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <ShieldCheckIcon size={16} className="text-green-500" />
              <span>Secure & Encrypted Registration</span>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <CheckCircleIcon size={20} className="text-green-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Instant Setup
                </p>
              </div>
              <div className="text-center">
                <ShieldCheckIcon size={20} className="text-green-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  100% Secure
                </p>
              </div>
              <div className="text-center">
                <CheckCircleIcon size={20} className="text-green-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  No Hidden Fees
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <button onClick={onLogin} className="text-primary dark:text-gold font-semibold hover:underline">
            Login Here
          </button>
        </p>
      </div>
    </div>;
}