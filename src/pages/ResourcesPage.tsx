import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { ARTICLES_DATA } from '../data/articlesData';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ResourcesPage: React.FC = () => {
  return (
    <div className="resources-page">
      <SEO
        title="Industry Insights, Technical Guides & Knowledge Hub | CoalLuxe"
        description="Technical guides, buyer procurement benchmarks, thermal comparison analyses, and Dangerous Goods shipping standards from CoalLuxe fuel experts."
        keywords="charcoal technical guides, B2B procurement guide, sawdust vs coconut charcoal, dangerous goods shipping, charcoal thermal output"
      />
      {/* Page Header */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Resources & Technical Guides' }]} />

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-accent">B2B Knowledge Hub</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>• Procurement Insights & Shipping Protocols</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Charcoal Industry Insights & Technical Guides
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              In-depth analysis for Indian importers, restaurant groups, and procurement directors. Explore thermal performance benchmarks, Dangerous Goods ocean shipping standards, and fuel selection guides.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '4.5rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4.5rem'
          }}>
            {ARTICLES_DATA.map(article => (
              <article 
                key={article.id}
                style={{
                  backgroundColor: 'var(--color-carbon-900)',
                  border: '1px solid var(--color-carbon-700)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span className="badge badge-dark">{article.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-gray-400)', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} /> {article.publishDate}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={13} /> {article.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    <Link to={`/resources/${article.slug}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                      {article.title}
                    </Link>
                  </h2>

                  <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {article.excerpt}
                  </p>

                  {/* Key Takeaways Box */}
                  <div style={{
                    backgroundColor: 'var(--color-carbon-800)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                      Core Takeaway
                    </span>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-gray-200)', margin: 0, lineHeight: 1.4 }}>
                      {article.keyTakeaways[0]}
                    </p>
                  </div>

                  <Link 
                    to={`/resources/${article.slug}`}
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Read Technical Guide <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Industry RFQ CTA */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Have Specific Technical Questions About Your Market's Regulations?
            </h3>
            <p style={{ color: 'var(--color-gray-300)', maxWidth: '650px', margin: '0 auto 1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Our engineering and export logistics specialists are available to review your target country's import duties, phytosanitary requirements, or custom moisture specifications.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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

export default ResourcesPage;
