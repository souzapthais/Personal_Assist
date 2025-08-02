import React from 'react';
import { cn } from '../../utils/cn';

const Card = React.forwardRef(({ 
  children, 
  className, 
  variant = "default",
  ...props 
}, ref) => {
  const variants = {
    default: "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl",
    elevated: "bg-white/15 backdrop-blur-md border border-white/30 rounded-xl shadow-xl",
    glass: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl",
    solid: "bg-white/20 backdrop-blur-md border border-white/25 rounded-xl"
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card; 