import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Designer Cakes', href: '#designer-cakes' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];
  const BrandLogo = () => (
    <img 
      src="../public/logo_transparent.jpg" 
      alt="Bake Cake with Nikks Logo" 
      className="h-16 w-auto md:h-20"
    />
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm py-2 border-b border-brand-pink/30' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-3 group">
            <BrandLogo />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading text-lg text-brand-maroon hover:text-brand-accent transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+919599547005"
              className="bg-brand-maroon text-white px-6 py-2.5 rounded-full hover:bg-brand-brown transition-all shadow-md hover:shadow-lg flex items-center gap-2 font-heading tracking-wide"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-maroon hover:text-brand-accent focus:outline-none bg-brand-pink/20 p-2 rounded-lg"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-brand-cream border-b-2 border-brand-pink shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="px-6 pt-4 pb-8 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-lg font-heading text-brand-maroon hover:bg-brand-pink/20 hover:pl-6 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919599547005"
            className="block w-full text-center bg-brand-maroon text-white px-4 py-3 rounded-xl font-heading font-bold mt-6 shadow-md active:scale-95 transition-transform"
          >
            Call to Order
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;