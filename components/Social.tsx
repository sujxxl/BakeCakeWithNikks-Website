import React from 'react';
import { Instagram } from 'lucide-react';

const Social = () => {
  const posts = [1, 2, 3, 4]; // Placeholders

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-brand-darkPink font-script text-2xl">@BakeCakeWithNikks2.0</span>
            <h2 className="text-3xl font-bold text-gray-800">Follow Our Sweet Journey</h2>
          </div>
          <a 
            href="https://www.instagram.com/bakecakewithnikks2.0/" 
            target="_blank" 
            rel="noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Instagram size={20} />
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((item) => (
            <div key={item} className="relative group overflow-hidden rounded-xl aspect-square bg-gray-100">
              <img 
                src={`https://picsum.photos/seed/cake${item}/400`} 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;