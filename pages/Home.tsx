import React from 'react';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { REVIEWS } from '../constants';
import { Star, Coffee, Users, DollarSign } from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-block bg-[#FFD700] border-2 border-black px-4 py-2 rounded-full font-bold text-sm brutal-shadow-sm rotate-2">
              THE BEST DEAL IN JAKARTA 🇮🇩
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
              KOPI <br />
              <span className="text-[#FF3333] drop-shadow-sm">WORTH IT</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-md text-[#4A3B32]">
              Premium Full Arabica coffee starting at just <span className="font-black bg-black text-white px-2 rounded ml-1">15K IDR</span>.
              No gimmicks, just great coffee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setView('MENU')} icon>View Menu</Button>
              <Button onClick={() => setView('LOCATION')} variant="outline">Visit Us</Button>
            </div>
          </div>

          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF3333] rounded-full border-2 border-black z-0 opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 -left-10 w-24 h-24 bg-[#FFD700] rounded-full border-2 border-black z-0 opacity-20"></div>

            <div className="relative z-10 bg-white p-4 rounded-[3rem] border-2 border-black brutal-shadow rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <img
                src="/new_menu/white(capp).png"
                alt="Kopi Tengah Product"
                className="w-full h-auto rounded-[2.5rem] border border-black"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full border-2 border-black brutal-shadow-sm">
                <img src="/logo/logo.jpg" alt="Detail" className="w-20 h-20 rounded-full border border-black object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee text="KETEMU DI TENGAH • KOPI WORTH IT • FULL ARABICA • 15K ONLY" />

      {/* Selling Points */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Coffee size={40} />, title: "Full Arabica", desc: "100% Premium Arabica beans sourced locally." },
              { icon: <DollarSign size={40} />, title: "Student Price", desc: "Starting at 15K. High quality, low wallet impact." },
              { icon: <Users size={40} />, title: "Community", desc: "A space to meet in the middle. Ketemu di Tengah." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#FFF8F0] p-8 rounded-3xl border-2 border-black brutal-shadow-sm hover:brutal-shadow transition-all text-center space-y-4">
                <div className="bg-[#FF3333] w-20 h-20 rounded-full flex items-center justify-center text-white border-2 border-black mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black">{feature.title}</h3>
                <p className="text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-5xl font-black mb-4">THE PEOPLE HAVE SPOKEN</h2>
          <p className="text-xl font-bold">Don't just take our word for it.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl border-2 border-black brutal-shadow">
              <div className="flex text-[#FF3333] mb-4 gap-1">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <p className="text-xl font-bold mb-6">"{review.text}"</p>
              <div className="font-mono text-gray-500 uppercase tracking-wider">- {review.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-[#FF3333] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-6xl md:text-8xl font-black">THIRSTY YET?</h2>
          <p className="text-2xl font-medium">Come visit us at Blok M Square Plaza 2.</p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => setView('MENU')} variant="secondary" className="text-xl px-12 py-4">ORDER NOW</Button>
          </div>
        </div>
      </section>
    </div>
  );
};