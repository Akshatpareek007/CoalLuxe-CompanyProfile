import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Home, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page" style={{ 
      minHeight: '70vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--color-carbon-950)',
      padding: '4rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'var(--color-carbon-900)',
        border: '1px solid var(--color-carbon-700)',
        borderRadius: 'var(--radius-lg)',
        padding: '3rem 2rem'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-carbon-800)',
          border: '1px solid var(--color-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: 'var(--color-accent)'
        }}>
          <Flame size={32} />
        </div>

        <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>404 Error</span>
        <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
          Document or Page Not Found
        </h1>
        <p style={{ color: 'var(--color-gray-400)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          The export specification or page you requested cannot be located. It may have been relocated during catalogue updates or archived.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '350px', margin: '0 auto 2rem' }}>
          <Link to="/" className="btn btn-primary" style={{ justifyContent: 'center' }}>
            <Home size={16} /> Return to Homepage
          </Link>
          <Link to="/products" className="btn btn-secondary" style={{ justifyContent: 'center' }}>
            <Search size={16} /> Explore Product Catalogue
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--color-carbon-800)', paddingTop: '1.25rem', fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>
          Need immediate container assistance? Reach out to our export department at <Link to="/contact" style={{ color: 'var(--color-accent)' }}>Contact Desk</Link>.
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
