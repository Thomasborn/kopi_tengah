import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'HOME' },
    { label: 'Menu', view: 'MENU' },
    { label: 'Location', view: 'LOCATION' },
    { label: 'About', view: 'ABOUT' },
  ];

  const handleNav = (view: ViewState) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF8F0] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleNav('HOME')}
          >
            <img
              src="/logo/logo.jpg"
              alt="Kopi Tengah Logo"
              className="h-12 w-auto rounded-lg border-2 border-black transform -rotate-2 hover:rotate-0 transition-transform"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`font-bold text-lg hover:text-[#FF3333] transition-colors ${currentView === item.view ? 'text-[#FF3333] underline decoration-4 underline-offset-4' : 'text-[#4A3B32]'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-black text-white px-5 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
              <ShoppingBag size={18} />
              Order
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-[#FF3333] focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF8F0] border-t-2 border-black absolute w-full left-0 h-screen z-40">
          <div className="px-4 pt-4 pb-3 space-y-4 flex flex-col items-center justify-center h-3/4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className="block px-3 py-2 text-4xl font-black text-black hover:text-[#FF3333]"
              >
                {item.label}
              </button>
            ))}
            <button className="mt-8 bg-[#FF3333] text-white px-8 py-4 rounded-xl font-bold text-xl border-2 border-black brutal-shadow w-full max-w-xs">
              Order Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};