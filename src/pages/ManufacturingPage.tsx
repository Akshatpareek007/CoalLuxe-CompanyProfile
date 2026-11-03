import React from 'react';
import { MANUFACTURING_STEPS } from '../data/manufacturingSteps';
import { 
  Flame, 
  ShieldCheck, 
  Clock, 
  Factory
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const ManufacturingPage: React.FC = () => {
  return (
    <div className="manufacturing-page">
      <SEO
        title="Manufacturing Process & Kiln Technology | CoalLuxe Production"
        description="Explore CoalLuxe's controlled carbonization process, brick dome kilns, binder formulation, and strict moisture control ensuring consistent charcoal quality."
        keywords="charcoal manufacturing process, pyrolysis kilns, charcoal extrusion, industrial briquette production, carbonization technology India"
        image="/images/factory_kilns.jpg"
      />
      {/* Industrial Facilities Overview Metrics */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-850)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '2.5rem 0' 
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><Factory size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>50+ Kilns</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>Brick Dome & Tunnel Units</div>
            </div>

            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><Clock size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>18–22 Days</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>Controlled Carbonization Cycle</div>
            </div>

            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><Flame size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>Up to 1,200°C</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>High-Temp Pyrolysis Threshold</div>
            </div>

            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><ShieldCheck size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>UN 1361</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>Class 4.2 Non-Self-Heating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Stage Process Walkthrough */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Step-by-Step Operations</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              The 6 Stages of Industrial Pyrolysis & Export
            </h2>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '1rem', lineHeight: 1.6 }}>
              From initial raw timber intake to container loading, every step follows documented standard operating procedures (SOPs) to ensure consistent fixed carbon, high calorific heat, and flawless maritime safety.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {MANUFACTURING_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={step.stepNumber}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'center',
                    backgroundColor: 'var(--color-carbon-900)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    padding: '2.5rem'
                  }}
                >
                  {/* Text details */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '1.25rem', 
                        fontWeight: 800, 
                        color: 'var(--color-accent)', 
                        backgroundColor: 'var(--color-carbon-800)',
                        border: '1px solid var(--color-carbon-700)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)'
                      }}>
                        {step.stepNumber}
                      </span>
                      <span className="badge badge-dark">{step.duration}</span>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {step.title}
                    </h3>

                    <p style={{ color: 'var(--color-accent-light)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '1rem' }}>
                      {step.shortDesc}
                    </p>

                    <p style={{ color: 'var(--color-gray-300)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      {step.detailedDesc}
                    </p>
                  </div>

                  {/* Image showcase */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      aspectRatio: '16/10',
                      border: '1px solid var(--color-carbon-700)'
                    }}>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManufacturingPage;
