import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../data/productsData';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  return (
    <motion.article 
      className="product-card" 
      aria-labelledby={`prod-title-${product.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -12,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(217, 119, 6, 0.3)',
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        cursor: 'pointer',
        willChange: 'transform'
      }}
    >
      {/* Image Container */}
      <div className="product-card-img-wrapper" style={{ overflow: 'hidden' }}>
        <motion.img 
          src={product.image} 
          alt={product.name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <motion.div 
          style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
        >
          <motion.span 
            className="badge badge-dark"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {product.categoryLabel}
          </motion.span>
        </motion.div>
      </div>

      {/* Card Content */}
      <motion.div 
        className="product-card-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
      >
        <motion.h3 
          id={`prod-title-${product.id}`} 
          style={{ fontSize: '1rem', marginBottom: '0.35rem', lineHeight: 1.3 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
        >
          <Link to={`/products/${product.slug}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
            {product.name}
          </Link>
        </motion.h3>

        <motion.p 
          style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginBottom: '0.75rem', lineHeight: 1.5, flexGrow: 1 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
        >
          {product.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
        >
          <motion.a 
            href="https://www.amazon.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{ 
              fontSize: '0.75rem', 
              padding: '0.45rem 0.4rem',
              backgroundColor: '#FF9900',
              color: '#000000',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.93 17.09c-.18.23-.46.35-.77.35-.31 0-.59-.12-.77-.35-.18-.23-.18-.54 0-.77.18-.23.46-.35.77-.35.31 0 .59.12.77.35.18.23.18.54 0 .77z"/>
              <path d="M18.5 17.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
            </svg>
            Amazon
          </motion.a>
          <motion.a 
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{ 
              fontSize: '0.75rem', 
              padding: '0.45rem 0.4rem',
              backgroundColor: '#2874F0',
              color: '#FFFFFF',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Flipkart
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};
