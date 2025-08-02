import React from 'react';
import { cn } from '../../utils/cn';

const ProgressBar = React.forwardRef(({ 
  value = 0, 
  max = 100, 
  size = "md",
  variant = "default",
  showLabel = false,
  className,
  ...props 
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
    xl: "h-4"
  };
  
  const variants = {
    default: "bg-gradient-to-r from-blue-500 to-blue-600",
    success: "bg-gradient-to-r from-green-500 to-green-600",
    warning: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    danger: "bg-gradient-to-r from-red-500 to-red-600",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600"
  };
  
  return (
    <div className={cn("w-full", className)} {...props}>
      {showLabel && (
        <div className="flex justify-between text-sm text-white/75 mb-1">
          <span>Progresso</span>
          <span className="font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div 
        ref={ref}
        className={cn(
          "w-full bg-white/20 rounded-full overflow-hidden",
          sizes[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            variants[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";

export default ProgressBar; 