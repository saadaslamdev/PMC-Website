import React, { useState, useEffect } from 'react';
import { FiX, FiPlus, FiTrash2, FiSave } from 'react-icons/fi';

const categoriesList = ['FMCG', 'Food & Beverage', 'Frozen Foods', 'Health & Beauty', 'Spices & Culinary', 'Beverages'];

const VendorEditor = ({ vendor, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: vendor?.name || '',
    abbr: vendor?.abbr || '',
    description: vendor?.description || '',
    category: vendor?.category || 'Food & Beverage',
  });

  // Ensure catalog is an object (it might be a JSON string from DB sometimes, or null)
  let initialCatalog = {};
  if (vendor?.catalog) {
    initialCatalog = typeof vendor.catalog === 'string' ? JSON.parse(vendor.catalog) : vendor.catalog;
  }
  
  const [catalog, setCatalog] = useState(initialCatalog);
  const [newSubcategoryName, setNewSubcategoryName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({ visible: false, message: '', title: '', onConfirm: null });

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSubcategory = () => {
    if (newSubcategoryName.trim() && !catalog[newSubcategoryName.trim()]) {
      setCatalog({ ...catalog, [newSubcategoryName.trim()]: [] });
      setNewSubcategoryName('');
    }
  };

  const handleDeleteSubcategory = (subcat) => {
    setConfirmDialog({
      visible: true,
      title: 'Delete Section',
      message: `Are you sure you want to delete the entire section "${subcat}" and all its products?`,
      onConfirm: () => {
        const updatedCatalog = { ...catalog };
        delete updatedCatalog[subcat];
        setCatalog(updatedCatalog);
        setConfirmDialog({ visible: false, message: '', title: '', onConfirm: null });
      }
    });
  };

  const addProduct = (subcategory) => {
    setCatalog({
      ...catalog,
      [subcategory]: [...catalog[subcategory], { name: '', packing: '', price: '' }]
    });
  };

  const updateProduct = (subcategory, index, field, value) => {
    const updatedProducts = [...catalog[subcategory]];
    updatedProducts[index][field] = value;
    setCatalog({ ...catalog, [subcategory]: updatedProducts });
  };

  const deleteProduct = (subcategory, index) => {
    const updatedProducts = [...catalog[subcategory]];
    updatedProducts.splice(index, 1);
    setCatalog({ ...catalog, [subcategory]: updatedProducts });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Clean up empty products
    const cleanCatalog = {};
    Object.keys(catalog).forEach(subcat => {
      cleanCatalog[subcat] = catalog[subcat].filter(p => p.name.trim() !== '');
    });

    const vendorToSave = {
      ...formData,
      catalog: cleanCatalog // Supabase will automatically convert object to JSONB
    };

    await onSave(vendor?.id, vendorToSave);
    setIsSaving(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h2 className="text-xl font-bold text-[#0b2046]">
            {vendor ? `Edit Vendor: ${vendor.name}` : 'Add New Vendor'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <FiX className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Scrollable Form Area */}
        <div className="overflow-y-auto p-6 bg-slate-50 flex-grow">
          <form id="vendor-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* General Info Section */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#0b2046] mb-4">General Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Vendor Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Abbreviation (3 Letters)</label>
                  <input type="text" name="abbr" value={formData.abbr} onChange={handleChange} maxLength={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none uppercase" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Description</label>
                  <input type="text" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Category *</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    {categoriesList.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Catalog Section */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0b2046]">Product Catalog Editor</h3>
                  <p className="text-sm text-slate-500">Manage subcategories and individual products.</p>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="New Subcategory..." 
                    value={newSubcategoryName}
                    onChange={(e) => setNewSubcategoryName(e.target.value)}
                    className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-blue-500"
                  />
                  <button type="button" onClick={handleAddSubcategory} className="bg-[#f7a800] text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-[#e09800]">
                    <FiPlus /> Add Section
                  </button>
                </div>
              </div>

              {Object.keys(catalog).length === 0 ? (
                <div className="text-center py-8 bg-slate-50 border border-slate-200 border-dashed rounded-lg">
                  <p className="text-slate-500">No products added yet. Create a subcategory above to start building the catalog.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {Object.entries(catalog).map(([subcategory, products]) => (
                    <div key={subcategory} className="border border-slate-200 rounded-xl overflow-hidden">
                      {/* Subcategory Header */}
                      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                        <h4 className="font-bold text-[#0b2046]">{subcategory}</h4>
                        <div className="flex gap-2">
                          <button type="button" onClick={() => addProduct(subcategory)} className="text-sm text-blue-600 font-bold hover:underline flex items-center gap-1">
                            <FiPlus /> Product
                          </button>
                          <button type="button" onClick={() => handleDeleteSubcategory(subcategory)} className="text-sm text-red-500 hover:text-red-700 ml-4">
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                      
                      {/* Products List */}
                      <div className="p-4 bg-white">
                        {products.length === 0 ? (
                          <p className="text-xs text-slate-400 italic">No products in this section.</p>
                        ) : (
                          <div className="space-y-3">
                            <div className="grid grid-cols-12 gap-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                              <div className="col-span-5">Product Name</div>
                              <div className="col-span-4">Packing Size</div>
                              <div className="col-span-2">Price ($)</div>
                              <div className="col-span-1 text-center">Act</div>
                            </div>
                            
                            {products.map((product, idx) => (
                              <div key={idx} className="grid grid-cols-12 gap-2 items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                                <div className="col-span-5">
                                  <input type="text" placeholder="e.g. Tandoori Naan" value={product.name} onChange={(e) => updateProduct(subcategory, idx, 'name', e.target.value)} className="w-full px-2 py-1.5 text-sm border border-slate-200 rounded bg-white focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="col-span-4">
                                  <input type="text" placeholder="e.g. 5PCS X 24" value={product.packing} onChange={(e) => updateProduct(subcategory, idx, 'packing', e.target.value)} className="w-full px-2 py-1.5 text-sm border border-slate-200 rounded bg-white focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="col-span-2">
                                  <input type="text" placeholder="0.00" value={product.price} onChange={(e) => updateProduct(subcategory, idx, 'price', e.target.value)} className="w-full px-2 py-1.5 text-sm border border-slate-200 rounded bg-white focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="col-span-1 text-center">
                                  <button type="button" onClick={() => deleteProduct(subcategory, idx)} className="text-red-400 hover:text-red-600 p-1">
                                    <FiTrash2 className="w-4 h-4 mx-auto" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-white flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2 text-slate-600 font-semibold hover:bg-slate-100 rounded-lg transition-colors">
            Cancel
          </button>
          <button type="submit" form="vendor-form" disabled={isSaving} className="px-6 py-2 bg-[#0b2046] text-white font-bold rounded-lg hover:bg-[#15346e] transition-colors flex items-center gap-2 disabled:opacity-70">
            {isSaving ? 'Saving...' : <><FiSave /> Save Catalog</>}
          </button>
        </div>

      </div>

      {/* Editor specific confirmation modal */}
      {confirmDialog.visible && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setConfirmDialog({ visible: false, message: '', title: '', onConfirm: null })}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-in zoom-in-95 fade-in duration-200">
            <h3 className="text-xl font-bold text-[#0b2046] mb-3">{confirmDialog.title}</h3>
            <p className="text-slate-600 mb-6 text-sm">{confirmDialog.message}</p>
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setConfirmDialog({ visible: false, message: '', title: '', onConfirm: null })}
                className="px-4 py-2 text-sm text-slate-600 font-bold hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDialog.onConfirm}
                className="px-4 py-2 text-sm bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default VendorEditor;
