import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { BRAND_CONFIG } from '../config/brandConfig';
import { SEO } from '../components/SEO';


export const TermsPage: React.FC = () => {
  return (
    <div className="terms-page">
      <SEO
        title="Terms of Sale & Supply Conditions | CoalLuxe Commercial Sales"
        description="Review standard terms of sale, supply agreements, payment terms, and delivery schedules for CoalLuxe commercial charcoal orders across India."
        keywords="charcoal terms of sale, supply contract terms, commercial conditions, payment terms India"
      />
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Breadcrumbs items={[{ label: 'Commercial Terms of Sale & Export Conditions' }]} />
          
          <div style={{ marginTop: '1.25rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Incoterms® 2020 Framework</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Indian Commercial Terms of Sale
            </h1>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '0.95rem' }}>
              Standard Operating Conditions for B2B Ocean Freight, Proforma Quotations & Production Supply
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ color: 'var(--color-gray-300)', fontSize: '1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                1. Quotation Validity & Ocean Freight Fluctuations
              </h2>
              <p>
                All proforma quotations issued by {BRAND_CONFIG.companyName} remain legally valid for fourteen (14) calendar days from the date of issuance unless explicitly stated otherwise. Because Indian container freight indices and bunker adjustment factors (BAF) vary weekly, CIF and CFR quotations are subject to carrier space reconfirmation at the time of official booking confirmation.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                2. Applicable Trade Terms (Incoterms® 2020)
              </h2>
              <p>
                All transactions are governed strictly by ICC Incoterms® 2020 rules:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>FOB (Free on Board):</strong> Seller delivers goods on board the vessel nominated by the buyer at the origin seaport. Seller handles export clearance; buyer covers ocean freight and marine cargo insurance.</li>
                <li><strong>CIF (Cost, Insurance and Freight):</strong> Seller contracts for and pays ocean freight to the named destination port and procures Institute Cargo Clauses marine insurance (minimum 110% value). Risk transfers to the buyer once goods pass the ship’s rail.</li>
                <li><strong>CFR (Cost and Freight):</strong> Similar to CIF, but buyer procures independent maritime insurance coverage.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                3. Quality Standards & Specification Tolerances
              </h2>
              <p>
                Charcoal is an organic natural biofuel produced through kiln pyrolysis. The specifications published on our website and in proforma sheets reflect typical laboratory averages based on ASTM D3172–D3175 and ISO 1928 test standards. A natural variance tolerance of ±2% on fixed carbon and ±0.5% on moisture is standard in commercial lumpwood commodities.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                4. Independent Pre-Shipment Inspection
              </h2>
              <p>
                Buyers possess the right, at their own expense, to appoint an Indianly recognized independent inspection agency (such as SGS, Intertek, or Bureau Veritas) to inspect goods at our warehouse prior to container stuffing or during container sealing. The results of such inspection are final with respect to cargo condition at the loading port.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                5. Payment Terms & Security
              </h2>
              <p>
                Standard export payment modalities include:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Telegraphic Transfer (T/T):</strong> 30% advance deposit upon proforma invoice signing to secure kiln capacity; 70% balance payable within 5 business days against transmission of scanned original Bills of Lading and Certificate of Analysis.</li>
                <li><strong>Letter of Credit (L/C):</strong> 100% Irrevocable, confirmed Letter of Credit payable at sight against presentation of conforming shipping documents, issued by a prime Indian commercial bank.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                6. Force Majeure & Maritime Exclusions
              </h2>
              <p>
                Neither party shall be liable for non-performance or delays caused by events beyond reasonable operational control, including natural disasters, typhoons, port congestion strikes, geopolitical embargoes, or government changes in Dangerous Goods UN 1361 export regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
