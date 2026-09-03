import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

const siteUrl = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: '%s — Ahmed Mohyeldin',
  },
  description: site.description,
  keywords: ['Ahmed Mohyeldin', 'Software Engineer', 'AI', 'Web Development', 'UI/UX', 'Three.js', '3D', 'E-Commerce', 'Shopify', 'Digital Growth'],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    siteName: site.name,
    url: siteUrl,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <a className="skip-link" href="#top">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
