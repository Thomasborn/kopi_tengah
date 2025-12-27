import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 border-2 border-black brutal-shadow-sm hover:brutal-shadow-hover active:brutal-shadow-active";
  
  const variants = {
    primary: "bg-[#FF3333] text-white hover:bg-[#E60000]",
    secondary: "bg-[#FFD700] text-black hover:bg-[#F4C430]",
    outline: "bg-white text-black hover:bg-gray-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight size={20} />}
    </button>
  );
};