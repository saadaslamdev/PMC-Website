import React, { useState } from 'react';
import { FiSearch, FiArrowRight, FiBox, FiMapPin, FiX, FiSend, FiChevronDown, FiChevronUp, FiList, FiInfo } from 'react-icons/fi';

const vendorsData = [
  {
    id: 1,
    name: 'Pride',
    logo: '/assets/Partner-Brand-Logos/pride-logo.png', // Fallback to text if missing
    abbr: 'PRD',
    description: 'Premium frozen foods, naans, parathas, and ready-to-cook meat products.',
    category: 'Frozen Foods',
    location: 'National',
    catalog: {
      "Naans & Breads": ["Tandoori Naan", "Whole Wheat Naan", "Garlic Naan", "Plain Paratha", "Aloo Paratha", "Chapati", "Sheermaal", "Taftan", "Lahori Kulcha"],
      "Samosas & Snacks": ["Aloo Samosa 12pc", "Aloo Samosa 30g", "Chicken Samosa 12pc", "Vegetable Samosa 50pc"],
      "Frozen Meats": ["Chicken Tikka", "Chicken Tandoori", "Tikka Boti", "Behari Kabab", "Chapli Kabab", "Seekh Kabab"],
      "Ready Meals": ["Bombay Biryani", "Yakhni Pulao", "Aloo Gosht", "Nihari", "Qorma", "Butter Chicken", "Fish Masala"]
    }
  },
  {
    id: 2,
    name: 'Honest Foods',
    abbr: 'HON',
    description: 'High-quality chutneys, premium sauces, ketchup, pickles, and jams.',
    category: 'Food & Beverage',
    location: 'National',
    catalog: {
      "Chutneys & Dips": ["Imli Chutney", "Mint Chutney", "Pakora Chutney", "Green Chilli Chutney", "Mango Chutney"],
      "Sauces & Ketchups": ["Chilli Garlic Sauce", "Tomato Ketchup", "Spicy Ketchup", "Habanero Ketchup", "Tartar Sauce", "French Dressing", "Pizza Sauce"],
      "Gourmet Mayos": ["Chipotle Mayo", "Jalapeno Mayo", "Honey Mustard", "BBQ Mayo", "Garlic Mayo", "Peri Peri Mayo"],
      "Marinades & Pastes": ["Malai Boti Marinade", "Tikka Marinade", "Bihari Kabab Marinade", "Garlic Paste", "Ginger Paste"],
      "Pickles & Jams": ["Mixed Pickle", "Mango Pickle", "Mango Jam", "Strawberry Jam", "Mix Fruit Jam"]
    }
  },
  {
    id: 3,
    name: 'Lays',
    abbr: 'LAY',
    description: 'Globally recognized potato chips and savory snacks in various authentic flavors.',
    category: 'FMCG',
    location: 'National',
    catalog: {
      "Potato Chips": ["French Cheese", "Masala", "Wavy Texas BBQ", "Wavy Yogurt & Herb", "Paprika", "Salt"]
    }
  },
  {
    id: 4,
    name: 'Olivia',
    abbr: 'OLI',
    description: 'Leading personal care brand featuring hair colors, face washes, and cosmetics.',
    category: 'Health & Beauty',
    location: 'National',
    catalog: {
      "Hair Care": ["Black Hair Color", "Dark Brown Hair Color", "Burgundy Hair Color", "Hair Serum", "Bleaching Powder", "Hair Relaxer"],
      "Skin Care & Creams": ["Neem & Lemon Face Wash", "Fair & Beautiful Face Wash", "Fairness Cream", "Bleach Cream", "Hair Removing Cream"],
      "Lotions": ["Vanilla Fun Lotion", "Strawberry Fun Lotion", "Honey Almond Lotion", "Cleansing Lotion"]
    }
  },
  {
    id: 5,
    name: 'Samsol',
    abbr: 'SAM',
    description: 'Renowned hair care and wellness products trusted across generations.',
    category: 'Health & Beauty',
    location: 'National',
    catalog: {
      "Hair Colors": ["Shade 39", "Shade 41", "Shade 42", "Shade 43", "Shade 44", "Shade 45"]
    }
  },
  {
    id: 6,
    name: 'Laziza',
    abbr: 'LAZ',
    description: 'Authentic dessert mixes including Kheer, Ras Malai, and Falooda.',
    category: 'Food & Beverage',
    location: 'National',
    catalog: {
      "Kheer Mixes": ["Standard Kheer", "Pista/Coconut Kheer", "Almond/Saffron Kheer", "Gajar Kheer", "Vermicelli Kheer"],
      "Traditional Desserts": ["Ras Malai Standard", "Ras Malai Pista", "Falooda Rabri", "Falooda Strawberry", "Sheer Khurma", "Shahi Tukra"]
    }
  },
  {
    id: 7,
    name: 'Ambala Bakery',
    abbr: 'AMB',
    description: 'Traditional bakery items, cookies, cake rusks, and sweet delicacies.',
    category: 'Food & Beverage',
    location: 'National',
    catalog: null // Example of missing data fallback
  },
  {
    id: 8,
    name: 'Memon Brothers',
    abbr: 'MBR',
    description: 'Premium whole spices, powdered spices, and traditional culinary ingredients.',
    category: 'Spices & Culinary',
    location: 'National',
    catalog: null
  },
  {
    id: 9,
    name: 'Tang',
    abbr: 'TNG',
    description: 'Refreshing powdered fruit beverages in multiple citrus and tropical flavors.',
    category: 'Beverages',
    location: 'National',
    catalog: null
  },
];

