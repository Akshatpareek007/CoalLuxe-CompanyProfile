import React, { useState, useMemo } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { ChevronDown, Search, HelpCircle, MessageSquare, X } from 'lucide-react';
import { SEO } from '../components/SEO';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-oem-packaging', 'faq-dangerous-goods-dg']);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const catMatch = selectedCategory === 'all' || item.category === selectedCategory;
      if (!catMatch) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
    });
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'ordering', label: 'Ordering & Capacity' },
    { id: 'packaging', label: 'Packaging & Private Label' },
    { id: 'shipping', label: 'Shipping & Compliance' },
    { id: 'quality', label: 'Quality & Testing' }
  ];

  return (
    <div className="faq-page">
      <SEO
        title="Frequently Asked Questions (FAQ) | CoalLuxe Charcoal Supply"
        description="Find answers to common questions about minimum order quantities (MOQ), nationwide shipping times, custom packaging, lab reports, and payment terms."
        keywords="charcoal FAQ, bulk charcoal order questions, charcoal MOQ India, private label packaging FAQ"
      />
      {/* Filter and Accordions */}
      <section style={{ padding: '3.5rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)' }} 
            />
            <input
              type="text"
              placeholder="Search by keyword (e.g., MOQ, packaging, DG 4.2, moisture, samples)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 2.5rem 0.85rem 2.75rem',
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                color: '#FFFFFF',
                fontSize: '1rem'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-gray-400)',
                  cursor: 'pointer'
                }}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem', 
            flexWrap: 'wrap', 
            marginBottom: '2.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid var(--color-carbon-800)' 
          }}>
            {categories.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-carbon-850)',
                    color: isActive ? '#000000' : 'var(--color-gray-300)',
                    border: isActive ? '1px solid var(--color-accent)' : '1px solid var(--color-carbon-700)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          {filteredFAQs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
              {filteredFAQs.map(item => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid var(--color-carbon-700)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      transition: 'border-color var(--transition-fast)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem 1.5rem',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        color: '#FFFFFF',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        gap: '1rem'
                      }}
                    >
                      <span>{item.question}</span>
                      <ChevronDown 
                        size={20} 
                        style={{
                          color: 'var(--color-accent)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform var(--transition-fast)',
                          flexShrink: 0
                        }} 
                      />
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 1.5rem 1.5rem',
                        color: 'var(--color-gray-300)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid var(--color-carbon-800)',
                        paddingTop: '1rem'
                      }}>
                        <div style={{ marginBottom: '0.5rem' }}>
                          <span className="badge badge-dark" style={{ fontSize: '0.7rem' }}>
                            {item.categoryLabel}
                          </span>
                        </div>
                        <p style={{ margin: 0 }}>
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: 'var(--color-carbon-900)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--color-carbon-700)',
              marginBottom: '4rem'
            }}>
              <HelpCircle size={36} style={{ color: 'var(--color-gray-500)', marginBottom: '0.75rem' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '0.5rem' }}>No answers found</h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                We couldn't locate an answer matching "{searchQuery}". Please reach out to our commercial team directly.
              </p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-primary"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Contact Support Box */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ maxWidth: '550px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <MessageSquare size={18} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 700 }}>
                  Direct Procurement Assistance
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Need Custom Terms or Immediate Port Consultation?
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                Our export managers can verify shipping lane space, calculate estimated freight rates to your port, or arrange physical product testing samples.
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

export default FAQPage;
