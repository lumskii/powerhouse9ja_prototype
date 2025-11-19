import React, { useState } from 'react';
import { MailIcon, LockIcon, ShieldCheckIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
interface LoginScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}
export function LoginScreen({
  onLogin,
  onRegister
}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl overflow-hidden bg-white">
            <img src="https://uploadthingy.s3.us-west-1.amazonaws.com/7PhhF5n42qvpwp1TQSmfPp/phouse_logo_nobg.png" alt="Powerhouse9ja Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Login to continue your winning streak
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input type="email" label="Email or Phone" placeholder="Enter your email or phone" icon={<MailIcon size={20} />} value={email} onChange={e => setEmail(e.target.value)} required />

            <Input type="password" label="Password" placeholder="Enter your password" icon={<LockIcon size={20} />} value={password} onChange={e => setPassword(e.target.value)} required />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <button type="button" className="text-primary dark:text-gold hover:underline">
                Forgot password?
              </button>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Login Securely
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <ShieldCheckIcon size={16} className="text-green-500" />
              <span>256-bit SSL Encrypted</span>
            </div>
          </form>
        </div>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <button onClick={onRegister} className="text-primary dark:text-gold font-semibold hover:underline">
            Register Now
          </button>
        </p>
      </div>
    </div>;
}