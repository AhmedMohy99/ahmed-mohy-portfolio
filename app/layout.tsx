import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

const siteUrl = site.url;
const keywords = [
  'Ahmed Mohy Eldin Abdrabbo', 'Ahmed Mohyeldin', 'Ahmed Mohy', 'IT specialist Egypt', 'IT specialist Cairo',
  'AI developer Egypt', 'web developer Cairo', 'website design Cairo', 'website development Egypt', 'website redesign',
  'UI UX designer Egypt', 'Shopify developer Egypt', 'ecommerce website developer', 'AI web development',
  'Next.js developer Egypt', 'React developer Egypt', '3D web developer', 'Three.js developer',
  'WordPress developer Egypt', 'WooCommerce developer Egypt', 'freelance web developer Egypt',
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ahmed Mohy Eldin Abdrabbo | IT & Digital Solutions',
    template: '%s | Ahmed Mohy Eldin Abdrabbo',
  },
  description: site.description,
  keywords,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  alternates: {
    canonical: siteUrl,
    languages: {
      en: `${siteUrl}/?lang=en`,
      ar: `${siteUrl}/?lang=ar`,
      'x-default': siteUrl,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
    apple: [{ url: '/icon.svg' }],
  },
  openGraph: {
    title: 'Ahmed Mohy Eldin Abdrabbo | IT & Digital Solutions',
    description: 'IT, web development, AI, e-commerce, UI/UX and 3D digital experiences by Ahmed Mohy Eldin Abdrabbo.',
    type: 'website', siteName: site.name, url: siteUrl, locale: 'en_US',
    alternateLocale: ['ar_EG'],
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ahmed Mohy Eldin Abdrabbo — IT, AI & Digital Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Mohy Eldin Abdrabbo | IT & Digital Solutions',
    description: 'IT, web development, AI, e-commerce, UI/UX and 3D digital experiences.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@context': 'https://schema.org', '@type': 'Person', '@id': `${siteUrl}/#person`, name: site.name,
    alternateName: ['Ahmed Mohyeldin', 'Ahmed Mohy'], jobTitle: 'IT & Digital Solutions Specialist', description: site.description,
    url: siteUrl, image: `${siteUrl}/opengraph-image`,
    address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
    knowsAbout: ['Information Technology', 'Artificial Intelligence', 'Website Design', 'Website Development', 'Website Redesign', 'UI/UX Design', 'E-commerce', 'Shopify', 'WordPress', 'WooCommerce', 'Next.js', 'React', 'Three.js', '3D Web Experiences', 'Digital Growth', 'Business Automation'],
    sameAs: [site.github, site.linkedin, site.instagram, site.linktree],
  };
  const website = {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: site.name,
    alternateName: 'Ahmed Mohy Eldin Abdrabbo Portfolio', url: siteUrl, description: site.description,
    publisher: { '@id': `${siteUrl}/#person` }, inLanguage: ['en-US', 'ar-EG'],
  };
  const professionalService = {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': `${siteUrl}/#professional-service`,
    name: 'Ahmed Mohy Eldin Abdrabbo — IT & Digital Solutions', url: siteUrl,
    description: 'IT services, website design, development, redesign, Shopify, e-commerce, AI web development, UI/UX and 3D web experiences.',
    provider: { '@id': `${siteUrl}/#person` }, areaServed: [{ '@type': 'Country', name: 'Egypt' }, { '@type': 'Place', name: 'Worldwide' }],
    serviceType: ['Information Technology', 'Website Design', 'Website Development', 'Website Redesign', 'Shopify Development', 'E-commerce Development', 'AI Web Development', 'UI/UX Design', '3D Web Development', 'Business Automation'],
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(() => { try { const q = new URLSearchParams(location.search).get('lang'); const stored = q === 'ar' || q === 'en' ? q : localStorage.getItem('ahmed-language'); const lang = stored === 'ar' ? 'ar' : 'en'; localStorage.setItem('ahmed-language', lang); document.cookie = 'ahmed-language=' + lang + '; Path=/; Max-Age=31536000; SameSite=Lax'; document.documentElement.lang = lang === 'ar' ? 'ar-EG' : 'en'; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; } catch (_) {} })();` }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
        <script async src="https://js.hs-scripts.com/149287248.js" />
        <a className="skip-link" href="#top">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
