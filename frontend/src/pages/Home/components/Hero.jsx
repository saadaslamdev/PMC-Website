import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[85vh] bg-[#0b2046] overflow-hidden group pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] group-hover:scale-110"
        style={{ backgroundImage: "url('/assets/bg-logistics.jpg')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b2046]/95 via-[#0b2046]/80 to-[#0b2046]/30"></div>

      <div className="container relative z-10 px-6 mx-auto pb-20 md:pb-0">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 mb-6 md:mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium tracking-wide fade-in shadow-xl" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-[#f7a800] animate-pulse"></span>
            Established 1967 • Sugar Land, Texas
          </div>
          
          <h1 className="text-white mb-6 leading-tight fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="block text-xl md:text-3xl font-medium tracking-[0.2em] text-white/80 mb-2 md:mb-3 uppercase">Three Generations Of</span>
            <span className="block text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#f7a800] drop-shadow-2xl mb-1">DISTRIBUTION</span>
            <span className="block text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl">EXCELLENCE</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed mb-8 md:mb-10 fade-in" style={{ animationDelay: '0.4s' }}>
            From Karachi to Texas—a half-century legacy of quality, trust, and continental reach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="/about" className="px-6 md:px-8 py-3 md:py-4 text-center bg-[#f7a800] hover:bg-[#d99000] text-[#0b2046] font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(247,168,0,0.5)]">
              Discover Our Heritage
            </a>
            <a href="/products" className="px-6 md:px-8 py-3 md:py-4 text-center bg-white/5 hover:bg-white/15 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Explore Our Portfolio
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator (Hidden on mobile to save space) */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-70 animate-bounce fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};

export default Hero;