const categories = ['All Categories', 'FMCG', 'Food & Beverage', 'Frozen Foods', 'Health & Beauty', 'Spices & Culinary', 'Beverages'];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  
  // Modal States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'catalog'
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Filter Logic
  const filteredVendors = vendorsData.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All Categories' || vendor.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenModal = (vendor) => {
    setSelectedProduct(vendor);
    setActiveTab('overview');
    setExpandedCategory(null);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      
      {/* 1. Sleek Hero & Search Section */}
      <section className="relative py-24 bg-[#0b2046] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0b2046]/90 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#f7a800]/30 bg-[#f7a800]/10 text-[#f7a800] text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Vendor Directory
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Distribution <span className="text-[#f7a800]">Network</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-10">
              Browse our comprehensive portfolio of premium global brands and extensive product lines distributed across North America.
            </p>

            {/* Elevated Search Bar */}
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <FiSearch className="h-6 w-6 text-slate-400 group-focus-within:text-[#f7a800] transition-colors" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-16 pr-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f7a800] focus:bg-white/20 backdrop-blur-md text-lg transition-all shadow-2xl" 
                placeholder="Search vendors, products, or categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Directory Layout */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md ${
                  activeCategory === category 
                    ? 'bg-[#0b2046] text-white border-2 border-[#0b2046] scale-105' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0b2046]/30 hover:text-[#0b2046]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8 flex justify-between items-end border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-[#0b2046]">
              {activeCategory === 'All Categories' ? 'All Vendors' : activeCategory}
            </h2>
            <span className="text-slate-500 font-medium">
              Showing {filteredVendors.length} results
            </span>
          </div>

          {/* Grid Layout */}
          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVendors.map((vendor) => (
                <div 
                  key={vendor.id} 
                  onClick={() => handleOpenModal(vendor)}
                  className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group flex flex-col h-full cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle hover background effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7a800]/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150 z-0"></div>

                  <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      {/* Abbreviation Badge */}
                      <div className="w-12 h-12 rounded-xl bg-[#0b2046]/5 flex items-center justify-center border border-[#0b2046]/10">
                        <span className="font-black text-[#0b2046] tracking-wider text-sm">{vendor.abbr}</span>
                      </div>
                      
                      {/* Interactive Arrow */}
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-slate-200 group-hover:bg-[#f7a800] group-hover:border-[#f7a800] group-hover:text-white">
                        <FiArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-[#0b2046] mb-3 group-hover:text-[#f7a800] transition-colors">{vendor.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {vendor.description}
                    </p>
                  </div>

                  {/* Bottom Tags */}
                  <div className="relative z-10 flex items-center gap-3 mt-auto pt-6 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0b2046] text-xs font-bold border border-blue-100/50">
                      <FiBox className="w-3.5 h-3.5" />
                      {vendor.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200/50">
                      <FiMapPin className="w-3.5 h-3.5" />
                      {vendor.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <FiSearch className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0b2046] mb-2">No vendors found</h3>
              <p className="text-slate-500">Try adjusting your search or category filter to find what you're looking for.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('All Categories');}}
                className="mt-6 text-[#f7a800] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom CTA Strip */}
      <section className="py-20 bg-[#f7a800] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col md:flex-row items-center justify-between max-w-6xl">
          <div className="text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-black text-[#0b2046] mb-3">Require a Custom Order?</h2>
            <p className="text-[#0b2046]/80 text-lg font-medium max-w-2xl">Download our full SKU catalog or speak directly with our logistics team for wholesale inquiries.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#0b2046] text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-[#0b2046] transition-all duration-300 shadow-xl">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* 4. Product Details & Quote Modal (Tabbed Version) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#0b2046]/60 backdrop-blur-md transition-opacity"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Container */}
          <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-all animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors shadow-sm"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* LEFT COLUMN: Tabbed Interface (Overview vs Catalog) */}
            <div className="w-full md:w-1/2 bg-slate-50 flex flex-col h-full border-b md:border-b-0 md:border-r border-slate-200">
              
              {/* Tabs Header */}
              <div className="flex border-b border-slate-200 pt-6 px-6 bg-white sticky top-0 z-10">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-2 px-6 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'overview' ? 'border-[#0b2046] text-[#0b2046]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  <FiInfo className="w-4 h-4" />
                  Brand Overview
                </button>
                <button 
                  onClick={() => setActiveTab('catalog')}
                  className={`flex items-center gap-2 px-6 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'catalog' ? 'border-[#0b2046] text-[#0b2046]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  <FiList className="w-4 h-4" />
                  Product Catalog
                </button>
              </div>

              {/* Tab Content Container */}
              <div className="p-8 md:p-10 overflow-y-auto max-h-[40vh] md:max-h-[80vh]">
                
                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-[#0b2046]/5 flex items-center justify-center border border-[#0b2046]/10 mb-6">
                      <span className="font-black text-[#0b2046] tracking-wider text-xl">{selectedProduct.abbr}</span>
                    </div>
                    
                    <h2 className="text-3xl font-black text-[#0b2046] mb-4">{selectedProduct.name}</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      {selectedProduct.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#f7a800]">
                          <FiBox className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Primary Category</p>
                          <p className="font-bold text-[#0b2046]">{selectedProduct.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#f7a800]">
                          <FiMapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Distribution Range</p>
                          <p className="font-bold text-[#0b2046]">{selectedProduct.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CATALOG TAB (Accordion) */}
                {activeTab === 'catalog' && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <h3 className="text-xl font-black text-[#0b2046] mb-6">SKU Catalog List</h3>
                    
                    {selectedProduct.catalog ? (
                      <div className="space-y-3">
                        {Object.entries(selectedProduct.catalog).map(([categoryName, products]) => {
                          const isOpen = expandedCategory === categoryName;
                          return (
                            <div key={categoryName} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm transition-all">
                              <button 
                                onClick={() => setExpandedCategory(isOpen ? null : categoryName)}
                                className={`w-full px-6 py-4 flex items-center justify-between font-bold text-left transition-colors ${isOpen ? 'bg-[#0b2046] text-white' : 'bg-white text-[#0b2046] hover:bg-slate-50'}`}
                              >
                                <span>{categoryName} <span className={`ml-2 text-xs py-0.5 px-2 rounded-full ${isOpen ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{products.length} items</span></span>
                                {isOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5 text-slate-400" />}
                              </button>
                              
                              {/* Accordion Body */}
                              {isOpen && (
                                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                                  <ul className="grid grid-cols-1 gap-2">
                                    {products.map((product, idx) => (
                                      <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm py-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#f7a800]"></div>
                                        {product}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
                        <FiBox className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                        <p className="text-slate-500 font-medium">Detailed catalog data is currently being updated for this brand.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Quote Form (Always visible) */}
            <div className="w-full md:w-1/2 p-8 md:p-10 bg-white overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-[#0b2046] mb-2">Request a Quote</h3>
                <p className="text-slate-500">Found what you need in the catalog? Let us know the quantities to receive wholesale pricing.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Quote requested! (This will connect to Supabase/Web3Forms later)"); handleCloseModal(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="john@company.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all" placeholder="Your Business" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Est. Order Quantity *</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all text-slate-700 cursor-pointer" required defaultValue="">
                      <option value="" disabled>Select quantity...</option>
                      <option value="1-5 Pallets">1-5 Pallets</option>
                      <option value="10+ Pallets">10+ Pallets</option>
                      <option value="Half Container">Half Container</option>
                      <option value="Full Container">Full Container</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Specific SKUs / Required Products *</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all resize-none" placeholder={`Browse the Product Catalog tab on the left and list your required ${selectedProduct.name} items here...`} required></textarea>
                </div>

                <button type="submit" className="w-full mt-2 bg-[#0b2046] hover:bg-[#15346e] text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                  Submit Quote Request
                  <FiSend className="w-5 h-5 text-[#f7a800] group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Products;
