import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Location = () => {
  return (
    <section id="contact" className="py-20 bg-amber-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="w-full md:w-1/3 p-10 bg-gray-900 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Visit Us</h2>
              <p className="text-gray-400 mb-8">We'd love to see you!</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-brand-darkPink shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
                
                <div className="flex gap-4 items-center">
                  <Phone className="text-brand-darkPink shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-brand-darkPink shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Mon - Sun</p>
                    <p className="text-white font-medium">10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="block w-full text-center bg-brand-darkPink text-white py-3 rounded-xl font-bold hover:bg-white hover:text-brand-darkPink transition-all"
              >
                Call to Order
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-2/3 h-96 md:h-auto bg-gray-200 relative">
             <iframe 
               src={CONTACT_INFO.mapUrl}
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Bakery Location"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-xs font-bold text-gray-800">
               Paschim Vihar, New Delhi
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;