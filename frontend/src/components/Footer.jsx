import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b2046] text-white pt-20 pb-10 mt-auto border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-6xl mx-auto">
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              PMC Imports
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#f7a800]"></span>
            </h4>
            <p className="text-slate-400 mb-4 leading-relaxed">
              A 57-year heritage of distribution excellence, built from Karachi to Texas.
            </p>
            <p className="text-slate-400 leading-relaxed">
              15850 W Bellfort Ave, Unit C1-C4<br/>Sugar Land, TX 77498
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#f7a800]"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-[#f7a800] transition-colors flex items-center gap-2"><span className="text-[#f7a800] text-xs">▸</span> About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-[#f7a800] transition-colors flex items-center gap-2"><span className="text-[#f7a800] text-xs">▸</span> Our Services</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-[#f7a800] transition-colors flex items-center gap-2"><span className="text-[#f7a800] text-xs">▸</span> Product Catalog</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-[#f7a800] transition-colors flex items-center gap-2"><span className="text-[#f7a800] text-xs">▸</span> Leadership Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#f7a800]"></span>
            </h4>
            <ul className="space-y-3">
              <li className="text-slate-400"><span className="font-semibold text-slate-300">Junaid (Phone):</span> <a href="tel:+12818549072" className="hover:text-[#f7a800] transition-colors">+1 (281) 854-9072</a></li>
              <li className="text-slate-400"><span className="font-semibold text-slate-300">Ahad (Phone):</span> <a href="tel:+12818915559" className="hover:text-[#f7a800] transition-colors">+1 (281) 891-5559</a></li>
              <li className="text-slate-400"><span className="font-semibold text-slate-300">Ahad (Email):</span> <a href="mailto:info@pmcimportsllc.com" className="hover:text-[#f7a800] transition-colors">info@pmcimportsllc.com</a></li>
              <li className="text-slate-400"><span className="font-semibold text-slate-300">Junaid (Email):</span> <a href="mailto:junaid@pmcimportsllc.com" className="hover:text-[#f7a800] transition-colors">junaid@pmcimportsllc.com</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Professional Marketing Channel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
