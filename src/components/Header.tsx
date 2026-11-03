import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  Search, 
  PhoneCall,
  ShieldCheck,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

interface HeaderProps {
  hideLogoUntilIntroDone?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hideLogoUntilIntroDone = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const closeMenus = () => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setProductsDropdownOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      closeMenus();
    }
  };

  const searchResults = searchQuery.trim()
    ? PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          width: '100%',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.45)',
          transition: 'all 0.25s ease'
        }}
      >
        {/* BAR 1: LOGO ONLY (CENTERED) */}
        <div 
          className="header-top-bar"
          style={{
            backgroundColor: scrolled ? 'rgba(12, 13, 16, 0.98)' : 'rgba(16, 17, 21, 0.99)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: scrolled ? '0.55rem 0' : '0.85rem 0',
            transition: 'padding 0.25s ease, background-color 0.25s ease'
          }}
        >
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link 
              to="/" 
              onClick={closeMenus}
              className="header-centered-logo"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '0.2rem 0',
                transition: 'transform var(--transition-fast)'
              }}
              aria-label={`${brandConfig.companyName} Home`}
            >
              <img 
                id="header-site-logo-img"
                src="/images/logo_transparent.png" 
                alt="CoalLuxe - The Essence of Fire" 
                style={{
                  height: scrolled ? '38px' : '48px',
                  width: 'auto',
                  maxWidth: '260px',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'height 0.25s ease, opacity 0.2s ease',
                  opacity: hideLogoUntilIntroDone ? 0 : 1
                }}
              />
            </Link>
          </div>
        </div>

        {/* BAR 2: REMAINING NAVIGATION & ACTIONS */}
        <div 
          className="header-bottom-bar"
          style={{
            backgroundColor: scrolled ? 'rgba(9, 10, 12, 0.97)' : 'rgba(12, 13, 16, 0.98)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--color-carbon-700)',
            padding: scrolled ? '0.35rem 0' : '0.45rem 0',
            transition: 'padding 0.25s ease, background-color 0.25s ease'
          }}
        >
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            
            {/* Desktop Navigation Links */}
            <nav className="desktop-nav" aria-label="Main Navigation" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', flexWrap: 'nowrap' }}>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>

              {/* Products Dropdown */}
              <div 
                className="nav-item-dropdown"
                style={{ position: 'relative' }}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                  aria-expanded={productsDropdownOpen}
                >
                  Products <ChevronDown size={14} style={{ transform: productsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </NavLink>

                {productsDropdownOpen && (
                  <div className="dropdown-menu" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '270px',
                    backgroundColor: 'var(--color-carbon-900)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-xl)',
                    padding: '0.5rem 0',
                    zIndex: 950
                  }}>
                    <Link to="/products" onClick={closeMenus} className="dropdown-item">
                      <Layers size={16} color="var(--color-accent)" />
                      <div>
                        <div className="dropdown-title">All Products</div>
                        <div className="dropdown-desc">Complete commercial catalogue</div>
                      </div>
                    </Link>
                    <Link to="/products?category=shisha-hookah" onClick={closeMenus} className="dropdown-item">
                      <Sparkles size={16} color="var(--color-accent)" />
                      <div>
                        <div className="dropdown-title">Shisha / Hookah Charcoal</div>
                        <div className="dropdown-desc">Odorless & sulfur-free cubes</div>
                      </div>
                    </Link>
                    <Link to="/products?category=biochar" onClick={closeMenus} className="dropdown-item">
                      <ShieldCheck size={16} color="var(--color-success)" />
                      <div>
                        <div className="dropdown-title">Biochar</div>
                        <div className="dropdown-desc">Agricultural soil amendment</div>
                      </div>
                    </Link>
                    <Link to="/products?category=tandoor-charcoal" onClick={closeMenus} className="dropdown-item">
                      <Flame size={16} color="var(--color-accent-light)" />
                      <div>
                        <div className="dropdown-title">Hardwood Tandoor Charcoal</div>
                        <div className="dropdown-desc">For clay tandoors & bhatties</div>
                      </div>
                    </Link>
                    <Link to="/products?category=bbq-grill" onClick={closeMenus} className="dropdown-item">
                      <Package size={16} color="var(--color-gray-300)" />
                      <div>
                        <div className="dropdown-title">BBQ / Grill Charcoal</div>
                        <div className="dropdown-desc">Natural lumpwood & live grills</div>
                      </div>
                    </Link>
                    <Link to="/products?category=pooja-charcoal" onClick={closeMenus} className="dropdown-item">
                      <Sparkles size={16} color="#FFFFFF" />
                      <div>
                        <div className="dropdown-title">Pooja Charcoal</div>
                        <div className="dropdown-desc">Sacred havan & dhoop burning</div>
                      </div>
                    </Link>
                    <Link to="/products?category=water-filtration" onClick={closeMenus} className="dropdown-item">
                      <Layers size={16} color="#60A5FA" />
                      <div>
                        <div className="dropdown-title">Water Filtration Charcoal</div>
                        <div className="dropdown-desc">Activated purification carbon</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>

              <NavLink to="/manufacturing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Manufacturing
              </NavLink>
              <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Gallery
              </NavLink>
              <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                FAQ
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </nav>

            {/* Mobile Left Brand Hint (Shown on mobile only) */}
            <div className="mobile-brand-hint" style={{ display: 'none', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-gray-400)', fontWeight: 600 }}>
              <span className="badge badge-accent" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>B2B EXPORT</span>
            </div>

            {/* Remaining Action CTAs (Search & Request Quote) */}
            <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <button
                onClick={() => setSearchOpen(true)}
                className="btn btn-secondary btn-sm icon-btn"
                aria-label="Search catalogue"
                title="Search charcoal catalogue"
                style={{ padding: '0.5rem 0.65rem', borderRadius: 'var(--radius-sm)' }}
              >
                <Search size={16} />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="btn btn-secondary mobile-menu-btn"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                style={{ padding: '0.45rem', display: 'none' }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div 
          className="search-modal-backdrop" 
          onClick={() => setSearchOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 12, 14, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '12vh'
          }}
        >
          <div 
            className="search-modal-box" 
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '620px',
              backgroundColor: 'var(--color-carbon-900)',
              border: '1px solid var(--color-carbon-700)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden',
              margin: '0 1rem'
            }}
          >
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--color-carbon-700)', padding: '0.75rem 1.25rem' }}>
              <Search size={20} color="var(--color-gray-400)" style={{ marginRight: '0.75rem' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products by name, wood species, or application..."
                autoFocus
                style={{
                  flexGrow: 1,
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '1.05rem',
                  outline: 'none'
                }}
              />
              <button 
                type="button" 
                onClick={() => setSearchOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--color-gray-400)', cursor: 'pointer', padding: '0.25rem' }}
              >
                <X size={20} />
              </button>
            </form>

            {/* Quick Results Preview */}
            <div style={{ padding: '1rem', maxHeight: '350px', overflowY: 'auto' }}>
              {searchResults.length > 0 ? (
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gray-400)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                    Matching Products
                  </div>
                  {searchResults.map(p => (
                    <Link
                      key={p.id}
                      to={`/products/${p.slug}`}
                      onClick={closeMenus}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.65rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                        color: '#FFFFFF',
                        borderBottom: '1px solid rgba(255,255,255,0.04)'
                      }}
                      className="search-result-item"
                    >
                      <img src={p.image} alt="" style={{ width: '42px', height: '42px', objectFit: 'cover', borderRadius: '4px' }} />
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{p.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>{p.categoryLabel}</div>
                      </div>
                      <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>View</span>
                    </Link>
                  ))}
                </div>
              ) : searchQuery.trim() ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--color-gray-400)' }}>
                  No matching products found for "{searchQuery}".
                </div>
              ) : (
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', padding: '0.5rem' }}>
                  Popular searches: <button type="button" onClick={() => setSearchQuery('Shisha')} className="search-quick-tag">Shisha</button>, <button type="button" onClick={() => setSearchQuery('Biochar')} className="search-quick-tag">Biochar</button>, <button type="button" onClick={() => setSearchQuery('Tandoor')} className="search-quick-tag">Tandoor Charcoal</button>, <button type="button" onClick={() => setSearchQuery('BBQ')} className="search-quick-tag">BBQ / Grill</button>, <button type="button" onClick={() => setSearchQuery('Pooja')} className="search-quick-tag">Pooja</button>, <button type="button" onClick={() => setSearchQuery('Water')} className="search-quick-tag">Water Filtration</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 1050,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={closeMenus}
        >
          <div 
            className="mobile-drawer-body"
            onClick={e => e.stopPropagation()}
            style={{
              width: '85%',
              maxWidth: '340px',
              height: '100%',
              backgroundColor: 'var(--color-carbon-900)',
              borderLeft: '1px solid var(--color-carbon-700)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
              <Link to="/" onClick={closeMenus} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img 
                  src="/images/logo_transparent.png" 
                  alt="CoalLuxe - The Essence of Fire" 
                  style={{ height: '32px', width: 'auto', maxWidth: '180px', objectFit: 'contain' }} 
                />
              </Link>
              <button 
                onClick={closeMenus}
                className="btn btn-secondary btn-sm"
                aria-label="Close navigation"
                style={{ padding: '0.35rem' }}
              >
                <X size={20} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <NavLink to="/" onClick={closeMenus} className="mobile-nav-link">Home</NavLink>
              <NavLink to="/products" onClick={closeMenus} className="mobile-nav-link">Products Catalogue</NavLink>
              <NavLink to="/about" onClick={closeMenus} className="mobile-nav-link">About Us</NavLink>
              <NavLink to="/manufacturing" onClick={closeMenus} className="mobile-nav-link">Manufacturing Process</NavLink>
              <NavLink to="/gallery" onClick={closeMenus} className="mobile-nav-link">Facility Gallery</NavLink>
              <NavLink to="/faq" onClick={closeMenus} className="mobile-nav-link">Frequently Asked Questions</NavLink>
              <NavLink to="/contact" onClick={closeMenus} className="mobile-nav-link">Contact & Inquiries</NavLink>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, '')}`} 
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <PhoneCall size={16} /> Call Sales Desk
              </a>
            </div>
          </div>
        </div>
      )}

      {/* In-component CSS for Navigation Styles */}
      <style>{`
        .header-centered-logo:hover .header-logo-title {
          color: var(--color-accent);
        }
        .nav-link {
          color: var(--color-gray-300);
          font-weight: 500;
          font-size: 0.88rem;
          padding: 0.45rem 0.65rem;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .nav-link:hover, .nav-link.active {
          color: #FFFFFF;
          background-color: rgba(255, 255, 255, 0.06);
        }
        .nav-link.active {
          color: var(--color-accent);
          font-weight: 600;
        }
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.65rem 1rem;
          text-decoration: none;
          color: var(--color-gray-200);
          transition: background-color var(--transition-fast);
        }
        .dropdown-item:hover {
          background-color: var(--color-carbon-800);
        }
        .dropdown-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: #FFFFFF;
        }
        .dropdown-desc {
          font-size: 0.75rem;
          color: var(--color-gray-400);
          line-height: 1.3;
        }
        .search-quick-tag {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--color-carbon-700);
          color: var(--color-gray-200);
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
          margin-right: 4px;
        }
        .search-quick-tag:hover {
          background: var(--color-accent-subtle);
          color: var(--color-accent);
          border-color: var(--color-accent-border);
        }
        .mobile-nav-link {
          color: var(--color-gray-200);
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.65rem 0.5rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--color-accent);
          background-color: var(--color-carbon-800);
        }
        @media (max-width: 1080px) {
          .nav-link {
            font-size: 0.82rem;
            padding: 0.4rem 0.5rem;
          }
        }
        @media (max-width: 960px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-brand-hint {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .header-quote-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
