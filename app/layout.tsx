import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

const siteUrl = site.url;
const keywords = [
  'Ahmed Mohy Eldin Abdrabbo',
  'Ahmed Mohyeldin',
  'Ahmed Mohy',
  'software engineer Egypt',
  'AI developer Egypt',
  'website designer Egypt',
  'web developer Cairo',
  'website design Cairo',
  'website development Egypt',
  'website redesign',
  'UI UX designer Egypt',
  'Shopify developer Egypt',
  'ecommerce website developer',
  'AI web development',
  'Next.js developer Egypt',
  'React developer Egypt',
  '3D web developer',
  'Three.js developer',
  'WordPress developer Egypt',
  'WooCommerce developer Egypt',
  'freelance web developer Egypt',
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ahmed Mohy Eldin Abdrabbo | Software Engineer & AI Developer',
    template: '%s | Ahmed Mohy Eldin Abdrabbo',
  },
  description:
    'Ahmed Mohy Eldin Abdrabbo is a software engineer and AI developer in Egypt creating high-performance websites, e-commerce experiences, AI-powered products, UI/UX systems and immersive 3D web experiences.',
  keywords,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  alternates: { canonical: siteUrl },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'Ahmed Mohy Eldin Abdrabbo | Software Engineer & AI Developer',
    description:
      'Professional website design, development, AI, e-commerce, UI/UX and 3D digital experiences by Ahmed Mohy Eldin Abdrabbo.',
    type: 'website',
    siteName: 'Ahmed Mohy Eldin Abdrabbo',
    url: siteUrl,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ahmed Mohy Eldin Abdrabbo — Software Engineer, AI & Digital Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Mohy Eldin Abdrabbo | Software Engineer & AI Developer',
    description:
      'Website design, development, AI, e-commerce, UI/UX and 3D digital experiences.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: site.name,
    alternateName: ['Ahmed Mohyeldin', 'Ahmed Mohy'],
    jobTitle: 'Software Engineer & AI Developer',
    description: site.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
    knowsAbout: [
      'Software Engineering',
      'Artificial Intelligence',
      'Website Design',
      'Website Development',
      'Website Redesign',
      'UI/UX Design',
      'E-commerce',
      'Shopify',
      'WordPress',
      'WooCommerce',
      'Next.js',
      'React',
      'Three.js',
      '3D Web Experiences',
      'Digital Growth',
    ],
    sameAs: [site.github, site.linkedin, site.aiPortfolio, site.linktree],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: site.name,
    alternateName: 'Ahmed Mohy Eldin Abdrabbo Portfolio',
    url: siteUrl,
    description: site.description,
    publisher: { '@id': `${siteUrl}/#person` },
    inLanguage: 'en-US',
  };

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#professional-service`,
    name: 'Ahmed Mohy Eldin Abdrabbo — Software Engineering & AI',
    url: siteUrl,
    description:
      'Professional software engineering, website design, development, redesign, Shopify, e-commerce, AI web development, UI/UX and 3D web experiences.',
    provider: { '@id': `${siteUrl}/#person` },
    areaServed: [
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    serviceType: [
      'Software Engineering',
      'Website Design',
      'Website Development',
      'Website Redesign',
      'Shopify Development',
      'E-commerce Development',
      'AI Web Development',
      'UI/UX Design',
      '3D Web Development',
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
        <a className="skip-link" href="#top">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
