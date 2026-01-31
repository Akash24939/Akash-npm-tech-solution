
import React from 'react';
import { ShoppingBag, ShoppingCart, Coffee, Pill, Settings, Tv } from 'lucide-react';

const TargetBusinesses: React.FC = () => {
  const businesses = [
    { name: 'Retail Stores', icon: <ShoppingBag size={32} /> },
    { name: 'Supermarkets', icon: <ShoppingCart size={32} /> },
    { name: 'Restaurants & Cafes', icon: <Coffee size={32} /> },
    { name: 'Pharmacies', icon: <Pill size={32} /> },
    { name: 'Hardware Stores', icon: <Settings size={32} /> },
    { name: 'Electronics Shops', icon: <Tv size={32} /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Tailored for Your Business</h2>
          <p className="text-slate-600">NPM Tech Solutions is built to handle the unique needs of diverse retail environments.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {businesses.map((biz, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all text-center cursor-pointer">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {biz.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-sm md:text-base leading-tight">{biz.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetBusinesses;
