import React from 'react';
import { Gift, Camera, Box } from 'lucide-react';

const DesignerCakes = () => {
  const features = [
    { name: "Photo Cake", icon: <Camera size={18} /> },
    { name: "Pinata Cake", icon: <Gift size={18} /> },
    { name: "Pull-Me-Up", icon: <Box size={18} /> },
    { name: "Fondant Art", icon: <span className="text-lg">🎨</span> },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80", // Wedding
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80", // Fun
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80", // Cupcakes
    "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80", // Chocolate
  ];

  return (
    <section id="designer-cakes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-brand-darkPink font-script text-3xl">Custom Creations</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Designer Cakes for Every Occasion</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether it's a dream wedding, a milestone birthday, or just a special surprise, we craft cakes that tell your story. 
              Indulge in our bespoke designs customized just for you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-pink-50 p-3 rounded-xl">
                  <div className="text-brand-darkPink bg-white p-2 rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:bg-brand-darkPink transition-all"
            >
              Customize Your Cake
            </a>
          </div>

          {/* Grid Gallery */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 1 ? 'mt-8' : ''}`}
              >
                <img 
                  src={src} 
                  alt="Designer Cake" 
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignerCakes;