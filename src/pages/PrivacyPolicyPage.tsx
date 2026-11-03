import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { BRAND_CONFIG } from '../config/brandConfig';


export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="privacy-policy-page">
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Breadcrumbs items={[{ label: 'Privacy Policy & Commercial Confidentiality' }]} />
          
          <div style={{ marginTop: '1.25rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>B2B Trade Privacy</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Privacy Policy & Commercial Data Protection
            </h1>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '0.95rem' }}>
              Effective Date: January 1, 2026 • Governed by Indian Commercial Confidentiality Standards
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ color: 'var(--color-gray-300)', fontSize: '1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                1. Commitment to Commercial Confidentiality
              </h2>
              <p>
                At {BRAND_CONFIG.companyName}, we recognize that Indian trade data, including buyer company names, destination seaports, private label packaging artworks, and target container volumes, constitute proprietary commercial secrets. We are strictly committed to safeguarding the confidentiality of all information submitted through our RFQ workflows, email correspondence, and trade contracts.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                2. Information We Collect
              </h2>
              <p>
                When you interact with our website or submit an RFQ, we may collect:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Corporate identity details (Company name, business registration number, primary commercial contact).</li>
                <li>Professional contact details (Business email, telephone/WhatsApp number, corporate website).</li>
                <li>Commercial trade requirements (Target charcoal grades, container volume, packaging formats, destination port).</li>
                <li>Technical communication logs (Sample delivery receipts, laboratory testing inquiries).</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                3. Purpose of Data Processing
              </h2>
              <p>
                Your information is used exclusively to:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Prepare and calculate formal proforma quotations and maritime freight logistics costs.</li>
                <li>Coordinate ocean shipping space with container lines and issue maritime bills of lading.</li>
                <li>Deliver physical laboratory sample parcels via Indian couriers (DHL / FedEx).</li>
                <li>Comply with export customs, phytosanitary quarantine, and Indian banking regulations.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                4. Third-Party Disclosures & Maritime Partners
              </h2>
              <p>
                We never monetize, rent, or sell your commercial data to third-party marketing brokers. Data is disclosed strictly on a need-to-know operational basis to:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Accredited ocean container lines (e.g., Maersk, MSC, CMA CGM) for booking confirmation and manifest filing.</li>
                <li>Government customs, port authorities, and phytosanitary quarantine bodies to execute legal export clearance.</li>
                <li>Accredited third-party inspection agencies (e.g., SGS, Intertek) when pre-shipment inspection is stipulated in the contract.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                5. Private Label Brand Security
              </h2>
              <p>
                All proprietary client packaging vector files, trademark plates, and brand designs provided for OEM private labeling are protected by non-disclosure protocols. We do not display or distribute your custom branded cartons to other clients without express written consent.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                6. Contact for Commercial Privacy Matters
              </h2>
              <p>
                For questions regarding commercial privacy, NDA execution, or data rectification, please contact our Compliance Officer at <strong style={{ color: 'var(--color-accent)' }}>{BRAND_CONFIG.companyEmail}</strong> or by writing to our commercial headquarters at {BRAND_CONFIG.companyAddress}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
