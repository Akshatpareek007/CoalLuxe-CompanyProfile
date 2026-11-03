import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || undefined;

  return (
    <div className="request-quote-page">
      <SEO
        title="Request for Order & Supply Quotation | CoalLuxe Bulk Sales"
        description="Submit your commercial specifications for bulk wood charcoal, briquettes, or biochar. Receive a comprehensive proforma quotation within 12 hours."
        keywords="request charcoal quote, bulk charcoal pricing, charcoal supply RFQ, commercial proforma invoice India"
      />
      {/* Page Header */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Request a Bulk Quotation' }]} />

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-accent">Commercial RFQ Portal</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>• 12-Hour Formal Proforma Turnaround</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Container Quotation & Supply Agreement Request
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              Request official proforma pricing for 20ft or 40ft High Cube container loads. Specify your preferred Incoterms (FOB / CIF / CFR), destination port, packaging requirements, or custom OEM branding.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Process Section */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            {/* Left: Form Card */}
            <div>
              <div style={{
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
              }}>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span className="badge badge-accent" style={{ marginBottom: '0.4rem' }}>
                    {preselectedProduct ? `Target: ${preselectedProduct}` : 'Formal RFQ Specification'}
                  </span>
                  <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Commercial Quotation Form
                  </h2>
                  <p style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem' }}>
                    All fields marked with an asterisk (*) are mandatory for calculating accurate freight and container allocations.
                  </p>
                </div>

                <QuoteForm preselectedProduct={preselectedProduct} />
              </div>
            </div>

            {/* Right: What Happens Next & Assurance Cards */}
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                Procurement Sequence & Guarantees
              </h2>

              {/* Steps timeline */}
              <div style={{
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={18} style={{ color: 'var(--color-accent)' }} /> 4-Stage RFQ Response Workflow
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--color-accent)', 
                      color: '#000000', 
                      fontWeight: 800, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      fontSize: '0.85rem' 
                    }}>
                      1
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Specification & Port Evaluation</strong>
                      <span style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        Our logistics desk checks carrier schedules and calculates maritime ocean freight to your discharge seaport.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--color-carbon-800)', 
                      border: '1px solid var(--color-accent)',
                      color: 'var(--color-accent)', 
                      fontWeight: 800, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      fontSize: '0.85rem' 
                    }}>
                      2
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Formal Proforma Quotation</strong>
                      <span style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        A binding proforma invoice is sent via email detailing CIF/FOB pricing, container metric tonnage, and packaging parameters.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--color-carbon-800)', 
                      border: '1px solid var(--color-carbon-600)',
                      color: 'var(--color-gray-300)', 
                      fontWeight: 800, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      fontSize: '0.85rem' 
                    }}>
                      3
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Pre-Shipment Laboratory Samples</strong>
                      <span style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        Physical testing cartons are dispatched via DHL/FedEx if needed to verify burning characteristics before container stuffing.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--color-carbon-800)', 
                      border: '1px solid var(--color-carbon-600)',
                      color: 'var(--color-gray-300)', 
                      fontWeight: 800, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      fontSize: '0.85rem' 
                    }}>
                      4
                    </div>
                    <div>
                      <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Production Booking & Container Stuffing</strong>
                      <span style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        Upon deposit or L/C confirmation, production commences with full Vanning survey reports and bill of lading issuance.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div style={{
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem'
              }}>
                <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-accent)' }} /> Export Integrity Commitments
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--color-gray-300)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    <span>Guaranteed fixed carbon & moisture thresholds per contract</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    <span>UN 1361 Class 4.2 Non-Self-Heating reports</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    <span>Irrevocable L/C at sight or T/T payment terms supported</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuotePage;
