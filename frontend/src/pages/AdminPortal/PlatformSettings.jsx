import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { FiUpload, FiTrash2, FiRefreshCw, FiImage } from 'react-icons/fi';

const PlatformSettings = ({ showToast }) => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [newBrandName, setNewBrandName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('brand_partners')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      showToast('Error fetching partners: ' + error.message, 'error');
    } else {
      setPartners(data || []);
    }
    setLoading(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile || !newBrandName.trim()) {
      showToast('Please provide both a brand name and a logo image.', 'error');
      return;
    }

    setUploading(true);

    try {
      // 1. Upload file to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('brand-logos')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      // 2. Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('brand-logos')
        .getPublicUrl(filePath);

      // 3. Insert into database
      const { error: dbError } = await supabase
        .from('brand_partners')
        .insert([{ name: newBrandName.trim(), logo_url: publicUrl }]);

      if (dbError) throw dbError;

      showToast('Brand partner added successfully!', 'success');
      setNewBrandName('');
      setSelectedFile(null);
      // Reset file input
      document.getElementById('logo-upload').value = '';
      fetchPartners();

    } catch (error) {
      showToast('Error: ' + error.message, 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id, logoUrl) => {
    if (!window.confirm('Are you sure you want to delete this brand partner?')) return;

    try {
      // Extract file path from URL
      const urlParts = logoUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('brand-logos')
        .remove([fileName]);

      if (storageError) {
        console.warn('Could not delete file from storage:', storageError);
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from('brand_partners')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;

      showToast('Brand partner deleted successfully!', 'success');
      fetchPartners();
    } catch (error) {
      showToast('Error deleting partner: ' + error.message, 'error');
    }
  };

  return (
    <div className="fade-in bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
        <div>
          <h2 className="text-2xl font-black text-[#0b2046]">Brand Partners</h2>
          <p className="text-slate-500 mt-1">Manage the exclusive import partner logos shown on the home page.</p>
        </div>
        <button onClick={fetchPartners} className="text-slate-400 hover:text-[#0b2046] transition-colors p-2" title="Refresh">
          <FiRefreshCw className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Upload Form */}
        <div className="lg:col-span-1">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-[#0b2046] mb-4">Add New Partner</h3>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Brand Name</label>
                <input 
                  type="text" 
                  value={newBrandName}
                  onChange={(e) => setNewBrandName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b2046]/20 focus:border-[#0b2046] transition-all"
                  placeholder="e.g. Hilal Foods"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Logo Image</label>
                <div className="relative">
                  <input 
                    id="logo-upload"
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0b2046]/10 file:text-[#0b2046] hover:file:bg-[#0b2046]/20 transition-all cursor-pointer"
                    required
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Recommended: Transparent PNG, max 2MB.</p>
              </div>
              <button 
                type="submit" 
                disabled={uploading}
                className="w-full mt-4 bg-[#f7a800] hover:bg-[#e69c00] text-[#0b2046] font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <FiRefreshCw className="animate-spin" />
                ) : (
                  <FiUpload />
                )}
                {uploading ? 'Uploading...' : 'Upload Partner'}
              </button>
            </form>
          </div>
        </div>

        {/* Partners List */}
        <div className="lg:col-span-2">
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0b2046]"></div>
            </div>
          ) : partners.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 border-dashed p-12 text-center">
              <FiImage className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0b2046] mb-2">No partners found</h3>
              <p className="text-slate-500">Upload your first brand partner logo using the form.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {partners.map(partner => (
                <div key={partner.id} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative group">
                  <button 
                    onClick={() => handleDelete(partner.id, partner.logo_url)}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200 focus:opacity-100"
                    title="Delete Partner"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                  <div className="h-24 bg-slate-50 rounded-xl mb-3 flex items-center justify-center p-2 border border-slate-100">
                    <img src={partner.logo_url} alt={partner.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="font-bold text-[#0b2046] text-center text-sm truncate px-2" title={partner.name}>
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlatformSettings;
