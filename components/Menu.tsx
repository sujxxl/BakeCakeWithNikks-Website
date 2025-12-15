import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { Leaf, Star } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  const activeItems = MENU_DATA.find(cat => cat.id === activeCategory)?.items || [];

  // Sticker positions config (static positions, dynamic content)
  const stickerPositions = [
    { top: '5%', left: '2%', rot: '-12deg', size: 'text-6xl md:text-7xl' },
    { top: '15%', right: '5%', rot: '45deg', size: 'text-7xl md:text-8xl' },
    { bottom: '15%', left: '1%', rot: '-25deg', size: 'text-8xl md:text-9xl' },
    { top: '40%', right: '2%', rot: '12deg', size: 'text-5xl md:text-6xl' },
    { bottom: '30%', right: '8%', rot: '-15deg', size: 'text-6xl md:text-7xl' },
    { top: '55%', left: '3%', rot: '10deg', size: 'text-6xl md:text-7xl' },
    { bottom: '5%', right: '25%', rot: '30deg', size: 'text-5xl md:text-6xl' },
    { top: '25%', left: '15%', rot: '-5deg', size: 'text-4xl md:text-5xl opacity-60' },
  ];

  // Mapping categories to specific emoji sets
  const getCategoryIcons = (categoryId: string) => {
    switch (categoryId) {
      case 'cakes': // Classic Cakes
        return ['🎂', '🍰', '🍓', '🕯️', '🍒', '🎁', '✨', '🎀'];
      case 'chocolate': // Chocolate Lovers
        return ['🍫', '🍪', '🍩', '🤎', '🍮', '🥧', '🧁', '🍪'];
      case 'pastries': // Pastries & Slices
        return ['🥐', '🧁', '🥞', '🧇', '🥧', '🥨', '🥯', '🍯'];
      case 'cheesecakes': // Cold Cheesecakes
        return ['🍰', '🧀', '🍋', '🫐', '🥄', '🍮', '🥧', '🥛'];
      case 'beverages': // Beverages
        return ['🥤', '🧋', '☕', '🍹', '🧊', '🧉', '🍋', '🥛'];
      case 'snacks': // Café Snacks
        return ['🍟', '🍔', '🍕', '🥪', '🌭', '🧂', '🥙', '🌮'];
      default:
        return ['🧁', '🍩', '🍰', '🍪', '🍟', '🥤', '🍕', '🥞'];
    }
  };

  const currentIcons = getCategoryIcons(activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-cream relative overflow-hidden transition-colors duration-500">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#743030_1px,transparent_1px)] [background-size:16px_16px]"></div>

       {/* Floating Stickers */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
         {stickerPositions.map((pos, i) => (
           <div 
             key={`${activeCategory}-${i}`} // Key change triggers animation re-mount
             className={`absolute ${pos.size} drop-shadow-xl filter saturate-150 select-none animate-blob`}
             style={{ 
               top: pos.top, 
               left: pos.left, 
               right: pos.right, 
               bottom: pos.bottom, 
               transform: `rotate(${pos.rot})`,
               textShadow: '0 0 15px rgba(255, 255, 255, 0.8), 2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white',
               animationDelay: `${i * 0.5}s`
             }}
           >
             {currentIcons[i % currentIcons.length]}
           </div>
         ))}
       </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-accent font-hand text-3xl font-bold tracking-wide">Delicious Choices</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-maroon mt-2">Explore Our Menu</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {MENU_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl text-sm md:text-base font-heading font-bold transition-all duration-300 transform border-2 ${
                activeCategory === category.id
                  ? 'bg-brand-maroon text-white border-brand-maroon shadow-lg scale-105'
                  : 'bg-white text-brand-maroon border-brand-pink hover:bg-brand-pink hover:text-white shadow-sm'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid - No images per item, just text details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {activeItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm hover:shadow-xl border-2 border-brand-pink transition-all flex flex-col justify-between items-start gap-4 relative overflow-hidden"
            >
               {/* Decorative squiggle or clean layout */}
              <div className="w-full relative z-10">
                <div className="flex justify-between items-start mb-2 w-full">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-green-500 p-0.5 flex items-center justify-center rounded-sm flex-shrink-0">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-brand-maroon leading-tight">{item.name}</h3>
                    </div>
                  {item.isPopular && (
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 uppercase tracking-wide border border-yellow-200 flex-shrink-0 ml-2">
                      <Star size={10} fill="currentColor" /> Bestseller
                    </span>
                  )}
                </div>
                
                {item.description && (
                  <p className="text-gray-500 text-sm mb-4 font-sans font-medium line-clamp-2 pl-7">{item.description}</p>
                )}
                
                {/* Dotted separator */}
                <div className="border-b-2 border-dotted border-brand-pink/30 w-full mb-3"></div>

                {/* Price Logic */}
                <div className="flex flex-wrap items-center justify-between w-full mt-auto pl-2">
                   {/* Prices */}
                   <div className="flex gap-6 items-baseline">
                      {item.price && (
                        <span className="font-heading font-bold text-2xl text-brand-maroon">₹{item.price}</span>
                      )}
                      {item.priceHalfKg && (
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">½ kg</span>
                            <span className="font-heading font-bold text-lg text-brand-maroon">₹{item.priceHalfKg}</span>
                        </div>
                      )}
                      {item.priceOneKg && (
                        <div className="flex flex-col border-l border-gray-200 pl-4">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">1 kg</span>
                            <span className="font-heading font-bold text-lg text-brand-maroon">₹{item.priceOneKg}</span>
                        </div>
                      )}
                   </div>
                   
                   {/* Add button placeholder */}
                   <button className="text-brand-accent hover:text-brand-maroon transition-colors group-hover:scale-110 transform duration-300">
                       <div className="w-8 h-8 rounded-full bg-brand-pink/20 border border-brand-pink/50 flex items-center justify-center text-xl font-bold pb-1 text-brand-maroon">+</div>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center relative z-20">
             <div className="inline-block px-6 py-3 bg-brand-pink/20 rounded-full border border-brand-pink/50 backdrop-blur-md">
                 <p className="text-brand-maroon text-sm font-hand font-bold text-lg">* Prices subject to change. Customization charges extra.</p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;