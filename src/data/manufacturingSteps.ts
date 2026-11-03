export interface ManufacturingStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  duration: string;
  qualityStandard: string;
  iconName: string;
  image: string;
}

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    stepNumber: '01',
    title: 'Raw Wood Sourcing & Sorting',
    shortDesc: 'Inspection of dense, legally harvested plantation logs and clean hardwood timber.',
    detailedDesc: 'We carefully source dense, legally harvested plantation logs and premium hardwood timber, ensuring consistent quality and durability. Each log undergoes thorough inspection and sorting to meet industry standards and support reliable, sustainable wood production.',
    duration: 'Seasoning: 3–4 Weeks',
    qualityStandard: '100% Legal Concessions, Zero Chemical Contaminants',
    iconName: 'TreeDeciduous',
    image: '/images/factory_kilns.jpg'
  },
  {
    stepNumber: '02',
    title: 'Slow Controlled Carbonization in Brick Kilns',
    shortDesc: 'Thermal conversion in oxygen-deprived masonry kilns over 18 to 22 days.',
    detailedDesc: 'Stacked systematically inside thick-walled brick dome kilns, the wood is carbonized through an exothermic reaction that gradually elevates internal kiln temperatures from 400°C up to 800°C (and above 1,000°C for Binchotan grades). The air intake valves are micro-adjusted to drive off moisture, smoke, and volatile tar while preserving solid fixed carbon.',
    duration: 'Carbonization: 18–22 Days',
    qualityStandard: 'Continuous Core Temperature Monitoring',
    iconName: 'Flame',
    image: '/images/factory_kilns.jpg'
  },
  {
    stepNumber: '03',
    title: 'Air-Tight Kiln Sealing & Stabilization',
    shortDesc: 'Gradual cooling under complete oxygen starvation to ensure structural integrity.',
    detailedDesc: 'Once carbonization is complete, all kiln intake and exhaust vents are hermetically sealed with clay mortar. The charcoal is allowed to cool down naturally over 10 to 14 days without exposure to atmospheric oxygen, preventing accidental combustion and ensuring the lumpwood does not shatter.',
    duration: 'Cooling: 10–14 Days',
    qualityStandard: 'Ambient Core Temperature Equalization',
    iconName: 'ShieldAlert',
    image: '/images/hero_bg.jpg'
  },
  {
    stepNumber: '04',
    title: 'Grading, De-Dusting & Screen Sorting',
    shortDesc: 'Mechanical vibratory screen separation eliminating unburnt pieces, fines, and dust.',
    detailedDesc: 'Charcoal is transferred onto multi-deck vibratory screening conveyors that separate the lumps into calibrated size bands (e.g. 3–7 cm for commercial dining, 8–18 cm for heavy smokers). Air blowers extract microscopic dust particles, ensuring clean, customer-ready lumps.',
    duration: 'Continuous Line',
    qualityStandard: 'Dust & Fines Content < 3%',
    iconName: 'Filter',
    image: '/images/mangrove_charcoal.jpg'
  },
  {
    stepNumber: '05',
    title: 'Laboratory Testing & Chemical Verification',
    shortDesc: 'Rigorous batch testing for calorific value, fixed carbon %, moisture, and ash.',
    detailedDesc: 'Our on-site QA laboratory pulls representative composite samples from every production run. Samples are tested with digital moisture balances, muffle furnaces (for ash and volatile content), and bomb calorimeters. Test reports are matched directly to container shipping batches.',
    duration: 'Every 25 Metric Tons',
    qualityStandard: 'Fixed Carbon > 78%, Ash ≤ 2.5%, Moisture ≤ 4%',
    iconName: 'FlaskConical',
    image: '/images/quality_lab.jpg'
  },
  {
    stepNumber: '06',
    title: 'Packaging & Domestic Export',
    shortDesc: 'Secure packaging, careful palletizing, and reliable transportation across India.',
    detailedDesc: 'Products are packed in durable cartons or bags, securely palletized, and carefully loaded for safe transportation. Our packaging and logistics processes ensure product protection, efficient handling, and reliable delivery to destinations across India.',
    duration: 'Packing: 1–2 Days',
    qualityStandard: 'UN 1361 Class 4.2 Dangerous Goods Stamping',
    iconName: 'PackageCheck',
    image: '/images/container_shipping.jpg'
  }
];
