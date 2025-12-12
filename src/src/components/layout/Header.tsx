import React, { useEffect, useState, useRef } from 'react'
import {
  BellIcon,
  XIcon,
  CheckCircleIcon,
  TrophyIcon,
  TicketIcon,
  InfoIcon,
} from 'lucide-react'
interface HeaderProps {
  showBalance?: boolean
  balance?: number
  onMenuClick?: () => void
}
interface Notification {
  id: number
  type: 'win' | 'ticket' | 'system'
  title: string
  message: string
  time: string
  read: boolean
}
export function Header({ showBalance = false, balance = 0 }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const notificationRef = useRef<HTMLDivElement>(null)
  // Sample notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'win',
      title: 'You Won!',
      message: 'Congratulations! You won ₦50,000 in the Weekly Draw.',
      time: '2m ago',
      read: false,
    },
    {
      id: 2,
      type: 'ticket',
      title: 'Ticket Purchased',
      message: 'Successfully purchased 5 tickets for the Grand Draw.',
      time: '1h ago',
      read: false,
    },
    {
      id: 3,
      type: 'system',
      title: 'System Update',
      message: 'We have updated our terms of service.',
      time: '1d ago',
      read: true,
    },
  ])
  const unreadCount = notifications.filter((n) => !n.read).length
  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id
          ? {
              ...n,
              read: true,
            }
          : n,
      ),
    )
  }
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        read: true,
      })),
    )
  }
  const getIcon = (type: string) => {
    switch (type) {
      case 'win':
        return <TrophyIcon size={16} className="text-gold" />
      case 'ticket':
        return <TicketIcon size={16} className="text-primary" />
      default:
        return <InfoIcon size={16} className="text-blue-500" />
    }
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2">
      <div className="max-w-md mx-auto relative">
        {/* Floating Header Content */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/7PhhF5n42qvpwp1TQSmfPp/phouse_logo_nobg.png"
              alt="Powerhouse9ja"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {showBalance && (
              <div className="bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-400 block">
                  Balance
                </span>
                <p className="font-bold text-sm text-gray-900 dark:text-white">
                  ₦{balance.toLocaleString()}
                </p>
              </div>
            )}

            <div ref={notificationRef} className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-11 h-11 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center relative border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform active:scale-95"
              >
                <BellIcon
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></span>
                )}
              </button>

              {/* Notification Widget Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-14 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-slide-up origin-top-right">
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Notifications
                    </h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllRead}
                        className="text-xs text-primary dark:text-gold font-medium hover:underline"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto custom-scrollbar">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          onClick={() => markAsRead(notification.id)}
                          className={`p-4 border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer relative ${!notification.read ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}
                        >
                          <div className="flex gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${!notification.read ? 'bg-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700'}`}
                            >
                              {getIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-1">
                                <h4
                                  className={`text-sm font-semibold truncate pr-2 ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
                                >
                                  {notification.title}
                                </h4>
                                <span className="text-[10px] text-gray-400 whitespace-nowrap">
                                  {notification.time}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                                {notification.message}
                              </p>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary dark:bg-gold rounded-full mt-2 flex-shrink-0"></div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500">
                        <BellIcon
                          size={32}
                          className="mx-auto mb-2 opacity-20"
                        />
                        <p className="text-sm">No notifications yet</p>
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center">
                    <button className="text-xs font-medium text-gray-500 hover:text-primary dark:hover:text-gold transition-colors">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}