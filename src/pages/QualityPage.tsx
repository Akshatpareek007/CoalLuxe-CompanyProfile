import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  FlaskConical, 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle
} from 'lucide-react';

export const QualityPage: React.FC = () => {

  return (
    <div className="quality-page">
      {/* Page Header */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Quality Assurance & Testing' }]} />

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-accent">ASTM & ISO Analytical Standards</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>• UN 1361 Class 4.2 Verified</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Rigorous Laboratory Quality Control & Testing
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              In Indian bio-carbon trade, consistent thermal performance and strict moisture control are paramount. We distinguish our internal factory line checks from third-party testing, ensuring complete commercial transparency for wholesale buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          {/* 3 Pillar Summary Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              backgroundColor: 'var(--color-carbon-900)',
              border: '1px solid var(--color-carbon-700)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                <FlaskConical size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                On-Site Batch Testing
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every 25 metric tons undergoes rapid moisture analysis, volatile matter deduction, and lump hardness evaluation before moving to packaging staging.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-carbon-900)',
              border: '1px solid var(--color-carbon-700)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Accredited 3rd-Party Audits
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Independent laboratory inspection (SGS, Intertek, or Vilas compliant) can be arranged per container booking to certify proximate analysis and self-heating compliance.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-carbon-900)',
              border: '1px solid var(--color-carbon-700)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                <FileCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Traceability & Retained Samples
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Sealed composite samples from each maritime container are archived in our climate-controlled specimen room for 12 months with unique lot traceability codes.
              </p>
            </div>
          </div>

          {/* Test Methodologies Detail Table */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>ASTM / ISO Protocols</span>
              <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', margin: 0 }}>
                Standard Laboratory Test Methods
              </h2>
            </div>

            <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-carbon-900)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <table className="table" style={{ margin: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-carbon-800)' }}>
                    <th style={{ width: '22%' }}>Parameter</th>
                    <th style={{ width: '20%' }}>Test Standard</th>
                    <th style={{ width: '28%' }}>Testing Apparatus</th>
                    <th style={{ width: '30%' }}>Standard Export Tolerance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Fixed Carbon Content</td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>ASTM D3172</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>High-temp muffle furnace deduction</td>
                    <td style={{ color: 'var(--color-success)', fontWeight: 600 }}>75% – 95% (Grade Dependent)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Gross Calorific Value</td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>ASTM D5865 / ISO 1928</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>Isoperibol Oxygen Bomb Calorimeter</td>
                    <td style={{ color: 'var(--color-success)', fontWeight: 600 }}>6,800 – 8,400 kcal/kg</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Moisture Content</td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>ASTM D3173</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>Halogen digital moisture balance at 105°C</td>
                    <td style={{ color: 'var(--color-success)', fontWeight: 600 }}>≤ 3.5% – 5.0% Max</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Ash Content & Color</td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>ASTM D3174</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>Slow ashing furnace (750°C complete burn)</td>
                    <td style={{ color: 'var(--color-success)', fontWeight: 600 }}>≤ 1.5% – 2.5% (White/Light Gray)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Volatile Matter</td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>ASTM D3175</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>Covered platinum crucible oven (900°C)</td>
                    <td style={{ color: 'var(--color-success)', fontWeight: 600 }}>≤ 8% – 16% (Grade Dependent)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Self-Heating Behavior</td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>UN 33.3.1.6 / IMDG</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>140°C thermal test chamber (24h soak)</td>
                    <td style={{ color: 'var(--color-success)', fontWeight: 600 }}>Negative (Pass: Non-Self Heating)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sample Certificate of Analysis (COA) Demonstration */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            marginBottom: '4.5rem'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-accent" style={{ marginBottom: '0.4rem' }}>Document Preview</span>
                <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>
                  Specimen Certificate of Analysis (COA) Structure
                </h3>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', fontFamily: 'var(--font-mono)' }}>
                Doc Ref: COA-EX-2026-MNG04
              </span>
            </div>

            <div style={{
              backgroundColor: 'var(--color-carbon-950)',
              border: '1px solid var(--color-carbon-800)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}>
              <div style={{ borderBottom: '1px solid var(--color-carbon-800)', paddingBottom: '0.75rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ color: 'var(--color-gray-400)' }}>COMMODITY:</span> <strong style={{ color: '#FFFFFF' }}>NATURAL MANGROVE LUMPWOOD CHARCOAL</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-gray-400)' }}>SAMPLE ID:</span> <span style={{ color: 'var(--color-accent)' }}>LOT #2026-MNG-40HC-08</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{ color: 'var(--color-gray-400)', display: 'block' }}>Moisture (air-dried):</span>
                  <strong style={{ color: '#FFFFFF' }}>2.84 % (ASTM D3173)</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-gray-400)', display: 'block' }}>Ash Content (dry basis):</span>
                  <strong style={{ color: '#FFFFFF' }}>1.96 % (ASTM D3174)</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-gray-400)', display: 'block' }}>Volatile Matter (dry):</span>
                  <strong style={{ color: '#FFFFFF' }}>15.30 % (ASTM D3175)</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-gray-400)', display: 'block' }}>Fixed Carbon (by diff):</span>
                  <strong style={{ color: 'var(--color-accent-light)' }}>79.90 % (ASTM D3172)</strong>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid var(--color-carbon-800)', paddingTop: '0.75rem' }}>
                <div>
                  <span style={{ color: 'var(--color-gray-400)', display: 'block' }}>Gross Heating Value:</span>
                  <strong style={{ color: 'var(--color-success)' }}>7,380 kcal / kg (ISO 1928)</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-gray-400)', display: 'block' }}>UN 1361 Self-Heating:</span>
                  <strong style={{ color: 'var(--color-success)' }}>NEGATIVE / NON-SPONTANEOUS</strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--color-gray-400)' }}>
              <AlertTriangle size={15} style={{ color: 'var(--color-accent)' }} />
              <span>Note: Actual COA values vary slightly between production batches and timber harvest cycles. Full batch reports are issued alongside container dispatch documentation.</span>
            </div>
          </div>

          {/* Laboratory Samples CTA */}
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
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Need Pre-Shipment Laboratory Samples?
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                We provide 2kg–5kg sample parcels via Indian air express (DHL / FedEx) complete with corresponding factory proximate analysis reports for buyer verification.
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

export default QualityPage;
