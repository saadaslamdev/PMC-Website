import React from 'react';

const Ecosystem = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b2046]">
      {/* Vibrant Corporate Background */}
      <div className="absolute inset-0 bg-[url('/assets/bg-docks.jpg')] bg-cover bg-bottom bg-fixed opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2046] via-[#0b2046]/80 to-[#0b2046]/60"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Our Distribution Ecosystem
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#f7a800] rounded-full"></span>
          </h2>
          <p className="text-slate-300 mt-8 max-w-2xl mx-auto text-lg">
            A three-pillar approach to market dominance: Import, Logistics, and Manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20 flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-[#0b2046]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/assets/eco-imports.png" alt="International Imports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f7a800] transition-colors duration-300">Exclusive Imports</h3>
              <p className="text-slate-300 leading-relaxed mb-6 flex-1">
                Bridging the authentic flavors of Pakistan and India. Proudly representing the largest consumer brands for the North American diaspora.
              </p>
              <div className="pt-4 border-t border-white/10 mt-auto">
                <span className="text-sm font-semibold text-[#f7a800] uppercase tracking-wider">The Global Bridge</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20 flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-[#0b2046]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/assets/eco-fleet.png" alt="RA Fred Fleet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f7a800] transition-colors duration-300">RA Fred Solution Logistic</h3>
              <p className="text-slate-300 leading-relaxed mb-6 flex-1">
                Our dedicated, in-house fleet ensuring direct-to-store delivery to over 400 shops. Total control over last-mile freshness.
              </p>
              <div className="pt-4 border-t border-white/10 mt-auto">
                <span className="text-sm font-semibold text-[#f7a800] uppercase tracking-wider">Vertical Integration</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20 flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-[#0b2046]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/assets/eco-inhouse.png" alt="In-house Brands" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f7a800] transition-colors duration-300">In-House Manufacturing</h3>
              <p className="text-slate-300 leading-relaxed mb-6 flex-1">
                Developing robust private labels. Creating value through our proprietary brands.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-[#f7a800] rounded-full mr-2 shrink-0"></span>Memon Brothers (1000+ SKUs)</li>
                <li className="flex items-center text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-[#f7a800] rounded-full mr-2 shrink-0"></span>Janat-e-Sheeren Sweets</li>
                <li className="flex items-center text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-[#f7a800] rounded-full mr-2 shrink-0"></span>Royal Classic Crockery</li>
              </ul>
              <div className="pt-4 border-t border-white/10 mt-auto">
                <span className="text-sm font-semibold text-[#f7a800] uppercase tracking-wider">Private Labels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
