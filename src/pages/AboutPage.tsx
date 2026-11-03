import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { SEO } from '../components/SEO';
import { 
  Award, 
  Flame, 
  ChevronDown
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(0);

  const milestones = [
    {
      title: 'Foundation & Order-Driven Sourcing',
      period: 'Initial Phase',
      description: 'Founded with a clear mandate: bridge the gap between abundant sustainable timber forestry and the rigorous technical demands of Indian buyers. Rather than relying on speculative spot-market stocks, our supply chain was designed as order-driven, tailoring every batch to buyer specifications.'
    },
    {
      title: 'Partner Kiln Network & Regional Expansion',
      period: 'Growth Phase',
      description: 'Built a verified network of 20+ partner production facilities and masonry dome kilns. Each facility is vetted for raw wood legality, controlled carbonization standards, and moisture-controlled warehouse storage, allowing us to supply across Mangrove, Acacia, Khaya, and coconut biomass.'
    },
    {
      title: 'Long-Term Strategic Alliances & Supply Stability',
      period: 'Current & Future Growth',
      description: 'Serving Indian distributors, commercial restaurant franchises, and importers with long-term quarterly and annual fixed-price supply contracts. Expanding automated packaging lines and real-time container loading verification.'
    }
  ];

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <SEO
        title="About Us | CoalLuxe - Charcoal Manufacturing, Kiln Network & Vision"
        description="Discover CoalLuxe's mission, advanced masonry kiln network, sustainable timber sourcing, and reliable bulk supply chain serving commercial buyers across India."
        keywords="about CoalLuxe, charcoal company profile, sustainable charcoal manufacturing, kiln network India, industrial charcoal production"
      />
      <div className="container">
        {/* Company Profile Section */}
        <section style={{ marginBottom: '5rem' }}>
          <FadeIn className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-title-eyebrow">
              <Award size={14} /> Company Profile
            </span>
            <h1 style={{ marginBottom: '1rem' }}>ABOUT COALLUXE</h1>
          </FadeIn>
          
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'stretch' }}>
            {/* Company Photo */}
            <StaggerItem>
              <div style={{ display: 'flex' }}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--color-carbon-700)',
                    boxShadow: 'var(--shadow-xl)',
                    flex: 1
                  }}
                >
                  <img 
                    src="/images/company-profile.jpg" 
                    alt="CoalLuxe Company"
                    style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} 
                  />
                </motion.div>
              </div>
            </StaggerItem>
            
            {/* Company Details */}
            <StaggerItem>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ 
                  fontSize: '1.05rem', 
                  color: 'var(--color-gray-200)', 
                  lineHeight: 1.7,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}>
                  <p>
                    Established in 2020, <strong>CoalLuxe</strong> is a growing charcoal supply and distribution company committed to delivering quality products, reliable service, and dependable business partnerships.
                  </p>
                  <p>
                    With a strong presence across Maharashtra, Madhya Pradesh, Chhattisgarh, and Uttar Pradesh, we have built a growing network of customers and business associates across multiple states in India. As a charcoal stockist and supplier, we cater to diverse business requirements, offering both regular supply and large-scale, contract-based charcoal procurement solutions.
                  </p>
                  <p>
                    Our focus is on maintaining consistent supply, building long-term relationships, and meeting the evolving needs of our clients with professionalism and efficiency. In addition to serving our established markets, we provide <strong>pan-India delivery services</strong>, helping businesses access reliable charcoal supplies across the country.
                  </p>
                  <p>
                    At CoalLuxe, we believe in growing through trust, quality, and commitment. With a vision to expand our reach into international markets, we are working towards future export opportunities and establishing CoalLuxe as a recognized name in the charcoal supply industry, both in India and beyond.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Co-Founders Section */}
        <section style={{ marginBottom: '5rem' }}>
          <FadeIn className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-title-eyebrow">
              <Award size={14} /> Leadership
            </span>
            <h2>Meet Our Co-Founders</h2>
          </FadeIn>
          
          <StaggerContainer style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '3rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Co-Founder 1 */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: 'center' }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, borderColor: 'var(--color-accent-light)' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid var(--color-accent)',
                    margin: '0 auto 1.5rem',
                    backgroundColor: 'var(--color-carbon-800)'
                  }}
                >
                  <img 
                    src="/images/founders/rudraksh-dehariya.jpg" 
                    alt="Mr. Rudraksh Ajay Dehariya"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </motion.div>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Mr. Rudraksh Ajay Dehariya
                </h3>
                <p style={{ color: 'var(--color-accent-light)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Co-Founder & Business Development Head
                </p>
                <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Leading customer relationships, strategic partnerships, and market expansion at CoalLuxe. Focused on strengthening business networks, developing long-term client relationships, expanding the company's presence across India, and exploring new opportunities for growth in domestic and international markets.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Co-Founder 2 */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: 'center' }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, borderColor: 'var(--color-accent-light)' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid var(--color-accent)',
                    margin: '0 auto 1.5rem',
                    backgroundColor: 'var(--color-carbon-800)'
                  }}
                >
                  <img 
                    src="/images/founders/praveen-khandelwal.jpg" 
                    alt="Mr. Praveen Khandelwal"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </motion.div>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Mr. Praveen Khandelwal
                </h3>
                <p style={{ color: 'var(--color-accent-light)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Co-Founder & Finance Head
                </p>
                <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Overseeing financial planning, financial management, budgeting, and financial operations at CoalLuxe. Focused on maintaining financial stability, managing business finances, optimizing resource allocation, and supporting the company's sustainable growth and long-term business objectives.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem', lineHeight: 1.15 }}>
              Indian Charcoal Manufacturing & Supply Chain Partner
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-200)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <strong>{brandConfig.companyName}</strong> operates as an integrated B2B charcoal producer and Indian trade aggregator, dedicated exclusively to the commercial fuels sector.
            </p>
            <p style={{ color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
              We combine traditional kiln carbonization mastery with modern supply chain precision. From legal forestry harvesting to temperature-monitored warehouse stabilization, our output provides Indian buyers with guaranteed fixed carbon content, reliable combustion times, and seamless Dangerous Goods ocean logistics.
            </p>
          </div>

          <div>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-carbon-700)',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <img 
                src="/images/factory_kilns.jpg" 
                alt="Production Kilns Facility"
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                insetInline: 0,
                background: 'linear-gradient(to top, rgba(11, 12, 14, 0.95), transparent)',
                padding: '1.5rem',
                color: '#FFFFFF'
              }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Production Capacity</div>
                <div style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem' }}>{brandConfig.productionCapacity}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones & Evolution Accordion */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-header text-center">
            <span className="section-title-eyebrow">
              <Flame size={14} /> Evolution & Operational Foundation
            </span>
            <h2>Milestones & Supply Chain Maturity</h2>
            <p className="section-subtitle">
              How our order-driven sourcing model evolved into an Indian export operation.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="accordion">
              {milestones.map((milestone, idx) => {
                const isOpen = activeMilestone === idx;
                return (
                  <div key={idx} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => setActiveMilestone(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-accent-light)',
                          backgroundColor: 'var(--color-carbon-800)',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}>
                          {milestone.period}
                        </span>
                        <span style={{ fontSize: '1.05rem' }}>{milestone.title}</span>
                      </div>
                      <ChevronDown size={18} className="accordion-icon" />
                    </button>
                    {isOpen && (
                      <div className="accordion-body">
                        {milestone.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>



      </div>
    </div>
  );
};
