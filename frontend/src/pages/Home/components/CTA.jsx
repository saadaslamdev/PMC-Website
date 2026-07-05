import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b2046]">
      {/* Clean Corporate Background */}
      <div className="absolute inset-0 bg-[url('/assets/bg-aisle.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Ready to Bring Authentic Flavors to Your Market?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 md:mb-12 font-light leading-relaxed">
            PMC offers end-to-end import, warehousing, and last-mile delivery backed by 57 years of family-built trust. Partner with us today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
            <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#f7a800] hover:bg-[#d99000] text-[#0b2046] font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgb(247,168,0,0.3)]">
              Contact Our Team
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+12818549072" className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl transition-all duration-300">
              +1 (281) 854-9072
            </a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-400 font-medium tracking-wide">
              Headquarters: <span className="text-white">15850 W Bellfort Ave, Unit C1-C4, Sugar Land, TX 77498</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
