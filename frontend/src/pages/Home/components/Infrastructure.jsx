import React from 'react';
import { FiBox, FiUsers, FiTruck } from 'react-icons/fi';

const Infrastructure = () => {
  return (
    <section className="py-24 relative bg-slate-50 overflow-hidden">
      {/* Cold Storage Background */}
      <div className="absolute inset-0 bg-[url('/assets/bg-coldstorage.jpg')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b830_1px,transparent_1px),linear-gradient(to_bottom,#94a3b830_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2046] mb-4 relative inline-block">
            The PMC Infrastructure
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#f7a800] rounded-full"></span>
          </h2>
          <p className="text-slate-500 mt-8 max-w-2xl mx-auto text-lg">
            Industrial-scale infrastructure designed for rapid, temperature-assured fulfillment across North America.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-[#0b2046]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0b2046] group-hover:bg-[#0b2046] group-hover:text-white transition-colors duration-300">
              <FiBox className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0b2046] mb-3">30,000 Sq. Ft.</h3>
            <p className="text-slate-600 leading-relaxed">
              Tri-warehouse hub with specialized cold, ambient, and frozen storage zones centrally located in Sugar Land, Texas.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-[#f7a800]/10 rounded-2xl flex items-center justify-center mb-6 text-[#f7a800] group-hover:bg-[#f7a800] group-hover:text-white transition-colors duration-300">
              <FiUsers className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0b2046] mb-3">4,000+ Partners</h3>
            <p className="text-slate-600 leading-relaxed">
              Retail shops served across the continent with reliable and responsive distribution, covering both major coasts.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="group bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-[#0b2046]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0b2046] group-hover:bg-[#0b2046] group-hover:text-white transition-colors duration-300">
              <FiTruck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0b2046] mb-3">12 States</h3>
            <p className="text-slate-600 leading-relaxed">
              Direct fleet coverage delivering temperature-assured products leveraging our exclusive RA Fred Solution Logistic network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
