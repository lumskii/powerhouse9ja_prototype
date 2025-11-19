import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}
export function Card({
  children,
  className = '',
  onClick,
  hover = false
}: CardProps) {
  const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  return <div onClick={onClick} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-200 ${hoverClass} ${className}`}>
      {children}
    </div>;
}