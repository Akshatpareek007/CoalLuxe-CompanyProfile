import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '../config/brandConfig';
import { ScrollReveal, StaggerContainer, StaggerItem, Floating } from '../components/animations';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Factory,
  MessageCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello CoalLuxe Commercial Desk, I would like to inquire about container export pricing.')}`;
  const phoneUrl = `tel:${(BRAND_CONFIG.companyPhone || '').replace(/[^0-9+]/g, '')}`;
  const emailUrl = `mailto:${BRAND_CONFIG.companyEmail}`;

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us & Commercial Sales Desk | CoalLuxe India"
        description="Connect with CoalLuxe sales and engineering specialists. Request commercial quotations, schedule plant visits, or inquire about bulk truckload supplies."
        keywords="contact CoalLuxe, charcoal supplier phone number, bulk order inquiry, Indore charcoal office, commercial sales desk"
      />
      {/* Main Content: Info Cards & Form */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left: Contact Information Cards */}
            <div>
              <ScrollReveal direction="left" delay={0.1}>
                <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Corporate & Facility Directory
                </h2>
              </ScrollReveal>

              <StaggerContainer staggerDelay={0.15}>
                {/* Head Office Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid var(--color-carbon-700)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.75rem',
                      marginBottom: '1.5rem'
                    }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                      borderColor: 'var(--color-accent-border)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                      <Floating duration={3} distance={2}>
                        <Building2 size={20} />
                      </Floating>
                      <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Commercial Export Office
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {BRAND_CONFIG.companyName} Headquarters
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-gray-300)' }}>
                      <motion.div 
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{BRAND_CONFIG.companyAddress}</span>
                      </motion.div>
                      <motion.div 
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Mail size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                        <a href={`mailto:${BRAND_CONFIG.companyEmail}`} style={{ color: 'var(--color-accent-light)', textDecoration: 'none' }}>
                          {BRAND_CONFIG.companyEmail}
                        </a>
                      </motion.div>
                      <motion.div 
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Phone size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                        <a href={`tel:${(BRAND_CONFIG.companyPhone || '').replace(/[^0-9+]/g, '')}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                          {BRAND_CONFIG.companyPhone}
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </StaggerItem>

                {/* Manufacturing Facility Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid var(--color-carbon-700)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.75rem',
                      marginBottom: '1.5rem'
                    }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                      borderColor: 'var(--color-accent-border)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                      <Floating duration={3.5} distance={2} delay={0.5}>
                        <Factory size={20} />
                      </Floating>
                      <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Kiln & Processing Complex
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      Industrial Pyrolysis & Stuffing Facility
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-gray-300)' }}>
                      <motion.div 
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{BRAND_CONFIG.factoryAddress}</span>
                      </motion.div>
                      <motion.div 
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Clock size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                        <span>Operations: Mon – Sat, 08:00 – 18:00 (UTC+7)</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>

              {/* Quick Contact Cards with stagger animation */}
              <StaggerContainer 
                staggerDelay={0.1}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1rem',
                  marginTop: '2rem'
                }}
              >
                {/* WhatsApp Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <MessageCircle size={20} style={{ color: '#22c55e' }} />
                      </div>
                      <div>
                        <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem' }}>WhatsApp</h4>
                        <p style={{ color: 'var(--color-gray-400)', margin: 0, fontSize: '0.8rem' }}>Instant messaging</p>
                      </div>
                    </div>
                    <p style={{ color: 'var(--color-gray-300)', fontSize: '0.875rem', margin: 0 }}>
                      {BRAND_CONFIG.whatsappNumber}
                    </p>
                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: '#22c55e',
                        color: '#000000',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={16} /> Chat on WhatsApp
                    </motion.a>
                  </motion.div>
                </StaggerItem>

                {/* Call Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid var(--color-accent)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 40px rgba(234, 179, 8, 0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(234, 179, 8, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Phone size={20} style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <div>
                        <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem' }}>Phone Call</h4>
                        <p style={{ color: 'var(--color-gray-400)', margin: 0, fontSize: '0.8rem' }}>Direct voice contact</p>
                      </div>
                    </div>
                    <p style={{ color: 'var(--color-gray-300)', fontSize: '0.875rem', margin: 0 }}>
                      {BRAND_CONFIG.companyPhone}
                    </p>
                    <motion.a
                      href={phoneUrl}
                      className="btn"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: '#000000',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone size={16} /> Call Now
                    </motion.a>
                  </motion.div>
                </StaggerItem>

                {/* Email Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid var(--color-accent-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 40px rgba(250, 204, 21, 0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(250, 204, 21, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Mail size={20} style={{ color: 'var(--color-accent-light)' }} />
                      </div>
                      <div>
                        <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem' }}>Email</h4>
                        <p style={{ color: 'var(--color-gray-400)', margin: 0, fontSize: '0.8rem' }}>Written correspondence</p>
                      </div>
                    </div>
                    <p style={{ color: 'var(--color-gray-300)', fontSize: '0.875rem', margin: 0 }}>
                      {BRAND_CONFIG.companyEmail}
                    </p>
                    <motion.a
                      href={emailUrl}
                      className="btn"
                      style={{
                        backgroundColor: 'var(--color-accent-light)',
                        color: '#000000',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={16} /> Send Email
                    </motion.a>
                  </motion.div>
                </StaggerItem>

                {/* Instagram Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid #E4405F',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 40px rgba(228, 64, 95, 0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(228, 64, 95, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem' }}>Instagram</h4>
                        <p style={{ color: 'var(--color-gray-400)', margin: 0, fontSize: '0.8rem' }}>Social media updates</p>
                      </div>
                    </div>
                    <p style={{ color: 'var(--color-gray-300)', fontSize: '0.875rem', margin: 0 }}>
                      @coalluxe
                    </p>
                    <motion.a
                      href="https://www.instagram.com/coalluxe/?utm_source=ig_web_button_share_sheet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: '#E4405F',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg> Follow on Instagram
                    </motion.a>
                  </motion.div>
                </StaggerItem>

                {/* Amazon Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid #FF9900',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 40px rgba(255, 153, 0, 0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 153, 0, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9900">
                          <path d="M15.93 17.09c-.18.23-.46.35-.77.35-.31 0-.59-.12-.77-.35-.18-.23-.18-.54 0-.77.18-.23.46-.35.77-.35.31 0 .59.12.77.35.18.23.18.54 0 .77z"/>
                          <path d="M18.5 17.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5z"/>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem' }}>Amazon</h4>
                        <p style={{ color: 'var(--color-gray-400)', margin: 0, fontSize: '0.8rem' }}>Shop on Amazon</p>
                      </div>
                    </div>
                    <p style={{ color: 'var(--color-gray-300)', fontSize: '0.875rem', margin: 0 }}>
                      Buy our products on Amazon
                    </p>
                    <motion.a
                      href="https://www.amazon.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: '#FF9900',
                        color: '#000000',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.93 17.09c-.18.23-.46.35-.77.35-.31 0-.59-.12-.77-.35-.18-.23-.18-.54 0-.77.18-.23.46-.35.77-.35.31 0 .59.12.77.35.18.23.18.54 0 .77z"/>
                        <path d="M18.5 17.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5z"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                      </svg> Shop on Amazon
                    </motion.a>
                  </motion.div>
                </StaggerItem>

                {/* Flipkart Card */}
                <StaggerItem>
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid #2874F0',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 40px rgba(40, 116, 240, 0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(40, 116, 240, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#2874F0">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem' }}>Flipkart</h4>
                        <p style={{ color: 'var(--color-gray-400)', margin: 0, fontSize: '0.8rem' }}>Shop on Flipkart</p>
                      </div>
                    </div>
                    <p style={{ color: 'var(--color-gray-300)', fontSize: '0.875rem', margin: 0 }}>
                      Buy our products on Flipkart
                    </p>
                    <motion.a
                      href="https://www.flipkart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: '#2874F0',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg> Shop on Flipkart
                    </motion.a>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
