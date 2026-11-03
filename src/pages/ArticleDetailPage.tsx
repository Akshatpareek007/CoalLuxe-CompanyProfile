import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { ARTICLES_DATA } from '../data/articlesData';
import { PRODUCTS_DATA } from '../data/productsData';
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES_DATA.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const relatedProduct = article.relatedProductSlug 
    ? PRODUCTS_DATA.find(p => p.slug === article.relatedProductSlug) 
    : null;

  return (
    <div className="article-detail-page">
      <SEO
        title={`${article.title} | CoalLuxe Knowledge Hub`}
        description={article.excerpt}
        keywords={`${article.category}, charcoal technical guide, ${article.title}, bulk charcoal supply`}
        image={article.image}
        type="article"
      />
      {/* Header & Meta */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Breadcrumbs 
            items={[
              { label: 'Resources', path: '/resources' },
              { label: article.title }
            ]} 
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginTop: '1.25rem', marginBottom: '1rem' }}>
            <span className="badge badge-accent">{article.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} /> {article.publishDate}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.25, marginBottom: '1.25rem', color: '#FFFFFF' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gray-400)', fontSize: '0.9rem' }}>
            <User size={15} style={{ color: 'var(--color-accent)' }} />
            <span>Authored by <strong style={{ color: 'var(--color-gray-200)' }}>{article.author}</strong></span>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Featured Image */}
          <div style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            aspectRatio: '16/9',
            border: '1px solid var(--color-carbon-700)',
            marginBottom: '3rem'
          }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Key Takeaways Callout */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderLeft: '4px solid var(--color-accent)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} style={{ color: 'var(--color-accent)' }} /> Executive Summary & Key Takeaways
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--color-gray-200)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Paragraphs */}
          <div style={{ color: 'var(--color-gray-200)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '3.5rem' }}>
            {article.content.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: '1.5rem' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Product Callout */}
          {relatedProduct && (
            <div style={{
              backgroundColor: 'var(--color-carbon-900)',
              border: '1px solid var(--color-carbon-700)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '3.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name} 
                  style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-carbon-700)' }} 
                />
                <div>
                  <span className="badge badge-accent" style={{ marginBottom: '0.35rem' }}>Related Product Specification</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: '0.2rem 0' }}>{relatedProduct.name}</h4>
                  <p style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', margin: 0 }}>
                    MOQ: {relatedProduct.moq.split('(')[0]}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a 
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ 
                    backgroundColor: '#FF9900',
                    color: '#000000',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.93 17.09c-.18.23-.46.35-.77.35-.31 0-.59-.12-.77-.35-.18-.23-.18-.54 0-.77.18-.23.46-.35.77-.35.31 0 .59.12.77.35.18.23.18.54 0 .77z"/>
                    <path d="M18.5 17.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                  </svg>
                  Amazon
                </a>
                <a 
                  href="https://www.flipkart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ 
                    backgroundColor: '#2874F0',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Flipkart
                </a>
              </div>
            </div>
          )}

          {/* Navigation Back */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid var(--color-carbon-800)', paddingTop: '2rem' }}>
            <Link to="/resources" className="btn btn-secondary">
              <ArrowLeft size={16} /> All Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
