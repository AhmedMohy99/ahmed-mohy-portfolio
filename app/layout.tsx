import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

const siteUrl = 'https://ahmed-mohy-portfolio.vercel.app';
const pageTitle = 'Ahmed Mohyeldin — Software · AI · Experience · Growth';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: '%s — Ahmed Mohyeldin',
  },
  description: site.description,
  keywords: [
    'Ahmed Mohyeldin',
    'Software Engineer',
    'AI',
    'Web Development',
    'UI UX',
    'Three.js',
    '3D',
    'E-Commerce',
    'Shopify',
    'Growth',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: pageTitle,
    description: site.description,
    type: 'website',
    siteName: site.name,
    url: siteUrl,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
