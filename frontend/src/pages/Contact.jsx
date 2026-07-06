import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { supabase } from '../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const { error } = await supabase
      .from('contact_inquiries')
      .insert([
        { 
          first_name: formData.firstName, 
          last_name: formData.lastName, 
          email: formData.email, 
          phone: formData.phone, 
          company: formData.company, 
          subject: formData.subject, 
          message: formData.message 
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error('Error submitting contact form:', JSON.stringify(error, null, 2));
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0b2046]">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: "url('/assets/bg-logistics.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2046] via-[#0b2046]/80 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] z-0"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
            Get in <span className="text-[#f7a800]">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Partner with PMC Imports for unparalleled North American distribution. Reach out to our team to discuss opportunities, logistics, or brand representation.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 -mt-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#0b2046]/5 flex items-center justify-center mb-6">
                <FiMapPin className="w-8 h-8 text-[#f7a800]" />
              </div>
              <h3 className="text-xl font-bold text-[#0b2046] mb-3">Headquarters</h3>
              <p className="text-slate-600 font-medium">15850 W Bellfort Ave, Unit C1-C4</p>
              <p className="text-slate-600 font-medium">Sugar Land, TX 77498</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#0b2046]/5 flex items-center justify-center mb-6">
                <FiPhone className="w-8 h-8 text-[#f7a800]" />
              </div>
              <h3 className="text-xl font-bold text-[#0b2046] mb-3">Call Us</h3>
              <a href="tel:+12818549072" className="text-slate-600 font-medium hover:text-[#f7a800] transition-colors mb-1">+1 (281) 854-9072</a>
              <a href="tel:+12818915559" className="text-slate-600 font-medium hover:text-[#f7a800] transition-colors">+1 (281) 891-5559</a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#0b2046]/5 flex items-center justify-center mb-6">
                <FiMail className="w-8 h-8 text-[#f7a800]" />
              </div>
              <h3 className="text-xl font-bold text-[#0b2046] mb-3">Email Us</h3>
              <a href="mailto:info@pmcimportsllc.com" className="text-slate-600 font-medium hover:text-[#f7a800] transition-colors mb-1">info@pmcimportsllc.com</a>
              <p className="text-slate-400 text-sm mt-2">Mon-Fri, 9am - 5pm CST</p>
            </div>
          </div>

          {/* 3. Contact Form & Map Row */}
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            
            {/* Form Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-[#0b2046] mb-2">Send an Inquiry</h2>
                <p className="text-slate-500">Fill out the form below and our logistics team will get back to you promptly.</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 border border-green-200 animate-in fade-in">
                    <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="font-medium">Thank you! Your inquiry has been sent. Our team will contact you shortly.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3 border border-red-200 animate-in fade-in">
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="font-medium">Oops! Something went wrong. Please try again later.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company / Organization</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="Your Business Name" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all text-slate-700 cursor-pointer" required>
                    <option value="" disabled>Select an inquiry type...</option>
                    <option value="brand">Brand Representation</option>
                    <option value="wholesale">Wholesale Orders</option>
                    <option value="logistics">Logistics & Warehousing</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all resize-none" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-[#f7a800] hover:bg-[#e69c00] text-[#0b2046] font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>

            {/* Map Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-slate-100">
              {/* Google Maps iFrame */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5744883168273!2d-95.6378276!3d29.644917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e70a9dd37a57%3A0xc3f58a741544a475!2s15850%20W%20Bellfort%20Ave%20%23c1%2C%20Sugar%20Land%2C%20TX%2077498!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              {/* Optional overlay for aesthetic mapping to brand colors */}
              <div className="absolute inset-0 bg-[#0b2046]/10 pointer-events-none mix-blend-multiply"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Global Network CTA Strip */}
      <section className="py-20 bg-[#f7a800] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-black text-[#0b2046] mb-3">Expanding Your Global Reach</h2>
            <p className="text-[#0b2046]/80 text-lg font-medium max-w-2xl">Leverage our 30,000 sq. ft. warehousing space and multi-continental logistics network.</p>
          </div>
          <a href="tel:+12818549072" className="bg-[#0b2046] text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-[#0b2046] transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap text-lg">
            Call Direct
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
