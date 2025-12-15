import React from 'react';
import { Sparkles } from 'lucide-react';

const Offers = () => {
  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-brand-pink/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 flex justify-center items-center gap-3">
            <Sparkles className="text-yellow-400 fill-current" />
            Sweet Deals
            <Sparkles className="text-yellow-400 fill-current" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Offer 1 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-pink-300 relative overflow-hidden group hover:border-brand-darkPink transition-colors">
            <div className="absolute top-0 right-0 bg-brand-darkPink text-white px-4 py-1 rounded-bl-2xl text-sm font-bold">
              Monthly Special
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4">🧁</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Cupcake Mania</h3>
              <p className="text-gray-600 mb-4">Get delicious cupcakes at an unbelievable price on the 9th of every month!</p>
              <div className="bg-pink-100 text-brand-darkPink px-6 py-2 rounded-full font-bold text-xl animate-pulse">
                @ ₹9 Only
              </div>
              <p className="text-xs text-gray-400 mt-4">*Terms & Conditions Apply</p>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-yellow-300 relative overflow-hidden group hover:border-yellow-500 transition-colors">
            <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-1 rounded-bl-2xl text-sm font-bold">
              Combo Deal
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4">🍟</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Fries & Sips</h3>
              <p className="text-gray-600 mb-4">Order any large beverage and get a portion of spicy Peri Peri Fries.</p>
              <div className="bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full font-bold text-xl animate-pulse">
                @ ₹1 Only
              </div>
              <p className="text-xs text-gray-400 mt-4">*Limited Time Offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;