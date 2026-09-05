import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

const siteUrl = site.url;
const keywords = [
  'Ahmed Mohy Eldin Abdrabbo','Ahmed Mohyeldin','Ahmed Mohy','website designer Egypt','website developer Egypt',
  'web design Cairo','website redesign','website development','UI UX designer Egypt','Shopify developer Egypt',
  'ecommerce website developer','AI website development','AI web developer','Next.js developer Egypt',
  'React developer Egypt','3D web developer','Three.js developer','WordPress website developer',
  'WooCommerce developer Egypt','freelance web developer Egypt',
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Ahmed Mohy Eldin Abdrabbo | Website Designer & Software Engineer', template: '%s | Ahmed Mohy Eldin Abdrabbo' },
  description: 'Ahmed Mohy Eldin Abdrabbo is a website designer and software engineer in Egypt building high-performance websites, e-commerce stores, AI-powered web experiences, UI/UX systems and 3D digital experiences.',
  keywords, authors: [{ name: site.name, url: site.url }], creator: site.name, publisher: site.name, category: 'technology',
  alternates: { canonical: '/' },
  openGraph: { title: 'Ahmed Mohy Eldin Abdrabbo | Website Designer & Software Engineer', description: 'Professional website design, development, redesign, e-commerce, AI and UI/UX by Ahmed Mohy Eldin Abdrabbo.', type: 'website', siteName: site.name, url: siteUrl, locale: 'en_US', images: [{ url: '/og-cover.svg', width: 1600, height: 900, alt: 'Ahmed Mohy Eldin Abdrabbo — Website Designer and Software Engineer' }] },
  twitter: { card: 'summary_large_image', title: 'Ahmed Mohy Eldin Abdrabbo | Website Designer & Software Engineer', description: 'Website design, development, redesign, AI, e-commerce, UI/UX and 3D digital experiences.', images: ['/og-cover.svg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@context': 'https://schema.org', '@type': 'Person', '@id': `${siteUrl}/#person`, name: site.name,
    alternateName: ['Ahmed Mohyeldin', 'Ahmed Mohy'], jobTitle: 'Website Designer & Software Engineer', description: site.description,
    url: siteUrl, image: `${siteUrl}/og-cover.svg`,
    address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
    knowsAbout: ['Website Design','Website Development','Website Redesign','UI/UX Design','Artificial Intelligence','E-commerce','Shopify','WordPress','WooCommerce','Next.js','React','Three.js','3D Web Experiences','Digital Growth'],
    sameAs: [site.github, site.linkedin, site.aiPortfolio, site.linktree],
  };
  const website = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: site.name, alternateName: 'Ahmed Mohy Eldin Abdrabbo Portfolio', url: siteUrl, description: site.description, publisher: { '@id': `${siteUrl}/#person` }, inLanguage: 'en-US' };
  const professionalService = {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': `${siteUrl}/#professional-service`, name: 'Ahmed Mohy Eldin Abdrabbo — Website Design & Software Engineering', url: siteUrl,
    description: 'Professional website design, website development, redesign, Shopify, e-commerce, AI web development, UI/UX and 3D web experiences.', provider: { '@id': `${siteUrl}/#person` },
    areaServed: [{ '@type': 'Country', name: 'Egypt' }, { '@type': 'Place', name: 'Worldwide' }], serviceType: ['Website Design','Website Development','Website Redesign','Shopify Development','E-commerce Development','AI Web Development','UI/UX Design','3D Web Development'],
  };
  return <html lang="en" dir="ltr"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
    <a className="skip-link" href="#top">Skip to main content</a>{children}
  </body></html>;
}
