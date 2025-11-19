import React from 'react';
interface ProgressBarProps {
  progress: number; // 0-100
  showPercentage?: boolean;
  height?: 'sm' | 'md' | 'lg';
  milestones?: number[]; // e.g., [50, 75, 100]
  className?: string;
}
export function ProgressBar({
  progress,
  showPercentage = true,
  height = 'md',
  milestones = [],
  className = ''
}: ProgressBarProps) {
  const heights = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };
  return <div className={className}>
      <div className="relative">
        <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${heights[height]}`}>
          <div className="h-full bg-gradient-to-r from-primary via-primary-light to-gold transition-all duration-500 ease-out relative" style={{
          width: `${Math.min(progress, 100)}%`
        }}>
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>

        {/* Milestone markers */}
        {milestones.map(milestone => {
        // Determine positioning to prevent overflow
        let positionClass = 'left-1/2 -translate-x-1/2';
        if (milestone === 0) {
          positionClass = 'left-0';
        } else if (milestone === 100) {
          positionClass = 'right-0';
        }
        return <div key={milestone} className="absolute top-0 bottom-0 w-1 bg-white dark:bg-gray-900 shadow-md" style={{
          left: milestone === 100 ? 'auto' : `${milestone}%`,
          right: milestone === 100 ? '0' : 'auto'
        }}>
              <div className={`absolute -top-6 ${positionClass} text-xs font-bold text-gray-900 dark:text-white whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow-sm`}>
                {milestone}%
              </div>
            </div>;
      })}
      </div>

      {showPercentage && <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {progress.toFixed(0)}% Complete
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {100 - progress}% to go
          </span>
        </div>}
    </div>;
}