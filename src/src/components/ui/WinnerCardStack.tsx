import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Badge } from './Badge'
interface WinnerCardStackProps {
  winners: string[]
  prizeName: string
  prizeIcon: string
  tier: string
}
export function WinnerCardStack({
  winners,
  prizeName,
  prizeIcon,
  tier,
}: WinnerCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)
  const handleNext = () => {
    if (currentIndex < winners.length - 1) {
      setDirection('right')
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setDirection(null)
      }, 150)
    }
  }
  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection('left')
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setDirection(null)
      }, 150)
    }
  }
  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setDirection(index > currentIndex ? 'right' : 'left')
      setTimeout(() => {
        setCurrentIndex(index)
        setDirection(null)
      }, 150)
    }
  }
  return (
    <div className="relative">
      {/* Card Stack Container */}
      <div className="relative h-64 mb-4">
        {winners.map((winner, index) => {
          const offset = index - currentIndex
          const isVisible = Math.abs(offset) <= 2
          if (!isVisible) return null
          const zIndex = winners.length - Math.abs(offset)
          const scale = 1 - Math.abs(offset) * 0.05
          const translateY = Math.abs(offset) * 8
          const opacity = offset === 0 ? 1 : 0.4
          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-300 ease-out"
              style={{
                zIndex,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                opacity,
                pointerEvents: offset === 0 ? 'auto' : 'none',
              }}
            >
              <div
                className={`h-full bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl p-6 flex flex-col justify-between transition-transform duration-150 ${direction === 'right' && offset === 0 ? 'translate-x-8 opacity-0' : direction === 'left' && offset === 0 ? '-translate-x-8 opacity-0' : ''}`}
              >
                {/* Winner Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="gold">
                    Winner {index + 1} of {winners.length}
                  </Badge>
                  <div className="text-4xl">{prizeIcon}</div>
                </div>

                {/* Prize Info */}
                <div className="text-center">
                  <p className="text-white/80 text-sm mb-2">{tier} Prize</p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {prizeName}
                  </h3>

                  {/* Winner ID */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white/70 text-xs mb-2">
                      Winning Ticket ID
                    </p>
                    <p className="font-mono text-xl font-bold text-white tracking-wider">
                      {winner}
                    </p>
                  </div>
                </div>

                {/* Celebration */}
                <div className="text-center">
                  <p className="text-white/90 text-sm font-semibold">
                    🎉 Congratulations! 🎉
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-2 rounded-lg transition-all ${currentIndex === 0 ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-primary dark:text-gold hover:bg-primary/10 dark:hover:bg-gold/10 active:scale-95'}`}
        >
          <ChevronLeftIcon size={24} />
        </button>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {winners.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-primary dark:bg-gold' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === winners.length - 1}
          className={`p-2 rounded-lg transition-all ${currentIndex === winners.length - 1 ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-primary dark:text-gold hover:bg-primary/10 dark:hover:bg-gold/10 active:scale-95'}`}
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>

      {/* Swipe Hint */}
      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        {currentIndex + 1} of {winners.length} winners • Use arrows to navigate
      </p>
    </div>
  )
}
