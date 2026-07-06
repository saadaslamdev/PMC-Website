import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About Us', 'Services', 'Products', 'Contact'];

  return (
    <>
      {/* Premium Gradient Top Bar */}
      <div className="fixed top-0 w-full h-1.5 bg-gradient-to-r from-[#0b2046] via-[#f7a800] to-[#0b2046] z-[60]"></div>
      
      <div className="fixed top-1.5 left-0 w-full z-50 flex justify-center pointer-events-none">
        <header className={`pointer-events-auto w-full transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isScrolled ? 'max-w-7xl rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/60 mt-2 py-2 mx-4' : 'max-w-full rounded-none bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 mt-0 py-4 mx-0'}`}>
          <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 transition-transform duration-300 hover:scale-[1.02] z-50 group">
            <img src="/assets/logo.png" alt="PMC Logo" className="h-12 md:h-16 w-auto object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all" />
            <div className="text-2xl md:text-3xl font-black text-[#0b2046] tracking-tight">
              PMC <span className="text-[#f7a800]">Imports</span>
            </div>
          </Link>
        
          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-[#0b2046] hover:text-[#f7a800] font-bold text-sm uppercase tracking-widest transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#f7a800] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-[#0b2046] focus:outline-none z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col items-center gap-8 text-center">
            {navItems.map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="text-2xl font-bold text-[#0b2046] hover:text-[#f7a800] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
