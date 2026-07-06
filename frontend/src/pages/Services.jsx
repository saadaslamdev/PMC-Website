import React from 'react';
import { FiThermometer, FiBox, FiSun, FiTruck, FiMap, FiBriefcase, FiTarget, FiTrendingUp, FiShoppingBag, FiCoffee, FiStar } from 'react-icons/fi';
import ReactCountUp from 'react-countup';
const CountUp = ReactCountUp.default || ReactCountUp;

const Services = () => {
  return (
    <div className="pt-20 bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-[#0b2046] overflow-hidden group">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] group-hover:scale-105"
          style={{ backgroundImage: "url('/assets/bg-coldstorage.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2046] via-[#0b2046]/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl fade-in" style={{ animationDelay: '0.1s' }}>
            End-to-End<br />
            <span className="text-[#f7a800]">Distribution Solutions</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed fade-in" style={{ animationDelay: '0.3s' }}>
            Import, Manufacture, Consult. A three-pillar approach to market dominance across North America.
          </p>
        </div>
      </section>

      {/* 2. Logistics & Warehousing Hub */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">Infrastructure</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0b2046] mb-6">The Strategic Hub</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our Sugar Land, Texas operations are centralized in a high-capacity facility designed for rapid, temperature-assured fulfillment.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            {/* Massive Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-slate-200">
                <img src="/assets/hero-bg.png" alt="PMC Warehouse Layout" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="border-l-4 border-[#f7a800] pl-6 mb-10">
                <div className="text-5xl font-black text-[#0b2046] mb-2">
                  <CountUp end={30000} separator="," duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-[#f7a800] text-3xl"> sq. ft.</span>
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Prime Warehousing Space</div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Three adjacent warehouses enable organized separation of dry and temperature-controlled goods, ensuring every product is stored in its ideal environment.
              </p>
            </div>
          </div>

          {/* Three Environments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#0b2046] rounded-xl flex items-center justify-center text-white mb-6">
                <FiThermometer className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0b2046] mb-3">Cold Storage</h4>
              <p className="text-slate-600">Dedicated sub-zero units specifically engineered for frozen ethnic foods, meats, and highly perishables.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#0b2046] rounded-xl flex items-center justify-center text-white mb-6">
                <FiSun className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0b2046] mb-3">Temperature Controlled</h4>
              <p className="text-slate-600">Precision climate environments designed to maintain the integrity of sweets, chocolates, and premium bakery products.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#0b2046] rounded-xl flex items-center justify-center text-white mb-6">
                <FiBox className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0b2046] mb-3">Ambient Warehouse</h4>
              <p className="text-slate-600">Massive high-volume vertical storage capabilities for general trade items, spices, and dry grocery staples.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Fleet & Last-Mile */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">Vertical Integration</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#0b2046] mb-6 leading-tight">RA Fred Solution<br />Logistic Fleet</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Unlike many distributors that rely heavily on third parties, PMC operates its own dedicated logistics division. This guarantees full control over last-mile delivery, essential for maintaining the shelf life of fresh and frozen goods.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#0b2046]/10 flex items-center justify-center text-[#0b2046] shrink-0">
                    <FiTruck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0b2046] text-lg">Direct-to-Store Delivery</h5>
                    <p className="text-slate-600">Exclusive carrier service delivering directly to over 400 shops, ensuring timely arrival and optimal condition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#0b2046]/10 flex items-center justify-center text-[#0b2046] shrink-0">
                    <FiMap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0b2046] text-lg">12-State Coverage</h5>
                    <p className="text-slate-600">Optimized routing through 12 core states, backed by a strategic partner network reaching 4,000+ shops continent-wide.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-slate-200">
                <img src="/assets/bg-map-light.jpg" alt="Delivery Fleet" className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Consulting */}
      <section className="py-24 bg-[#0b2046] relative overflow-hidden group">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[30s] group-hover:scale-110 opacity-60"
          style={{ backgroundImage: "url('/assets/bg-global.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2046]/80 via-[#0b2046]/50 to-[#0b2046]/70 z-0"></div>
        {/* Abstract Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">North American Representation</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Strategic Brand Consulting</h3>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-16">
            Leveraging 30+ years of distribution expertise, PMC provides exclusive market entry consulting for international food and consumer goods brands entering the US diaspora market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <FiTarget className="w-8 h-8 text-[#f7a800] mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Go-To-Market Strategy</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Comprehensive rollout planning, pricing analysis, and competitive positioning tailored for the North American landscape.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <FiBriefcase className="w-8 h-8 text-[#f7a800] mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Regulatory Guidance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Navigation of FDA compliance, import documentation, and packaging requirements for seamless customs clearance.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <FiTrendingUp className="w-8 h-8 text-[#f7a800] mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Shelf-Placement Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Direct introductions to our vast retail partner network, ensuring immediate visibility and sales velocity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. In-House Manufacturing & Private Labels */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">Proprietary Production</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0b2046] mb-6">In-House Manufacturing</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Beyond distribution, PMC operates high-end private labels and production houses designed to fill market gaps with uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Memon Brothers */}
            <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-[#0b2046] p-6 flex items-center justify-center">
                <img src="/assets/Partner-Brand-Logos/Memon-Brothers-Logo.png" alt="Memon Brothers Logo" className="max-h-full max-w-full object-contain transition-transform duration-500 transform group-hover:scale-110 drop-shadow-2xl" />
              </div>
              <div className="p-8 flex-grow">
                <div className="text-xs font-bold text-[#f7a800] uppercase tracking-wider mb-2">Private Label Startup</div>
                <h4 className="text-2xl font-black text-[#0b2046] mb-4">Memon Brothers</h4>
                <p className="text-slate-600 text-sm mb-6">
                  A massive portfolio of 1000+ SKUs covering pantry essentials, cooking oil, spices, frozen traditional breads (Bun Kabab, Samosas), and dry groceries.
                </p>
                <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">1000+ SKUs</div>
              </div>
            </div>

            {/* Janat-e-Sheeren */}
            <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-[#0b2046] p-6 flex items-center justify-center">
                <img src="/assets/Partner-Brand-Logos/Jannat-e-Sheeren-Logo.png" alt="Janat-e-Sheeren Logo" className="max-h-full max-w-full object-contain transition-transform duration-500 transform group-hover:scale-110 drop-shadow-2xl" />
              </div>
              <div className="p-8 flex-grow">
                <div className="text-xs font-bold text-[#f7a800] uppercase tracking-wider mb-2">Production House</div>
                <h4 className="text-2xl font-black text-[#0b2046] mb-4">Janat-e-Sheeren</h4>
                <p className="text-slate-600 text-sm mb-6">
                  A premium line of sweets and bakery products, available in both fresh and temperature-controlled frozen formats for long-distance distribution.
                </p>
                <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">100+ SKUs</div>
              </div>
            </div>

            {/* Royal Classic Crockery */}
            <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-[#0b2046] p-6 flex items-center justify-center">
                <img src="/assets/Partner-Brand-Logos/Royal-Classic-Crockery-Logo.png" alt="Royal Classic Crockery Logo" className="max-h-full max-w-full object-contain transition-transform duration-500 transform group-hover:scale-110 drop-shadow-2xl" />
              </div>
              <div className="p-8 flex-grow">
                <div className="text-xs font-bold text-[#f7a800] uppercase tracking-wider mb-2">Own Brand</div>
                <h4 className="text-2xl font-black text-[#0b2046] mb-4">Royal Classic Crockery</h4>
                <p className="text-slate-600 text-sm mb-6">
                  A comprehensive collection of premium tableware and kitchenware crafted for everyday elegance, catering to South Asian households.
                </p>
                <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">500+ SKUs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-20 bg-[#f7a800]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#0b2046] mb-8">
            Ready to Bring Authentic Flavors<br />to Your Market?
          </h2>
          <a href="/contact" className="inline-block px-8 py-4 bg-[#0b2046] hover:bg-slate-800 text-white font-bold rounded-lg transition-colors shadow-xl">
            Partner With Us Today
          </a>
        </div>
      </section>

    </div>
  );
};

export default Services;
