import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    // Reusing the logo component structure for consistency
  const FooterLogo = () => (
    <div className="flex flex-col items-center justify-center leading-none select-none mb-6 scale-110">
      <div className="font-heading font-bold text-4xl text-brand-maroon tracking-wide">BAKE</div>
      <div className="font-heading font-bold text-4xl text-brand-maroon tracking-wide -mt-2">CAKE</div>
      <div className="flex items-center gap-2 w-full justify-center mt-1">
        <div className="h-[2px] w-8 bg-brand-maroon rounded-full"></div>
        <div className="text-xs font-bold text-brand-maroon whitespace-nowrap px-1 font-sans">WITH NIKKS</div>
        <div className="h-[2px] w-8 bg-brand-maroon rounded-full"></div>
      </div>
      <div className="mt-2 text-[0.6rem] font-bold text-brand-maroon tracking-[0.2em] border border-brand-maroon px-2 py-0.5 rounded">PURE VEG BAKERY</div>
    </div>
  );

  return (
    <footer className="bg-white border-t-4 border-brand-pink/30 pt-16 pb-8 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-pink/10 rounded-br-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-pink/10 rounded-tl-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <FooterLogo />
          
          <p className="text-gray-600 max-w-md mb-8 font-sans font-medium">
            Spreading happiness through pure vegetarian delights. Freshly baked, handcrafted with love, and served with a smile.
          </p>

          <div className="flex gap-6 mb-10">
            <a href="#" className="bg-brand-pink/20 p-3 rounded-full text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
              <Instagram size={24} />
            </a>
            <a href="#" className="bg-brand-pink/20 p-3 rounded-full text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
              <Facebook size={24} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-heading text-brand-maroon mb-12">
            <a href="#home" className="hover:text-brand-accent hover:underline decoration-wavy underline-offset-4">Home</a>
            <a href="#menu" className="hover:text-brand-accent hover:underline decoration-wavy underline-offset-4">Menu</a>
            <a href="#offers" className="hover:text-brand-accent hover:underline decoration-wavy underline-offset-4">Offers</a>
            <a href="#contact" className="hover:text-brand-accent hover:underline decoration-wavy underline-offset-4">Contact</a>
          </div>

          <div className="w-full border-t border-brand-pink/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="font-sans">&copy; {new Date().getFullYear()} Bake Cake With Nikks. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-1 bg-green-50 rounded-full border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="font-bold text-green-700 text-xs uppercase tracking-wide">100% Pure Veg</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;