import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const Toast = ({ 
  message, 
  type = "success", 
  duration = 3000, 
  onClose,
  className 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info
  };

  const colors = {
    success: "bg-green-500 border-green-400",
    error: "bg-red-500 border-red-400",
    info: "bg-blue-500 border-blue-400"
  };

  const Icon = icons[type];

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 flex items-center space-x-3 p-4 rounded-lg border shadow-lg transition-all duration-300",
        colors[type],
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
        className
      )}
    >
      <Icon className="w-5 h-5 text-white" />
      <span className="text-white font-medium">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 text-white/80 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast; 