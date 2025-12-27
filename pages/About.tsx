import React from 'react';
import { Marquee } from '../components/Marquee';

export const About: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-6xl md:text-8xl font-black">KOPI WORTH IT</h1>
          <p className="text-2xl font-bold text-[#FF3333]">#KetemuDiTengah</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="font-bold">
              Jakarta's coffee scene is vibrant, but often expensive. We asked ourselves: <span className="bg-[#FFD700] px-1 border border-black">Why can't great coffee be accessible?</span>
            </p>
            <p>
              Kopi Tengah was born from the idea of "The Middle Ground". A place where quality meets affordability. We use 100% Full Arabica beans—no fillers, no shortcuts—starting at just 15K IDR.
            </p>
            <p>
              Located in the bustling heart of Blok M, we are a melting pot for students, workers, and coffee lovers. Whether you need a quick caffeine fix or a place to hang out, let's meet in the middle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/DSWuri5kTG5/2025-12-17_06-50-59_UTC_2.jpg" alt="Barista" className="w-full h-full object-cover rounded-3xl border-2 border-black brutal-shadow -rotate-2" />
            <img src="/DSWuri5kTG5/2025-12-17_06-50-59_UTC_3.jpg" alt="Shop" className="w-full h-full object-cover rounded-3xl border-2 border-black brutal-shadow rotate-2 mt-8" />
          </div>
        </div>
      </div>

      <Marquee text="10.3K FOLLOWERS • FULL ARABICA • JAKARTA SELATAN •" bgColor="bg-black" textColor="text-white" />

      <div className="bg-[#FF3333] text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-black mb-8">JOIN THE COMMUNITY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {['/DSWuri5kTG5/2025-12-17_06-50-59_UTC_4.jpg', '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_5.jpg', '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_6.jpg', '/DSXFtxskdXa/2025-12-17_10-12-16_UTC.jpg'].map((src, i) => (
            <img key={i} src={src} className="rounded-2xl border-2 border-black hover:scale-105 transition-transform" alt="Customer" />
          ))}
        </div>
      </div>
    </div>
  );
};