import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { INSTAGRAM_LINK, MAPS_LINK, WHATSAPP_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#FFF8F0] pt-16 pb-8 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src="/logo/logo.jpg" alt="Logo" className="w-16 h-16 rounded-full border-2 border-black" />
              <h2 className="text-4xl font-black text-[#FF3333]">KOPI TENGAH</h2>
            </div>
            <p className="text-lg max-w-xs">
              Quality Arabica coffee that doesn't break the bank.
              <br />
              <span className="font-bold italic">#KopiWorthIt</span>
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">GET IN TOUCH</h3>
            <ul className="space-y-3">
              <li>
                <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#FF3333] transition-colors">
                  <MapPin className="text-[#FF3333]" />
                  Blok M Square Plaza 2, Jakarta
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#FF3333] transition-colors">
                  <Phone className="text-[#FF3333]" />
                  +62 812 3456 7890
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#FF3333] transition-colors">
                  <Instagram className="text-[#FF3333]" />
                  @kopitengah.official
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">OPENING HOURS</h3>
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#333]">
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold">EVERYDAY</span>
                <span className="text-[#FF3333] font-mono">09:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kopi Tengah Official. All rights reserved.
        </div>
      </div>
    </footer>
  );
};