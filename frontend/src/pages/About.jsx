import React from 'react';
import { FiTrendingUp, FiMapPin, FiAward, FiUsers } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';
import ReactCountUp from 'react-countup';
const CountUp = ReactCountUp.default || ReactCountUp;

const About = () => {
  return (
    <div className="pt-20 bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-[#0b2046] overflow-hidden group">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] group-hover:scale-105"
          style={{ backgroundImage: "url('/assets/bg-blueprint.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2046] via-[#0b2046]/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl fade-in" style={{ animationDelay: '0.1s' }}>
            Three Generations of<br />
            <span className="text-[#f7a800]">Distribution Excellence</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed fade-in" style={{ animationDelay: '0.3s' }}>
            From Karachi to Texas—a 57-year heritage of quality, trust, and continental reach.
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#0b2046] mb-8 leading-tight">
                A Heritage Built <br/>on Quality
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Professional Marketing Channel is a fully integrated distribution and logistics powerhouse headquartered in Sugar Land, Texas. Born from a 57-year family legacy that began with Slims Chips in Karachi in 1967, we bridge the authentic flavors of Pakistan and India with the North American diaspora market.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Operating from a 30,000 sq. ft. tri-warehouse complex with a dedicated private fleet, Professional Marketing Channel serves 4,000+ retail partners across the United States and Canada through direct delivery and a strategic partner network spanning both coasts.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-[#f7a800] pl-6">
                  <div className="text-4xl font-black text-[#0b2046] mb-2">
                    <CountUp end={30} duration={2.5} enableScrollSpy scrollSpyOnce />K<span className="text-[#f7a800]">+</span>
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Sq. Ft. Warehouse</div>
                </div>
                <div className="border-l-4 border-[#f7a800] pl-6">
                  <div className="text-4xl font-black text-[#0b2046] mb-2">
                    <CountUp end={4000} separator="," duration={2.5} enableScrollSpy scrollSpyOnce /><span className="text-[#f7a800]">+</span>
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Retail Partners</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/5] border border-slate-200">
                <img src="/assets/bg-aisle.jpg" alt="PMC Warehouse Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Family Legacy (The Team) */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">Leadership</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0b2046] mb-6">The Family Legacy</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three generations of founders, operators, and data-driven leaders steering PMC's North American vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Muhammad Yousuf */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-[340px] bg-gradient-to-br from-[#0b2046] to-[#1a365d] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/bg-blueprint.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <FaCrown className="w-32 h-32 text-[#f7a800] drop-shadow-2xl z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-8 relative bg-white">
                <div className="absolute -top-8 right-6 w-16 h-16 bg-[#f7a800] rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3">
                  <FiAward className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#0b2046] mb-1 mt-4">Muhammad Yousuf</h4>
                <div className="text-sm font-bold text-[#f7a800] uppercase tracking-widest mb-4">The Visionary Founder</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pioneer of the family's industrial journey and founder of Slims Chips in 1967. His commitment to quality and manufacturing excellence continues to set the standard.
                </p>
              </div>
            </div>

            {/* Junaid */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-[340px] bg-slate-100 relative">
                <img src="/assets/team/Junaid.png" alt="Junaid - Founder & CEO" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 relative bg-white">
                <div className="absolute -top-8 right-6 w-16 h-16 bg-[#0b2046] rounded-2xl flex items-center justify-center text-white shadow-lg -rotate-3">
                  <FiTrendingUp className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#0b2046] mb-1 mt-4">Junaid</h4>
                <div className="text-sm font-bold text-[#f7a800] uppercase tracking-widest mb-4">Founder & CEO</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  MBA in Finance and Marketing. Expanded the family business nationwide and spearheaded the US expansion, establishing PMC as a distribution powerhouse.
                </p>
              </div>
            </div>

            {/* Ahad Junaid */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-[340px] bg-slate-100 relative">
                <img src="/assets/team/Ahad Junaid.png" alt="Ahad Junaid - CEO / CFO" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 relative bg-white">
                <div className="absolute -top-8 right-6 w-16 h-16 bg-[#0b2046] rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3">
                  <FiMapPin className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#0b2046] mb-1 mt-4">Ahad Junaid</h4>
                <div className="text-sm font-bold text-[#f7a800] uppercase tracking-widest mb-4">CEO / CFO</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Modern expertise in global logistics and supply chain efficiency (ex-Amazon). Oversees financial operations and distribution throughout North America.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8">
            {/* Sub-leaders */}
            {[
              { name: 'Nazia Junaid', role: 'Warehouse & Data Analytics', desc: 'Leads inventory control and cold-storage data integrity at the HQ.' },
              { name: 'Sidra Ahad', role: 'Warehouse & Data Analytics', desc: 'Manages inbound/outbound flows and stock reconciliation.' },
              { name: 'Anousha Junaid', role: 'Purchase Analysis', desc: 'Supports coordination between vendors and retail partners.' },
              { name: 'Mohammad Raahim', role: 'Logistics Operations', desc: 'Drives distribution expansion across US regions.', image: '/assets/team/Mohammad Raahim.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-slate-100 mb-4 flex items-center justify-center border-2 border-[#f7a800]/40 shadow-sm overflow-hidden">
                   {member.image ? (
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                   ) : (
                     <FiUsers className="w-8 h-8 text-slate-400" />
                   )}
                </div>
                <h5 className="text-lg font-bold text-[#0b2046] text-center mb-1">{member.name}</h5>
                <div className="text-xs font-bold text-[#f7a800] uppercase text-center mb-3 tracking-wider">{member.role}</div>
                <p className="text-slate-500 text-xs text-center leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. The Corporate Legacy Timeline */}
      <section className="py-24 bg-[#0b2046] relative overflow-hidden">
        {/* Vibrant Corporate Background matching Ecosystem */}
        <div className="absolute inset-0 bg-[url('/assets/bg-docks.jpg')] bg-cover bg-bottom bg-fixed opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2046] via-[#0b2046]/80 to-[#0b2046]/60"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">Timeline</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">The Corporate Legacy</h3>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2"></div>
            
            {[
              { year: '1967', title: 'The Origin', desc: 'The family legacy began with Muhammad Yousuf (Father & Founder), who established Slims Chips in Pakistan.' },
              { year: '1993', title: 'PMC Founded', desc: 'Founded Professional Marketing Channel (PMC), distributing brands such as Habib Oil, Meji Biscuit, and Slims Chips.' },
              { year: '1994', title: 'Registered Factory', desc: 'Upon completing his MBA at IBA, Junaid established a registered factory to produce Slims Chips for nationwide distribution.' },
              { year: '2000', title: 'American Biscuit Manufacturer', desc: 'Expanded by launching ABM, a dedicated biscuit production facility.' },
              { year: '2018–2023', title: 'The American Transformation', desc: 'Relocated to the USA and served as Vice President at Alpha Delicacies, overseeing North American launches.' },
              { year: 'Sept 2023', title: 'JDJ Import LLC', desc: 'Marked the formation of a father-son partnership, with Ahad Junaid joining to launch the firm.' },
              { year: 'Sept 2025', title: 'The New Era in Texas', desc: 'JDJ LLC acquires all shares and rebrands as Professional Marketing Channel in Sugar Land, Texas.' }
            ].map((event, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#f7a800] border-4 border-[#0b2046] -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(247,168,0,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                
                {/* Content Box */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-colors ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-[#f7a800] font-black text-2xl mb-1">{event.year}</div>
                    <h4 className="text-white font-bold text-xl mb-3">{event.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Multi-Continental Journey */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-[#f7a800] uppercase tracking-[0.2em] mb-4">Career Milestones</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0b2046] mb-6">The Multi-Continental Journey</h3>
            <p className="text-lg text-slate-600">
              From Premier Group to Colgate Palmolive—a career forged across Pakistan's biggest corporate names, laying the foundation for our logistics mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { company: 'The Premier Group', logo: '/assets/Premier-Group-Logo.png', years: '1986 – 1989', role: 'Specialized in daily sales reporting, bill inspections, and inventory management.', skills: 'Gained proficiency in cashiering and corporate accounting.' },
              { company: 'Colgate Palmolive', logo: '/assets/Colgate-Palmolive-Logo.png', years: '1989 – 1991', role: 'Advanced from Sales Representative to District Sales Executive.', skills: 'Oversaw the Southern region, covering Sindh, Karachi, and Balochistan.' },
              { company: 'Habib Oil Mills', logo: '/assets/HOM-Logo-.png', years: '1991 – 1993', role: 'Promoted from Sales Supervisor to Field Manager.', skills: 'Managed field operations and supply chain activities in major provincial centers.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="text-[#f7a800] font-bold text-sm tracking-widest mt-2">{item.years}</div>
                  <img src={item.logo} alt={item.company} className="h-20 w-auto max-w-[140px] object-contain object-right mix-blend-multiply" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-[#0b2046] leading-tight mb-4">{item.company}</h4>
                <div className="w-12 h-1 bg-slate-200 mb-6"></div>
                <p className="text-slate-700 font-medium mb-3">{item.role}</p>
                <p className="text-slate-500 text-sm mt-auto">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
