import React from 'react';
import { FEATURES } from '../constants';

const About = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-darkPink font-script text-3xl">Our Story</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Baked with Love, Served with Joy</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-brand-darkPink">Bake Cake With Nikks</span> is a pure vegetarian bakery crafting designer cakes, 
            delicious desserts, and café favorites. We believe that every celebration deserves a centerpiece that looks as good as it tastes. 
            Using only premium ingredients and fresh techniques, we bring sweetness to your life, one slice at a time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group bg-pink-50/50 p-6 rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg">{feature.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;