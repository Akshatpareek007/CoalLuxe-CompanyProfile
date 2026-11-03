export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
  relatedProductSlug?: string;
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 'sawdust-vs-coconut-charcoal-b2b-guide',
    slug: 'sawdust-vs-coconut-charcoal-b2b-guide',
    title: 'Sawdust Briquettes vs. Coconut Shell Charcoal: A Technical B2B Buyer’s Guide',
    excerpt: 'Detailed comparative analysis of thermal output, ash composition, burn duration, and freight economy between extruded sawdust briquettes and coconut shell cubes.',
    category: 'Procurement Insights',
    publishDate: 'September 2026',
    readTime: '6 min read',
    image: '/images/sawdust_briquettes.jpg',
    author: 'Industrial Fuel Technical Advisory',
    keyTakeaways: [
      'Sawdust briquettes provide continuous 5-6 hour burn times ideal for commercial tabletop BBQ.',
      'Coconut shell cubes generate compact white ash (< 2.2%) tailored for hookah and shisha heat control.',
      'Extruded hexagonal sawdust briquettes achieve higher container packing density than irregular lumpwood.'
    ],
    content: [
      'When international importers and wholesale distributors evaluate bio-based compressed charcoal fuels, the choice typically narrows to two high-performance categories: Extruded Hexagonal Sawdust Charcoal and Coconut Shell Briquettes.',
      'Sawdust Charcoal Briquettes are manufactured by feeding dry hardwood sawdust through mechanical extruders operating under intense friction (250°C–300°C) and extreme pressure. The natural lignin within the wood plasticizes, binding the particles together without any external chemical adhesives. Subsequent carbonization in kilns yields a dense, crystalline fuel with a uniform hollow core.',
      'By contrast, Coconut Shell Charcoal utilizes carbonized coconut husks that are crushed, blended with food-grade tapioca starch (typically 3%–5%), and cold-pressed into calibrated cubes. Because coconut shell inherently has low ash minerals, its combustion ash is snow-white and leaves no lingering smoke or taste.',
      'For restaurant operations such as Korean BBQ or Japanese Robata, sawdust briquettes remain the global standard because the central air channel creates a self-sustaining convection draft that burns steadily without requiring constant blower adjustments.',
      'When calculating freight economics, sawdust briquettes pack tightly in 10kg cartons, achieving 26 to 28 Metric Tons per 40ft High Cube container, reducing per-kilogram maritime shipping overhead significantly.'
    ],
    relatedProductSlug: 'hexagonal-sawdust-briquettes'
  },
  {
    id: 'understanding-un1361-dg-charcoal-shipping',
    slug: 'understanding-un1361-dg-charcoal-shipping',
    title: 'UN 1361 Class 4.2 Charcoal Export: Maritime Safety, Stuffing & Documentation',
    excerpt: 'Navigating international Dangerous Goods regulations for maritime charcoal exports, including Vilas/SGS self-heating certification and container ventilation standards.',
    category: 'Logistics & Compliance',
    publishDate: 'August 2026',
    readTime: '8 min read',
    image: '/images/container_shipping.jpg',
    author: 'International Freight Compliance Unit',
    keyTakeaways: [
      'Charcoal of animal or vegetable origin is classified under UN 1361, Class 4.2 (Spontaneously Combustible Solids).',
      'Shipping line booking acceptance requires an accredited Self-Heating Test Report confirming non-hazardous temperature thresholds.',
      'Correct container cooling, moisture control, and stuffing protocols are essential to prevent port customs rejections.'
    ],
    content: [
      'Charcoal export is strictly regulated under the Indian Maritime Dangerous Goods (IMDG) Code. Because freshly processed charcoal can undergo slow exothermic oxidation if exposed to moisture or packed prematurely, carriers categorize it under UN 1361, Class 4.2 (Substances liable to spontaneous combustion).',
      'To ensure seamless booking approval with top container lines (Maersk, MSC, CMA CGM, ONE, Evergreen), exporters must maintain an unbroken chain of verified safety documentation for every batch.',
      'First is the 16-section Material Safety Data Sheet (MSDS), updated to GHS standards and provided in both English and destination languages. Second is the Self-Heating Substance Test conducted according to the UN Recommendations on the Transport of Dangerous Goods (Manual of Tests and Criteria, Part III, section 33.3.1.6).',
      'In our manufacturing facilities, freshly carbonized charcoal is subjected to a mandatory multi-day stabilization and cooling period inside covered, well-ventilated staging sheds before any packaging begins.',
      'During container stuffing, temperature sensors log core carton temperatures, moisture barriers prevent ocean humidity ingress, and certified packing certificates are issued prior to seal application.'
    ],
    relatedProductSlug: 'mangrove-hardwood-charcoal'
  },
  {
    id: 'binchotan-white-charcoal-restaurant-guide',
    slug: 'binchotan-white-charcoal-restaurant-guide',
    title: 'The Science of Binchotan White Charcoal: Far-Infrared Radiation & Acoustic Purity',
    excerpt: 'Why high-end Japanese Yakitori, Robata, and Michelin-starred steakhouses insist on genuine Binchotan white charcoal over conventional lumpwood.',
    category: 'Gastronomy & Culinary Tech',
    publishDate: 'July 2026',
    readTime: '5 min read',
    image: '/images/binchotan_white_charcoal.jpg',
    author: 'Culinary Charcoal Research Specialist',
    keyTakeaways: [
      'Binchotan is carbonized at 1,000°C–1,200°C and rapidly quenched with ash, resulting in over 92% fixed carbon.',
      'Emits minimal visible flame, zero smoke, and high far-infrared radiation that cooks food from the inside out.',
      'A dense crystalline structure creates a high-frequency bell-like chime when struck.'
    ],
    content: [
      'In professional Japanese culinary traditions, Binchotan (White Charcoal) is regarded as the ultimate heat source. While conventional black charcoal is smothered inside the kiln by sealing oxygen intake ports, Binchotan manufacturing takes a radically different path in its final phase.',
      'When the wood has fully carbonized at approximately 800°C, the kiln master opens the draft vents, introducing oxygen to surge the internal temperature above 1,000°C to 1,200°C. This intense thermal blast burns away all remaining volatile hydrocarbons and bark.',
      'The red-hot charcoal logs are then rapidly raked out of the kiln and smothered under a damp mixture of sand, fine ash, and earth. The rapid cooling solidifies the carbon matrix and deposits a fine white powdery sheen onto the surface, giving the product its name.',
      'Because of its extreme carbon purity, Binchotan burns cleanly with virtually zero smoke, neutral aroma, and powerful far-infrared (FIR) radiation. Far-infrared wavelengths penetrate deep into meats, rapidly gelatinizing collagen and retaining moisture without scorching delicate proteins on the surface.',
      'Commercial operators also benefit from Binchotan’s extreme longevity: a single load of Binchotan will burn steadily for 6 to 8 hours, eliminating the need to replenish coals mid-service in busy restaurants.'
    ],
    relatedProductSlug: 'binchotan-white-charcoal'
  }
];
