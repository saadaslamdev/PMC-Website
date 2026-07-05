import React from 'react';
import { FiTrendingUp, FiGlobe, FiShield } from 'react-icons/fi';

const Consulting = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#f8fafc]">
      {/* Clean Architectural Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute left-0 top-0 w-1/2 h-full bg-white border-r border-slate-100 hidden lg:block pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:16px_16px] opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0b2046] mb-6 leading-tight">
              Strategic Consulting & <br/><span className="text-[#f7a800]">Market Entry</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We provide exclusive North American market entry consulting for international food and consumer goods brands. Leveraging 57+ years of family-built distribution expertise, we ensure your brand reaches its target audience efficiently.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0b2046] shrink-0">
                  <FiGlobe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b2046] mb-1">Go-to-Market Strategy</h4>
                  <p className="text-slate-500">Comprehensive planning tailored for the North American diaspora.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-[#f7a800] shrink-0">
                  <FiTrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b2046] mb-1">Shelf-Placement Support</h4>
                  <p className="text-slate-500">Strategic retail partner introductions and prime positioning.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0b2046] shrink-0">
                  <FiShield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b2046] mb-1">Regulatory Guidance</h4>
                  <p className="text-slate-500">Navigating FDA and local compliance effortlessly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2046]/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              {/* Image with light sky to fix empty space issue naturally */}
              <img src="/assets/bg-map-light.jpg" alt="Consulting Global Map" className="w-full h-[500px] object-cover object-center bg-white" />
              
              {/* Floating Badge (Top Right) */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-[#f7a800] px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 transform transition-transform hover:scale-105">
                  <div className="text-[#0b2046] font-black text-4xl">57+</div>
                  <div className="text-[#0b2046] font-bold text-sm leading-tight uppercase tracking-wide">Years of<br/>Trust</div>
                </div>
              </div>

              {/* Bottom Quote Box */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="bg-[#0b2046]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-sm shadow-2xl">
                  <p className="text-white font-medium text-lg leading-snug">
                    "Expanding your reach across 12 states and 4,000+ retail partners."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
