import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Package, 
  ShieldCheck, 
  FileText,
  Globe2, 
  CheckCircle2, 
  Layers,
  Box
} from 'lucide-react';
import { BRAND_CONFIG } from '../config/brandConfig';

export const PackagingExportPage: React.FC = () => {
  return (
    <div className="packaging-export-page">
      {/* Page Header */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Packaging & Delivery Logistics' }]} />

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-accent">Pan-India Road Freight & Logistics</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>• Doorstep Delivery Across All Indian States</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Turn-Key Commercial Packaging & Pan-India Logistics
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              From custom-branded 5-ply cartons to bulk truckloads (FTL) and moisture-proof sacks, we manage the entire domestic supply chain across all Indian states. High-strength packaging, verified weighbridge slips, and prompt road logistics for restaurants, hookah lounges, and industrial buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Packaging Formats Grid */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '3rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Format Flexibility</span>
            <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Heavy-Duty Export Packaging Formats
            </h2>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              All packaging is engineered to withstand tropical humidity, long ocean transit times, and multi-tier warehousing stacks without crushing.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.75rem',
            marginBottom: '4.5rem' 
          }}>
            {/* Box 1 */}
            <div style={{ backgroundColor: 'var(--color-carbon-900)', border: '1px solid var(--color-carbon-700)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Box size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                5-Ply Corrugated Master Cartons
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Heavy burst-strength double-wall corrugated craft cartons with optional inner polyethylene (PE) moisture seal. Ideal for restaurant briquettes and Binchotan.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>
                Weights: 5 kg, 10 kg, 15 kg, 20 kg
              </div>
            </div>

            {/* Box 2 */}
            <div style={{ backgroundColor: 'var(--color-carbon-900)', border: '1px solid var(--color-carbon-700)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Package size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Reinforced Polypropylene (PP) Sacks
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                High-tensile woven PP bags with UV-stabilized weave, micro-perforations for breathability, and heavy sewn closures for high-volume commercial lump charcoal.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>
                Weights: 15 kg, 20 kg, 25 kg, 50 kg
              </div>
            </div>

            {/* Box 3 */}
            <div style={{ backgroundColor: 'var(--color-carbon-900)', border: '1px solid var(--color-carbon-700)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Layers size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Multi-Wall Kraft Paper Bags
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Eco-friendly 3-ply bleached or unbleached kraft paper with inner moisture protection barrier and reinforced stitched bottoms. Perfect for retail supermarkets.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>
                Weights: 2.5 kg, 5 kg, 10 kg
              </div>
            </div>

            {/* Box 4 */}
            <div style={{ backgroundColor: 'var(--color-carbon-900)', border: '1px solid var(--color-carbon-700)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><ShieldCheck size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Turn-Key OEM Private Label
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Full-color flexographic or offset printing of your proprietary brand name, logos, barcoding, safety warnings, and native language instructions.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>
                Plate Engraving: 5–7 Days
              </div>
            </div>
          </div>

          {/* Container Stuffing & Loading Capacities */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Freight Optimization</span>
              <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', margin: 0 }}>
                Ocean Container Stuffing Capacities
              </h2>
            </div>

            <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-carbon-900)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <table className="table" style={{ margin: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-carbon-800)' }}>
                    <th style={{ width: '25%' }}>Product Type</th>
                    <th style={{ width: '25%' }}>Packaging Style</th>
                    <th style={{ width: '25%' }}>20ft Standard FCL</th>
                    <th style={{ width: '25%' }}>40ft High Cube (HC) FCL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Natural Hardwood Lump (Mangrove / Khaya)</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>PP Bags / Loose Stuffing</td>
                    <td style={{ color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>12 – 14 Metric Tons</td>
                    <td style={{ color: 'var(--color-success)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>20 – 22 Metric Tons</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Natural Hardwood Lump</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>10kg/15kg Cartons (Palletized)</td>
                    <td style={{ color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>10 – 11 Metric Tons (10 Pallets)</td>
                    <td style={{ color: 'var(--color-success)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>18 – 20 Metric Tons (20 Pallets)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Hexagonal Sawdust Briquettes</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>10kg Master Carton (Floor Loaded)</td>
                    <td style={{ color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>14 – 15 Metric Tons</td>
                    <td style={{ color: 'var(--color-success)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>26 – 28 Metric Tons (~2,700 Boxes)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Coconut Shell Shisha Cubes</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>1kg Box x 10 / Master Carton</td>
                    <td style={{ color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>17 – 18 Metric Tons</td>
                    <td style={{ color: 'var(--color-success)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>25 – 26 Metric Tons (~2,550 Boxes)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#FFFFFF' }}>Binchotan White Charcoal</td>
                    <td style={{ color: 'var(--color-gray-300)' }}>10kg Export Cartons with Desiccants</td>
                    <td style={{ color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>10 – 12 Metric Tons</td>
                    <td style={{ color: 'var(--color-success)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>20 – 22 Metric Tons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Dangerous Goods & Documentation Section */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            marginBottom: '4.5rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>Dangerous Goods IMDG Code</span>
                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                  UN 1361 Class 4.2 Compliance & Safety Clearance
                </h3>
                <p style={{ color: 'var(--color-gray-300)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  Under the Indian Maritime Dangerous Goods (IMDG) Code, vegetable-origin charcoal is classified under UN 1361 Class 4.2. To safeguard ocean vessels and prevent delays, our maritime logistics department coordinates:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gray-200)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
                    <span>Self-Heating Test Report (UN 33.3.1.6) from SGS / Vilas laboratory</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gray-200)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
                    <span>Independent Vanning Survey & Container Temperature Inspection Certificate</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gray-200)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
                    <span>16-Section GHS-compliant Material Safety Data Sheet (MSDS)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-gray-200)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
                    <span>Phytosanitary & ISPM-15 Heat-Treated Pallet Certification</span>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: 'var(--color-carbon-800)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem'
              }}>
                <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} style={{ color: 'var(--color-accent)' }} /> Full Export Documentation Package
                </h4>
                <p style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  All shipments include an original set of trade documents air-couriered directly to the consignee or negotiating bank:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-gray-300)' }}>
                  <li>• Original Ocean Clean On-Board Bills of Lading (3/3)</li>
                  <li>• Commercial Invoice & Detailed Packing List</li>
                  <li>• Certificate of Origin (Form A, Form E, or REX)</li>
                  <li>• Certificate of Analysis (COA)</li>
                  <li>• Fumigation & Non-Timber Quarantine Certificate</li>
                  <li>• Vanning Survey & Container Seal Verification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Domestic Distribution Hubs Grid */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Pan-India Distribution</span>
              <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', margin: 0 }}>
                Major Distribution Zones & Supply Hubs
              </h2>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1rem' 
            }}>
              {(BRAND_CONFIG.exportMarkets || []).map((market, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-carbon-900)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Globe2 size={16} style={{ color: 'var(--color-accent)' }} />
                    <strong style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>{market.region}</strong>
                  </div>
                  <div style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem' }}>
                    {market.countries}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Ready to Order Bulk Charcoal Delivery in India?
            </h3>
            <p style={{ color: 'var(--color-gray-300)', maxWidth: '650px', margin: '0 auto 1.75rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Provide your city, state, packaging requirement, and estimated monthly tonnage. We will deliver competitive bulk truckload quotes with door delivery options.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Sales Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagingExportPage;
