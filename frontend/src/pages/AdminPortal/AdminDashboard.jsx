import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { FiLogOut, FiUsers, FiSettings, FiBox, FiArrowLeft, FiRefreshCw, FiEdit2, FiTrash2, FiPlus, FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';
import VendorEditor from './VendorEditor';
import PlatformSettings from './PlatformSettings';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [logoutHovered, setLogoutHovered] = useState(false);
  const navigate = useNavigate();

  // View States
  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' | 'leads' | 'products' | 'settings'

  // Data States
  const [inquiries, setInquiries] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  // Modal State
  const [editingVendor, setEditingVendor] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Custom UI Popups
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });
  const [confirmDialog, setConfirmDialog] = useState({ visible: false, message: '', title: '', onConfirm: null });

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
  };

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        navigate('/admin/login');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          navigate('/admin/login');
        } else {
          setUser(session.user);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchLeads = async () => {
    setLoadingData(true);
    const { data: contactData } = await supabase.from('contact_inquiries').select('*').order('created_at', { ascending: false });
    const { data: quoteData } = await supabase.from('quote_requests').select('*').order('created_at', { ascending: false });
    if (contactData) setInquiries(contactData);
    if (quoteData) setQuotes(quoteData);
    setLoadingData(false);
  };

  const fetchVendors = async () => {
    setLoadingData(true);
    const { data } = await supabase.from('vendors').select('*').order('name', { ascending: true });
    if (data) setVendors(data);
    setLoadingData(false);
  };

  useEffect(() => {
    if (activeView === 'leads') {
      fetchLeads();
    } else if (activeView === 'products') {
      fetchVendors();
    }
  }, [activeView]);

  const handleSaveVendor = async (id, vendorData) => {
    if (id) {
      // Update existing
      const { error } = await supabase.from('vendors').update(vendorData).eq('id', id);
      if (error) {
        showToast('Error updating vendor: ' + error.message, 'error');
        return;
      }
      showToast('Vendor updated successfully!', 'success');
    } else {
      // Create new
      const { error } = await supabase.from('vendors').insert([vendorData]);
      if (error) {
        showToast('Error creating vendor: ' + error.message, 'error');
        return;
      }
      showToast('New vendor created successfully!', 'success');
    }
    setIsEditorOpen(false);
    fetchVendors();
  };

  const handleDeleteVendor = (id, name) => {
    setConfirmDialog({
      visible: true,
      title: 'Delete Vendor',
      message: `Are you sure you want to completely delete ${name} and their entire catalog? This action cannot be undone.`,
      onConfirm: async () => {
        const { error } = await supabase.from('vendors').delete().eq('id', id);
        if (error) {
          showToast('Error deleting vendor: ' + error.message, 'error');
        } else {
          showToast('Vendor deleted successfully!', 'success');
          fetchVendors();
        }
        setConfirmDialog({ visible: false, message: '', title: '', onConfirm: null });
      }
    });
  };

  const handleStatusChange = async (table, id, newStatus) => {
    // Optimistic UI update
    if (table === 'contact_inquiries') {
      setInquiries(inquiries.map(item => item.id === id ? { ...item, status: newStatus } : item));
    } else if (table === 'quote_requests') {
      setQuotes(quotes.map(item => item.id === id ? { ...item, status: newStatus } : item));
    }

    const { error } = await supabase
      .from(table)
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating status:', error);
      showToast('Failed to update status. Please try again.', 'error');
      fetchLeads(); // refresh data
    } else {
      showToast('Status updated successfully!', 'success');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="fade-in" style={{
        minHeight: 'calc(100vh - 88px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8fafc'
      }}>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>Loading dashboard...</p>
      </div>
    );
  }

  const styles = {
    container: {
      minHeight: 'calc(100vh - 88px)',
      backgroundColor: '#f1f5f9',
      padding: '2rem',
      fontFamily: '"Inter", system-ui, sans-serif',
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2.5rem',
      background: 'linear-gradient(135deg, #0b2046 0%, #15346e 100%)',
      padding: '2rem 2.5rem',
      borderRadius: '20px',
      boxShadow: '0 10px 25px -5px rgba(11, 32, 70, 0.25), 0 8px 10px -6px rgba(11, 32, 70, 0.1)',
      color: 'white',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '800',
      margin: 0,
      letterSpacing: '-0.02em',
    },
    subtitle: {
      color: '#cbd5e1',
      marginTop: '0.5rem',
      marginBottom: 0,
      fontSize: '0.95rem',
      fontWeight: '500'
    },
    logoutBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: logoutHovered ? '#ef4444' : 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '0.75rem 1.25rem',
      borderRadius: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backdropFilter: 'blur(10px)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
    },
    card: (index) => ({
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem 2rem',
      border: '1px solid #e2e8f0',
      boxShadow: hoveredCard === index
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: hoveredCard === index ? 'translateY(-6px)' : 'translateY(0)',
      display: 'flex',
      flexDirection: 'column',
    }),
    cardTitle: {
      fontSize: '1.35rem',
      fontWeight: '800',
      color: '#0b2046',
      marginBottom: '1rem',
      marginTop: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    cardDesc: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '2rem',
      fontSize: '0.95rem',
      flexGrow: 1,
    },
    actionBtn: (index) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: hoveredBtn === index ? '#f7a800' : '#0b2046',
      color: hoveredBtn === index ? '#0b2046' : 'white',
      padding: '0.875rem 1.5rem',
      borderRadius: '12px',
      fontWeight: '700',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      border: 'none',
      width: '100%',
    }),
    // Lead Viewer Styles
    tableContainer: {
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      border: '1px solid #e2e8f0',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
      marginBottom: '2rem',
      overflowX: 'auto'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#0b2046',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'left',
      minWidth: '800px'
    },
    th: {
      borderBottom: '2px solid #e2e8f0',
      padding: '1rem',
      color: '#64748b',
      fontWeight: '700',
      fontSize: '0.85rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    td: {
      borderBottom: '1px solid #f1f5f9',
      padding: '1.25rem 1rem',
      color: '#1e293b',
      fontSize: '0.95rem'
    },
    statusSelect: (status) => ({
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.35rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '800',
      textTransform: 'uppercase',
      backgroundColor: status === 'new' ? '#dcfce7' : (status === 'resolved' ? '#f1f5f9' : '#e0e7ff'),
      color: status === 'new' ? '#166534' : (status === 'resolved' ? '#64748b' : '#3730a3'),
      border: `1px solid ${status === 'new' ? '#bbf7d0' : (status === 'resolved' ? '#e2e8f0' : '#c7d2fe')}`,
      cursor: 'pointer',
      outline: 'none',
      fontFamily: 'inherit',
      transition: 'all 0.2s ease'
    }),
    backBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'white',
      color: '#0b2046',
      border: '1px solid #e2e8f0',
      padding: '0.75rem 1.25rem',
      borderRadius: '12px',
      fontWeight: '700',
      cursor: 'pointer',
      fontSize: '0.95rem',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      transition: 'all 0.2s ease',
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerRow}>
        <div>
          <h1 style={styles.title}>PMC Admin Dashboard</h1>
          <p style={styles.subtitle}>Welcome back, {user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          style={styles.logoutBtn}
          onMouseEnter={() => setLogoutHovered(true)}
          onMouseLeave={() => setLogoutHovered(false)}
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {activeView === 'dashboard' ? (
        <div style={styles.grid}>
          <div
            style={styles.card(0)}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 style={styles.cardTitle}><FiBox /> Product Management</h2>
            <p style={styles.cardDesc}>Add, edit, or remove products from the PMC catalog. Update vendor details, categories, and specifications.</p>
            <button
              onClick={() => setActiveView('products')}
              style={styles.actionBtn(0)}
              onMouseEnter={() => setHoveredBtn(0)}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Manage Products
            </button>
          </div>

          <div
            style={styles.card(1)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 style={styles.cardTitle}><FiUsers /> Lead Management</h2>
            <p style={styles.cardDesc}>View and respond to incoming quote requests and contact form submissions from potential clients.</p>
            <button
              onClick={() => setActiveView('leads')}
              style={styles.actionBtn(1)}
              onMouseEnter={() => setHoveredBtn(1)}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              View Leads
            </button>
          </div>

          <div
            style={styles.card(2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 style={styles.cardTitle}><FiSettings /> Platform Settings</h2>
            <p style={styles.cardDesc}>Configure general website settings, update brand partner logos, and manage administrator access.</p>
            <button
              onClick={() => setActiveView('settings')}
              style={styles.actionBtn(2)}
              onMouseEnter={() => setHoveredBtn(2)}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Open Settings
            </button>
          </div>
        </div>
      ) : (
        <div className="fade-in">
          <button style={styles.backBtn} onClick={() => setActiveView('dashboard')}>
            <FiArrowLeft /> Back to Dashboard
          </button>

          {activeView === 'settings' && (
            <PlatformSettings showToast={showToast} />
          )}

          {activeView === 'products' && (
            <div style={styles.tableContainer}>
              <div style={styles.sectionTitle}>
                Vendor & Product Catalog
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={fetchVendors} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }} title="Refresh">
                    <FiRefreshCw className={loadingData ? 'animate-spin' : ''} />
                  </button>
                  <button
                    onClick={() => { setEditingVendor(null); setIsEditorOpen(true); }}
                    style={{ background: '#f7a800', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                  >
                    <FiPlus /> Add Vendor
                  </button>
                </div>
              </div>

              {loadingData ? (
                <p style={{ color: '#64748b' }}>Loading vendors...</p>
              ) : vendors.length === 0 ? (
                <p style={{ color: '#64748b' }}>No vendors found.</p>
              ) : (
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Vendor Name</th>
                      <th style={styles.th}>Category</th>
                      <th style={styles.th}>Products Count</th>
                      <th style={styles.th}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendors.map((vendor) => {
                      // Calculate total products
                      let productCount = 0;
                      if (vendor.catalog && typeof vendor.catalog === 'object') {
                        Object.values(vendor.catalog).forEach(arr => {
                          if (Array.isArray(arr)) productCount += arr.length;
                        });
                      }

                      return (
                        <tr key={vendor.id}>
                          <td style={{ ...styles.td, fontWeight: 'bold', color: '#0b2046' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              {vendor.logo ? (
                                <img src={vendor.logo} alt={vendor.name} style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '6px', border: '1px solid #e2e8f0', padding: '2px', background: 'white' }} />
                              ) : (
                                <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#64748b' }}>{vendor.abbr}</div>
                              )}
                              <div>
                                {vendor.name}
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500', marginTop: '0.1rem' }}>{vendor.abbr}</div>
                              </div>
                            </div>
                          </td>
                          <td style={styles.td}>{vendor.category}</td>
                          <td style={styles.td}>
                            <span style={{ background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold', color: '#475569' }}>
                              {productCount} items
                            </span>
                          </td>
                          <td style={styles.td}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                              <button
                                onClick={() => { setEditingVendor(vendor); setIsEditorOpen(true); }}
                                style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '600' }}
                              >
                                <FiEdit2 /> Edit
                              </button>
                              <button
                                onClick={() => handleDeleteVendor(vendor.id, vendor.name)}
                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '600' }}
                              >
                                <FiTrash2 /> Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {activeView === 'leads' && (
            <>
              {/* Quote Requests Table */}
              <div style={styles.tableContainer}>
                <div style={styles.sectionTitle}>
                  Wholesale Quote Requests
                  <button onClick={fetchLeads} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }} title="Refresh">
                    <FiRefreshCw className={loadingData ? 'animate-spin' : ''} />
                  </button>
                </div>
                {loadingData ? (
                  <p style={{ color: '#64748b' }}>Loading quotes...</p>
                ) : quotes.length === 0 ? (
                  <p style={{ color: '#64748b' }}>No quote requests yet.</p>
                ) : (
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Brand</th>
                        <th style={styles.th}>Client Name</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Quantity</th>
                        <th style={styles.th}>Required SKUs</th>
                        <th style={styles.th}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes.map((quote) => (
                        <tr key={quote.id}>
                          <td style={styles.td}>{formatDate(quote.created_at)}</td>
                          <td style={{ ...styles.td, fontWeight: 'bold', color: '#0b2046' }}>{quote.brand}</td>
                          <td style={styles.td}>
                            {quote.full_name}
                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{quote.company}</div>
                          </td>
                          <td style={styles.td}>
                            <a href={`mailto:${quote.email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{quote.email}</a>
                          </td>
                          <td style={styles.td}>{quote.quantity}</td>
                          <td style={{ ...styles.td, maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={quote.skus}>
                            {quote.skus}
                          </td>
                          <td style={styles.td}>
                            <select
                              style={styles.statusSelect(quote.status)}
                              value={quote.status}
                              onChange={(e) => handleStatusChange('quote_requests', quote.id, e.target.value)}
                            >
                              <option value="new">New</option>
                              <option value="in progress">In Progress</option>
                              <option value="replied">Replied</option>
                              <option value="resolved">Resolved</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Contact Inquiries Table */}
              <div style={styles.tableContainer}>
                <div style={styles.sectionTitle}>General Inquiries</div>
                {loadingData ? (
                  <p style={{ color: '#64748b' }}>Loading inquiries...</p>
                ) : inquiries.length === 0 ? (
                  <p style={{ color: '#64748b' }}>No contact inquiries yet.</p>
                ) : (
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Subject</th>
                        <th style={styles.th}>Message</th>
                        <th style={styles.th}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.map((inquiry) => (
                        <tr key={inquiry.id}>
                          <td style={styles.td}>{formatDate(inquiry.created_at)}</td>
                          <td style={styles.td}>
                            {inquiry.first_name} {inquiry.last_name}
                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{inquiry.company}</div>
                          </td>
                          <td style={styles.td}>
                            <a href={`mailto:${inquiry.email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{inquiry.email}</a>
                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{inquiry.phone}</div>
                          </td>
                          <td style={styles.td}>{inquiry.subject}</td>
                          <td style={{ ...styles.td, maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={inquiry.message}>
                            {inquiry.message}
                          </td>
                          <td style={styles.td}>
                            <select
                              style={styles.statusSelect(inquiry.status)}
                              value={inquiry.status}
                              onChange={(e) => handleStatusChange('contact_inquiries', inquiry.id, e.target.value)}
                            >
                              <option value="new">New</option>
                              <option value="in progress">In Progress</option>
                              <option value="replied">Replied</option>
                              <option value="resolved">Resolved</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}        </div>
      )}

      {/* Vendor Editor Modal */}
      {isEditorOpen && (
        <VendorEditor
          vendor={editingVendor}
          onClose={() => setIsEditorOpen(false)}
          onSave={handleSaveVendor}
          showToast={showToast}
        />
      )}

      {/* Global Toast Notification */}
      {toast.visible && (
        <div className="fixed bottom-6 right-6 z-[300] animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
            {toast.type === 'success' ? <FiCheckCircle className="w-6 h-6 text-green-500" /> : <FiAlertCircle className="w-6 h-6 text-red-500" />}
            <p className="font-bold">{toast.message}</p>
            <button onClick={() => setToast(prev => ({ ...prev, visible: false }))} className="ml-4 text-slate-400 hover:text-slate-600">
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Global Confirmation Modal */}
      {confirmDialog.visible && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setConfirmDialog({ visible: false, message: '', title: '', onConfirm: null })}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-in zoom-in-95 fade-in duration-200">
            <h3 className="text-2xl font-bold text-[#0b2046] mb-4">{confirmDialog.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">{confirmDialog.message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDialog({ visible: false, message: '', title: '', onConfirm: null })}
                className="px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDialog.onConfirm}
                className="px-5 py-2.5 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-md"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
