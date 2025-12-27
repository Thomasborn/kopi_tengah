import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { MAPS_LINK } from '../constants';
import { Button } from '../components/Button';

export const Location: React.FC = () => {
  return (
    <div className="w-full pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-12 uppercase">
          Find Us At <span className="text-[#FF3333]">Blok M</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Info Card */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border-2 border-black brutal-shadow space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black flex items-center gap-2">
                <MapPin className="text-[#FF3333]" size={32} />
                ADDRESS
              </h3>
              <p className="text-xl font-medium pl-10">
                Blok M Square Plaza 2,<br/>
                Kebayoran Baru, Jakarta Selatan<br/>
                DKI Jakarta 12160
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black flex items-center gap-2">
                <Clock className="text-[#FF3333]" size={32} />
                HOURS
              </h3>
              <p className="text-xl font-medium pl-10">
                Monday - Sunday<br/>
                <span className="bg-black text-white px-2 py-1 rounded">09:00 - 21:00</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black flex items-center gap-2">
                <Phone className="text-[#FF3333]" size={32} />
                CONTACT
              </h3>
              <p className="text-xl font-medium pl-10">
                +62 812 3456 7890<br/>
                hello@kopitengah.com
              </p>
            </div>

            <div className="pt-4">
              <a href={MAPS_LINK} target="_blank" rel="noreferrer">
                <Button fullWidth icon className="text-lg py-4">GET DIRECTIONS</Button>
              </a>
            </div>
          </div>

          {/* Map Visual */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-[2.5rem] border-2 border-black overflow-hidden relative group">
             {/* Mock Map */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.338902591637!2d106.79727457499035!3d-6.241010393747285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16d573666dd%3A0x6a0c0e7b8b2c2866!2sBlok%20M%20Square!5e0!3m2!1sen!2sid!4v1703668000000!5m2!1sen!2sid" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale group-hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute top-4 left-4 bg-white p-2 rounded-xl border-2 border-black brutal-shadow-sm pointer-events-none">
               <Navigation className="text-[#FF3333]" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};