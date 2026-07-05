import React from 'react';

const brands = [
  { name: 'Hilal Foods', src: '/assets/Partner-Brand-Logos/hilal-foods-logo.png' },
  { name: 'Pride Food', src: '/assets/Partner-Brand-Logos/Pride-logo.png' },
  { name: 'Sunder Food', src: '/assets/Partner-Brand-Logos/Sunder-Logo.png' },
  { name: 'Daani International', src: '/assets/Partner-Brand-Logos/Daani-Logo.jpg' },
  { name: 'Frooto Juice', src: '/assets/Partner-Brand-Logos/Frooto-Logo.png' },
  { name: 'M&A International', src: '/assets/Partner-Brand-Logos/MA-International-Logo.png' }
];

const BrandsMarquee = () => {
  return (
    <section className="py-24 bg-[#0b1528] relative border-y border-white/5 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Our Exclusive Import Partners
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#f7a800] rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto text-lg">
            Delivering market entry and growth strategies across North America with the most trusted brands.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group py-8">
        {/* Shadow overlays for smooth fade on edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0b1528] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0b1528] to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee Content */}
        <div className="flex w-max animate-[scroll_30s_linear_infinite]">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-5 min-w-[280px] p-8 mx-4 rounded-3xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 backdrop-blur-xl transition-all duration-500 transform hover:-translate-y-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.3)]">
              <div className="h-20 w-44 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                <img src={brand.src} alt={brand.name} className="max-h-full max-w-full object-contain filter drop-shadow-xl" loading="lazy" />
              </div>
              <p className="text-white/90 font-bold tracking-wide mt-2">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
