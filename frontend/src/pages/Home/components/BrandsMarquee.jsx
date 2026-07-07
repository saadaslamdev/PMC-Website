import React, { useState, useEffect } from 'react';
import { supabase } from '../../../supabaseClient';

// Local brand list removed as requested. Data is now solely fetched from Supabase.

const BrandsMarquee = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data, error } = await supabase
          .from('brand_partners')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          setBrands(data.map(item => ({ name: item.name, src: item.logo_url })));
        } else {
          setBrands([]);
        }
      } catch (error) {
        console.error('Error fetching brand partners:', error);
        setBrands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#0b1528] relative border-y border-white/5 overflow-hidden min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f7a800]"></div>
      </section>
    );
  }

  // Ensure we have enough items to loop seamlessly.
  // If there's only 1 or 2 items, we duplicate them more to fill the screen width.
  const marqueeItems = brands.length > 0 
    ? [...brands, ...brands, ...brands, ...brands, ...brands].slice(0, Math.max(brands.length * 4, 15))
    : [];

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

      {brands.length > 0 ? (
        <div className="relative flex overflow-hidden group py-8">
          {/* Shadow overlays for smooth fade on edges */}
          <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0b1528] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0b1528] to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee Content */}
          <div className="flex w-max animate-[scroll_30s_linear_infinite]">
            {marqueeItems.map((brand, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-5 min-w-[280px] p-8 mx-4 rounded-3xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 backdrop-blur-xl transition-all duration-500 transform hover:-translate-y-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.3)]">
                <div className="h-20 w-44 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                  <img src={brand.src} alt={brand.name} className="max-h-full max-w-full object-contain filter drop-shadow-xl" loading="lazy" />
                </div>
                <p className="text-white/90 font-bold tracking-wide mt-2 text-center">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-block px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-slate-400 font-medium tracking-wide">Brand partner portfolio updating...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandsMarquee;
