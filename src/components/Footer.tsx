import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-carbon-950)',
        borderTop: '1px solid var(--color-carbon-700)',
        color: 'var(--color-gray-400)',
        paddingTop: '4.5rem',
        paddingBottom: '2rem'
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Column 1: Company Profile */}
          <div>
            <Link 
              to="/" 
              style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '1.25rem' }}
              aria-label="CoalLuxe - The Essence of Fire Home"
            >
              <img 
                src="/images/logo_transparent.png" 
                alt="CoalLuxe - The Essence of Fire" 
                style={{ height: '42px', width: 'auto', maxWidth: '220px', objectFit: 'contain', display: 'block' }} 
              />
            </Link>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-gray-300)', marginBottom: '1.5rem' }}>
              {brandConfig.description}
            </p>


          </div>

          {/* Column 2: Core Products */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Export Products
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              {PRODUCTS_DATA.slice(0, 5).map(product => (
                <li key={product.id}>
                  <Link 
                    to={`/products/${product.slug}`} 
                    style={{ color: 'var(--color-gray-300)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    className="footer-link"
                  >
                    <ArrowRight size={12} color="var(--color-accent)" /> {product.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.85rem' }}>
                  View All Catalogue &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Company & Process
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><Link to="/about" className="footer-link" onClick={(e) => handleNavClick(e, '/about')}>About Company</Link></li>
              <li><Link to="/manufacturing" className="footer-link" onClick={(e) => handleNavClick(e, '/manufacturing')}>6-Stage Manufacturing</Link></li>
              <li><Link to="/gallery" className="footer-link" onClick={(e) => handleNavClick(e, '/gallery')}>Factory Gallery</Link></li>
              <li><Link to="/faq" className="footer-link" onClick={(e) => handleNavClick(e, '/faq')}>B2B Buyer FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Global Sales Desk
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--color-gray-300)' }}>
                <MapPin size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{brandConfig.address}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gray-300)' }}>
                <Mail size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${brandConfig.email.split(' ')[0]}`} style={{ color: 'var(--color-gray-200)' }}>
                  {brandConfig.email}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gray-300)' }}>
                <Phone size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--color-gray-200)', fontFamily: 'var(--font-mono)' }}>
                  {brandConfig.phone}
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gray-400)' }}>
                <Clock size={16} color="var(--color-gray-500)" style={{ flexShrink: 0 }} />
                <span>Export Desk: Mon - Sat 08:00 - 18:00 UTC</span>
              </li>
            </ul>

            <div style={{ marginTop: '1.25rem' }}>
              <Link to="/request-quote" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Request Container Quotation
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Compliance & Copyright Row */}
        <div style={{
          borderTop: '1px solid var(--color-carbon-800)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.825rem'
        }}>

          <div style={{ textTransform: 'uppercase' }}>
            &copy; {currentYear} COALLUXE. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--color-gray-400)' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'var(--color-gray-400)' }}>Terms of Supply</Link>
            <Link to="/contact" style={{ color: 'var(--color-gray-400)' }}>Contact</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--color-gray-300);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: var(--color-accent);
          padding-left: 2px;
        }
      `}</style>
    </footer>
  );
};
