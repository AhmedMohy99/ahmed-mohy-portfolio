export type Project = {
  slug: string;
  name: string;
  type: string;
  url: string;
  featured: boolean;
  description: string;
  role: string;
  services: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'laro-cosmetics',
    name: 'LARO COSMETICS',
    type: 'BEAUTY · SHOPIFY · E-COMMERCE',
    url: 'https://laro-cosmetics.com',
    featured: true,
    description: 'A premium beauty commerce experience focused on product presentation, navigation, mobile UX and conversion.',
    role: 'Shopify · UX/UI · E-commerce optimization',
    services: ['Shopify', 'UI/UX', 'Storefront UX', 'Conversion', 'Product merchandising'],
    outcome: 'A cleaner customer journey designed to make discovering products and completing a purchase easier.',
  },
  {
    slug: 'saffa-fashion',
    name: 'SAFFA FASHION',
    type: 'FASHION · DIGITAL EXPERIENCE',
    url: 'https://www.saffafashion.shop',
    featured: true,
    description: 'A fashion storefront with product-led UX, responsive layouts, product galleries and a focused shopping journey.',
    role: 'Web development · UX/UI · E-commerce',
    services: ['Next.js', 'React', 'Responsive UX', 'Product UI', 'Cart experience'],
    outcome: 'A fast, modern storefront structure built around product discovery and mobile-first browsing.',
  },
  {
    slug: 'sway-maverick',
    name: 'SWAY MAVERICK',
    type: 'FASHION · E-COMMERCE · EXPERIENCE',
    url: 'https://swaymaverick.com',
    featured: true,
    description: 'A premium fashion commerce experience combining brand storytelling, product discovery and digital retail.',
    role: 'E-commerce · Product experience · Brand presentation',
    services: ['E-commerce', 'UI/UX', 'Product presentation', 'Conversion', 'Brand experience'],
    outcome: 'A more premium digital presentation designed to connect brand perception with the shopping experience.',
  },
  {
    slug: 'iris',
    name: 'IRIS',
    type: 'LUXURY FASHION · UX · E-COMMERCE',
    url: 'https://iris-eg.net',
    featured: true,
    description: 'A quiet-luxury fashion experience shaped around premium presentation, clearer navigation and a stronger shopping journey.',
    role: 'Website audit · UX/UI · WooCommerce · Conversion',
    services: ['WordPress', 'WooCommerce', 'Elementor', 'UX audit', 'E-commerce optimization'],
    outcome: 'A refined digital direction for a luxury womenswear brand in Egypt and the Middle East.',
  },
  {
    slug: 'zrex',
    name: 'ZREX',
    type: 'FASHION · E-COMMERCE',
    url: 'https://zrexeg.com',
    featured: false,
    description: 'Fashion commerce and product experience work focused on a clear path from product discovery to purchase.',
    role: 'Web · E-commerce · Product experience',
    services: ['E-commerce', 'Product UI', 'Responsive design', 'Conversion'],
    outcome: 'A product-focused digital presence built for easier browsing and stronger commercial presentation.',
  },
  {
    slug: 'ucypta',
    name: 'UCYPTA',
    type: 'SHOPIFY · E-COMMERCE',
    url: 'https://ucypta-fs.myshopify.com',
    featured: false,
    description: 'A Shopify commerce experience with product-led navigation and a streamlined online shopping interface.',
    role: 'Shopify · Storefront · UX/UI',
    services: ['Shopify', 'Store setup', 'Product UX', 'Navigation'],
    outcome: 'A cleaner storefront foundation for product browsing and online sales.',
  },
  {
    slug: 'elprof10',
    name: 'ELPROF10',
    type: 'DIGITAL EXPERIENCE',
    url: 'https://elprof10.com',
    featured: false,
    description: 'Digital product and web experience work focused on usability, presentation and a modern responsive interface.',
    role: 'Web development · UX/UI',
    services: ['Web development', 'UX/UI', 'Responsive design', 'Optimization'],
    outcome: 'A stronger digital experience designed to communicate clearly across devices.',
  },
  {
    slug: 'royal-watch',
    name: 'ROYAL WATCH',
    type: 'LUXURY · E-COMMERCE',
    url: 'http://royalwatch.art/',
    featured: false,
    description: 'Luxury watch presentation and commerce with emphasis on premium product storytelling and visual hierarchy.',
    role: 'Luxury e-commerce · Product presentation',
    services: ['Luxury UI', 'E-commerce', 'Product storytelling', 'Visual hierarchy'],
    outcome: 'A premium digital direction for presenting luxury products with clarity and confidence.',
  },
];

export const aiProjects = [
  ['AI CUSTOMER SUPPORT', 'Conversational AI · Customer experience'],
  ['AI DOCUMENT ASSISTANT', 'RAG · Document intelligence · Knowledge retrieval'],
  ['DATA ANALYTICS', 'Business intelligence · Data-driven decisions'],
  ['AUTOMATION SYSTEM', 'Python · Workflow automation · Productivity'],
  ['LEAD GENERATION', 'Data · Prospecting · Automation · Growth'],
] as const;

export const services = [
  {
    number: '01',
    label: 'BUILD',
    title: 'Software Engineering',
    text: 'Websites, web apps, APIs, e-commerce, Shopify, WordPress, WooCommerce and business automation.',
  },
  {
    number: '02',
    label: 'INTELLIGENCE',
    title: 'AI & Data',
    text: 'AI applications, chatbots, RAG, document intelligence, analytics, automation and intelligent workflows.',
  },
  {
    number: '03',
    label: 'EXPERIENCE',
    title: 'UI/UX & 3D',
    text: 'Luxury interfaces, product experiences, Three.js, 3D websites, virtual try-on and interactive commerce.',
  },
  {
    number: '04',
    label: 'GROW',
    title: 'Marketing & Commerce',
    text: 'Product photography direction, targeting, conversion, analytics, data entry and e-commerce growth.',
  },
] as const;
