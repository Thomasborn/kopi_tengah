import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MenuPage } from './pages/MenuPage';
import { Location } from './pages/Location';
import { About } from './pages/About';
import { ViewState } from './types';
import { Marquee } from './components/Marquee';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>('HOME');

  // Simple hash router implementation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'menu') setView('MENU');
      else if (hash === 'location') setView('LOCATION');
      else if (hash === 'about') setView('ABOUT');
      else setView('HOME');
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeView = (view: ViewState) => {
    const hash = view === 'HOME' ? '' : view.toLowerCase();
    window.location.hash = hash;
    setView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home setView={changeView} />;
      case 'MENU': return <MenuPage />;
      case 'LOCATION': return <Location />;
      case 'ABOUT': return <About />;
      default: return <Home setView={changeView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#4A3B32] font-sans overflow-x-hidden selection:bg-[#FF3333] selection:text-white">
      {/* Top skinny marquee */}
      <div className="bg-black text-white text-xs font-bold py-1 text-center tracking-widest uppercase">
        Open Daily: 09:00 - 21:00 • Blok M Square Plaza 2
      </div>
      
      <Navbar currentView={currentView} setView={changeView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full border-2 border-black brutal-shadow hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} fill="white" />
      </a>
    </div>
  );
};

export default App;