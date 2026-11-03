import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { Search, ShieldCheck, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'carbon' | 'calorific' | 'name'>('default');

  const pillsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollable = () => {
    if (pillsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = pillsRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const scrollPills = (direction: 'left' | 'right') => {
    if (pillsRef.current) {
      const scrollAmount = 260;
      pillsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollable, 300);
    }
  };

  // Drag-to-scroll functionality for desktop & trackpad
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!pillsRef.current) return;
    isDownRef.current = true;
    startXRef.current = e.pageX - pillsRef.current.offsetLeft;
    scrollLeftStartRef.current = pillsRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !pillsRef.current) return;
    e.preventDefault();
    const x = e.pageX - pillsRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    pillsRef.current.scrollLeft = scrollLeftStartRef.current - walk;
    checkScrollable();
  };

  // Sync category change with state & URL params
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const handleCategoryClick = (catId: string) => {
    if (isDragging) return;
    handleCategoryChange(catId);
  };

  const filteredAndSortedProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return categoryMatch;

      const nameMatch = product.name.toLowerCase().includes(query);
      const taglineMatch = product.tagline.toLowerCase().includes(query);
      const descMatch = product.description.toLowerCase().includes(query);
      const appMatch = product.applications.some(a => a.toLowerCase().includes(query));
      const specMatch = product.specifications.some(s => 
        s.parameter.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)
      );

      return categoryMatch && (nameMatch || taglineMatch || descMatch || appMatch || specMatch);
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'carbon') {
        const getCarbon = (p: typeof a) => {
          const spec = p.specifications.find(s => s.parameter.toLowerCase().includes('carbon'));
          return parseInt(spec?.value.replace(/\D/g, '') || '0', 10);
        };
        return getCarbon(b) - getCarbon(a);
      }
      if (sortBy === 'calorific') {
        const getCal = (p: typeof a) => {
          const spec = p.specifications.find(s => s.parameter.toLowerCase().includes('calorific'));
          return parseInt(spec?.value.replace(/\D/g, '') || '0', 10);
        };
        return getCal(b) - getCal(a);
      }
      return 0; // Default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('default');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="products-page">
      <SEO
        title="Charcoal Products & Bulk Catalog | CoalLuxe Supply India"
        description="Explore CoalLuxe's complete range of high-grade charcoal: hookah shisha cubes, sawdust hexagonal briquettes, coconut shell charcoal, tandoor lumpwood, and biochar."
        keywords="charcoal products, bulk charcoal catalog, coconut charcoal, sawdust briquettes, restaurant lump charcoal, shisha charcoal India"
      />
      {/* Catalogue Filter & Search Bar */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-850)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '1.25rem 0'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem' 
          }}>
            {/* Category Filter Pills Ribbon (Fully Scrollable) */}
            <div style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center',
              width: '100%' 
            }}>
              {/* Left Scroll Chevron */}
              {canScrollLeft && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(to right, var(--color-carbon-850) 65%, transparent)',
                  paddingRight: '1.25rem'
                }}>
                  <button
                    type="button"
                    onClick={() => scrollPills('left')}
                    aria-label="Scroll categories left"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-carbon-800)',
                      border: '1px solid var(--color-carbon-600)',
                      color: 'var(--color-gray-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-carbon-600)';
                      e.currentTarget.style.color = 'var(--color-gray-200)';
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                </div>
              )}

              {/* Scrollable Track */}
              <div 
                ref={pillsRef}
                onScroll={checkScrollable}
                onWheel={(e) => {
                  if (e.deltaY !== 0) {
                    e.currentTarget.scrollLeft += e.deltaY;
                    checkScrollable();
                  }
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="hide-scrollbar"
                style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  overflowX: 'auto', 
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch',
                  padding: '4px 0',
                  width: '100%',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  userSelect: 'none'
                }}
              >
                {PRODUCT_CATEGORIES.map(cat => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="btn"
                      style={{
                        flexShrink: 0,
                        padding: '0.5rem 1.15rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-full)',
                        whiteSpace: 'nowrap',
                        backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-carbon-800)',
                        color: isActive ? '#000000' : 'var(--color-gray-300)',
                        border: isActive ? '1px solid var(--color-accent)' : '1px solid var(--color-carbon-700)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  );
                })}
              </div>

              {/* Right Scroll Chevron */}
              {canScrollRight && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(to left, var(--color-carbon-850) 65%, transparent)',
                  paddingLeft: '1.25rem'
                }}>
                  <button
                    type="button"
                    onClick={() => scrollPills('right')}
                    aria-label="Scroll categories right"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-carbon-800)',
                      border: '1px solid var(--color-carbon-600)',
                      color: 'var(--color-gray-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-carbon-600)';
                      e.currentTarget.style.color = 'var(--color-gray-200)';
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* Row 2: Search Input & Sort Controls */}
            <div style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap' 
            }}>
              <div style={{ position: 'relative', flex: '1 1 260px', maxWidth: '380px' }}>
                <Search 
                  size={16} 
                  style={{ 
                    position: 'absolute', 
                    left: '12px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    color: 'var(--color-gray-400)' 
                  }} 
                />
                <input
                  type="text"
                  placeholder="Search species, specs, BBQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 2rem 0.55rem 2.25rem',
                    backgroundColor: 'var(--color-carbon-900)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#FFFFFF',
                    fontSize: '0.875rem'
                  }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-gray-400)',
                      cursor: 'pointer'
                    }}
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div style={{ position: 'relative', minWidth: '180px' }}>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort products by"
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.85rem',
                    backgroundColor: 'var(--color-carbon-900)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-gray-200)',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="default">Sort: Default</option>
                  <option value="carbon">Highest Fixed Carbon</option>
                  <option value="calorific">Highest Calorific Value</option>
                  <option value="name">Alphabetical (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Grid Section */}
      <section style={{ padding: '3.5rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          {/* Active status & counts */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--color-carbon-800)'
          }}>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', margin: 0 }}>
              Showing <strong style={{ color: '#FFFFFF' }}>{filteredAndSortedProducts.length}</strong> export products
              {selectedCategory !== 'all' && (
                <span> in <span style={{ color: 'var(--color-accent)' }}>{PRODUCT_CATEGORIES.find(c => c.id === selectedCategory)?.name}</span></span>
              )}
              {searchQuery && (
                <span> matching <strong style={{ color: 'var(--color-accent)' }}>"{searchQuery}"</strong></span>
              )}
            </p>

            {(selectedCategory !== 'all' || searchQuery || sortBy !== 'default') && (
              <button
                onClick={clearFilters}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Product Cards Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <motion.div 
              className="product-grid" 
              style={{ marginBottom: '4rem' }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              {filteredAndSortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              backgroundColor: 'var(--color-carbon-900)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--color-carbon-700)',
              maxWidth: '600px',
              margin: '2rem auto 4rem'
            }}>
              <Search size={40} style={{ color: 'var(--color-gray-500)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: '#FFFFFF' }}>No products match your criteria</h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                We couldn't find any charcoal items matching your filter or search keywords. Please adjust your criteria or request a custom formulation.
              </p>
              <button onClick={clearFilters} className="btn btn-primary">
                View All Products
              </button>
            </div>
          )}

          {/* B2B Custom Spec / Private Label Banner */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderLeft: '4px solid var(--color-accent)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent)', fontWeight: 700 }}>
                  Custom Formulation & OEM Private Label
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Need Custom Particle Sizing, Calibrated Ash %, or Private Brand Packaging?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', lineHeight: 1.5, margin: 0 }}>
                We engineer customized charcoal blends, tailored lump size bands (e.g., 5-15cm, 10-25cm), specific moisture guarantees, and pre-printed multi-ply retail carton packaging for commercial brand owners worldwide.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a 
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  backgroundColor: '#FF9900',
                  color: '#000000',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.93 17.09c-.18.23-.46.35-.77.35-.31 0-.59-.12-.77-.35-.18-.23-.18-.54 0-.77.18-.23.46-.35.77-.35.31 0 .59.12.77.35.18.23.18.54 0 .77z"/>
                  <path d="M18.5 17.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
                Shop on Amazon
              </a>
              <a 
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  backgroundColor: '#2874F0',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Shop on Flipkart
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
