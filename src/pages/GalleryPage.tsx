import React, { useState, useMemo } from 'react';
import { GALLERY_DATA, GALLERY_CATEGORIES } from '../data/galleryData';
import { Lightbox } from '../components/Lightbox';
import { Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_DATA;
    return GALLERY_DATA.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const allImages = filteredItems.map(item => item.image);

  return (
    <div className="gallery-page">
      {/* Gallery Filter & Grid Section */}
      <section style={{ padding: '3.5rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem', 
            flexWrap: 'wrap', 
            marginBottom: '2.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid var(--color-carbon-800)'
          }}>
            {GALLERY_CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.25rem',
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

          {/* Media Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-carbon-900)',
                  border: '1px solid var(--color-carbon-700)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
                }}
                className="gallery-card"
                onClick={() => setLightboxIndex(idx)}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px'
                  }}>
                    <span className="badge badge-dark">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.35rem 0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem'
                  }}>
                    <Maximize2 size={13} /> Zoom
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Replacement Note Banner */}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};

export default GalleryPage;
