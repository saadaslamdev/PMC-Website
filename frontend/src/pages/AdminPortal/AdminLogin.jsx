import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { FiMail, FiLock } from 'react-icons/fi';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/admin/dashboard');
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else if (data.user) {
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 88px)',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    card: {
      position: 'relative',
      zIndex: 1,
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '24px',
      padding: '3rem',
      width: '100%',
      maxWidth: '440px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.05)',
      animation: 'slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2.5rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '0.5rem',
      letterSpacing: '-0.02em',
      marginTop: 0,
    },
    subtitle: {
      color: '#64748b',
      fontSize: '0.95rem',
      margin: 0
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#334155',
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    icon: (isFocused) => ({
      position: 'absolute',
      left: '1rem',
      color: isFocused ? '#3b82f6' : '#94a3b8',
      fontSize: '1.25rem',
      transition: 'color 0.3s ease',
    }),
    input: (isFocused) => ({
      width: '100%',
      padding: '0.875rem 1rem 0.875rem 3rem',
      border: '1px solid',
      borderColor: isFocused ? '#3b82f6' : '#cbd5e1',
      boxShadow: isFocused ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      color: '#1e293b',
      background: isFocused ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      outline: 'none',
    }),
    button: {
      background: isHovered && !loading && email && password ? '#0f172a' : '#1e293b',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: loading || !email || !password ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      opacity: loading || !email || !password ? 0.7 : 1,
      transform: isHovered && !loading && email && password ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered && !loading && email && password ? '0 10px 20px rgba(15, 23, 42, 0.1)' : 'none',
    },
    error: {
      background: '#fef2f2',
      color: '#ef4444',
      padding: '1rem',
      borderRadius: '12px',
      fontSize: '0.875rem',
      border: '1px solid #fecaca',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    spinner: {
      width: '20px',
      height: '20px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: '#fff',
      animation: 'spinInline 1s ease-in-out infinite',
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes spinInline {
            to { transform: rotate(360deg); }
          }
          @keyframes slideUpFade {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <div style={styles.container} className="fade-in">
        <div style={styles.card}>
          <div style={styles.header}>
            <h1 style={styles.title}>Admin Portal</h1>
            <p style={styles.subtitle}>Secure access to the PMC management dashboard</p>
          </div>

          <form onSubmit={handleLogin} style={styles.form}>
            {error && (
              <div style={styles.error}>
                <span>{error}</span>
              </div>
            )}

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <div style={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  style={styles.input(focusedInput === 'email' || email.length > 0)}
                  placeholder="admin@pmc.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
                <FiMail style={styles.icon(focusedInput === 'email' || email.length > 0)} />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <div style={styles.inputWrapper}>
                <input
                  id="password"
                  type="password"
                  style={styles.input(focusedInput === 'password' || password.length > 0)}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
                <FiLock style={styles.icon(focusedInput === 'password' || password.length > 0)} />
              </div>
            </div>

            <button 
              type="submit" 
              style={styles.button}
              disabled={loading || !email || !password}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {loading ? (
                <div style={styles.spinner}></div>
              ) : (
                'Authenticate'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
