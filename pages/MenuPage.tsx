import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCard } from '../components/MenuCard';
import { MenuCategory } from '../types';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Object.values(MenuCategory)];

  const filteredItems = activeCategory === 'ALL'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="w-full min-h-screen pb-20">
      <div className="bg-[#FF3333] py-16 px-4 text-center border-b-2 border-black text-white relative overflow-hidden">
        <h1 className="text-6xl font-black relative z-10">OUR MENU</h1>
        <p className="text-xl mt-4 relative z-10 font-bold max-w-xl mx-auto">
          Quality Arabica coffee at prices that make sense.
        </p>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle,_#ffffff_10%,_transparent_10%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold border-2 border-black transition-all ${activeCategory === cat
                ? 'bg-black text-white brutal-shadow'
                : 'bg-white text-black hover:bg-gray-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Equipment Promo */}
        <div className="mt-20 bg-[#FFF8F0] rounded-3xl border-2 border-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 brutal-shadow">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-[#FFD700] px-4 py-1 rounded-full text-xs font-black border border-black">FOR BUSINESS OWNERS</div>
            <h3 className="text-4xl font-black">START YOUR COFFEE JOURNEY</h3>
            <p className="text-lg">We also provide Cup Sealer machines and wholesale beans for resellers. Join the Kopi Tengah family.</p>
            <button className="bg-[#FF3333] text-white font-bold px-8 py-3 rounded-xl border-2 border-black hover:bg-[#D60000] transition-colors">
              Contact for Business
            </button>
          </div>
          <div className="flex-1">
            <img src="/new_menu/all_menu.png" alt="All Menu" className="rounded-2xl border-2 border-black w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};