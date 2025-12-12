import React, { useState } from 'react'
import {
  ArrowLeftIcon,
  MessageCircleIcon,
  MailIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card } from '../components/ui/Card'
interface HelpSupportScreenProps {
  onBack: () => void
}
export function HelpSupportScreen({ onBack }: HelpSupportScreenProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    subject: '',
    message: '',
  })
  const faqs = [
    {
      question: 'How do I buy a ticket?',
      answer:
        'Navigate to the Home screen and click "Buy Tickets". Select your desired quantity and proceed to payment using your wallet balance or card.',
    },
    {
      question: 'When are the draws held?',
      answer:
        'Draws are held automatically when the ticket sales reach 100%. You can track progress on the Home screen.',
    },
    {
      question: 'How do I claim my winnings?',
      answer:
        'Winnings are automatically credited to your wallet for cash prizes. For physical items, our team will contact you within 24 hours.',
    },
    {
      question: 'Is my payment information secure?',
      answer:
        'Yes, we use bank-grade encryption and do not store your full card details. All transactions are processed securely.',
    },
  ]
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
          <h1 className="text-xl font-bold">Help & Support</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <MessageCircleIcon
              size={32}
              className="mx-auto text-primary dark:text-gold mb-2"
            />
            <h3 className="font-bold text-gray-900 dark:text-white">
              Live Chat
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Available 24/7
            </p>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <MailIcon
              size={32}
              className="mx-auto text-primary dark:text-gold mb-2"
            />
            <h3 className="font-bold text-gray-900 dark:text-white">
              Email Us
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Response in 24h
            </p>
          </Card>
        </div>

        {/* FAQs */}
        <Card>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-2 last:pb-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-2 text-left"
                >
                  <span className="font-medium text-sm text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUpIcon size={16} className="text-gray-500" />
                  ) : (
                    <ChevronDownIcon size={16} className="text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 pb-2 animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Contact Form */}
        <Card>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">
            Send us a message
          </h3>
          <div className="space-y-4">
            <Input
              label="Subject"
              value={contactForm.subject}
              onChange={(e) =>
                setContactForm((prev) => ({
                  ...prev,
                  subject: e.target.value,
                }))
              }
              placeholder="What do you need help with?"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-gold focus:border-transparent outline-none transition-all resize-none h-32"
                placeholder="Describe your issue..."
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />
            </div>
            <Button variant="primary" fullWidth>
              Send Message
            </Button>
          </div>
        </Card>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a
            href="#"
            className="hover:text-primary dark:hover:text-gold flex items-center gap-1"
          >
            Terms of Service <ExternalLinkIcon size={12} />
          </a>
          <a
            href="#"
            className="hover:text-primary dark:hover:text-gold flex items-center gap-1"
          >
            Privacy Policy <ExternalLinkIcon size={12} />
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          App Version 1.0.0 (Build 2024.01)
        </p>
      </div>
    </div>
  )
}
