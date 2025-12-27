import React from 'react';

interface MarqueeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  bgColor = "bg-[#FF3333]", 
  textColor = "text-white",
}) => {
  const content = `${text} • ${text} • ${text} • ${text} • ${text} • ${text} • `;
  
  return (
    <div className={`w-full ${bgColor} ${textColor} py-3 border-y-2 border-black`}>
      <div className="marquee-container">
        <div className="marquee-content font-black text-xl uppercase tracking-widest">
          {content} {content}
        </div>
      </div>
    </div>
  );
};