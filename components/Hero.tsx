import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-cream">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cupcakes.png')]"></div>
        {/* Abstract shapes matching the flyer colors */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-brand-pink shadow-sm mb-2 mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-brand-maroon font-bold text-xs tracking-wider uppercase">Pure Veg Bakery</span>
            </div>
            
            {/* Main Headline mimicking the flyer font style */}
            <div className="space-y-2">
              <h1 className="font-hand text-5xl md:text-7xl lg:text-8xl text-brand-maroon leading-[0.9] transform -rotate-2 origin-bottom-left">
                WHERE EVERY <br/>
                <span className="text-brand-accent">BITE</span> IS A <br/>
                DELIGHT
              </h1>
              {/* Decorative underline */}
              <div className="h-2 w-32 bg-brand-pink rounded-full mx-auto md:mx-0 mt-4 opacity-70"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans font-medium">
              We make meal boxes, dessert jars, cupcakes, and customized designer cakes on order. Freshly baked with love!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
              <a 
                href="#menu" 
                className="px-8 py-4 bg-brand-maroon text-white rounded-2xl font-heading font-bold shadow-[4px_4px_0px_0px_rgba(232,158,179,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-lg"
              >
                View Menu <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-brand-maroon border-2 border-brand-maroon rounded-2xl font-heading font-bold shadow-sm hover:bg-brand-pink/10 transition-all flex items-center justify-center text-lg"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Image Content - Framed nicely like the flyer images */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative z-10 p-3 bg-white rounded-[2.5rem] shadow-xl border-4 border-brand-pink transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-[2rem] overflow-hidden relative aspect-[4/5] md:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Delicious Chocolate Cake" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-6 py-3 rounded-2xl shadow-lg border-2 border-brand-pink">
                  <p className="font-hand text-2xl text-brand-maroon font-bold">Try our Cupcakes!</p>
                </div>
              </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-pink/30 rounded-[3rem] -rotate-3 z-0 -z-10"></div>
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-maroon/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;