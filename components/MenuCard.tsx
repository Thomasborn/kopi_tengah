import React from 'react';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-3xl border-2 border-black overflow-hidden flex flex-col h-full hover:brutal-shadow transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-100 border-b-2 border-black">
        {item.isNew && (
          <div className="absolute top-4 right-4 bg-[#FFD700] text-black text-xs font-black px-3 py-1 rounded-full border border-black z-10 rotate-12">
            NEW!
          </div>
        )}
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold leading-tight">{item.name}</h3>
          <span className="font-black text-lg bg-[#FF3333] text-white px-2 py-1 rounded-lg text-sm border border-black -rotate-2">
            {item.price / 1000}K
          </span>
        </div>
        {item.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        )}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-200">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
             {item.isHotAvailable ? 'Hot / Cold' : 'Cold Only'}
           </span>
           <button className="bg-black text-white p-2 rounded-full hover:bg-[#FF3333] transition-colors">
             <Plus size={20} />
           </button>
        </div>
      </div>
    </div>
  );
};