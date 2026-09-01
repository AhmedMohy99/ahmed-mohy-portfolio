import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed-mohy-portfolio.vercel.app'),
  title: {
    default: 'Ahmed Mohyeldin — Software · AI · Experience · Growth',
    template: '%s — Ahmed Mohyeldin',
  },
  description: site.description,
  keywords: ['Ahmed Mohyeldin', 'Software Engineer', 'AI', 'Web Development', 'UI UX', 'Three.js', '3D', 'E-Commerce', 'Shopify', 'Growth'],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: 'Ahmed Mohyeldin — Software · AI · Experience · Growth',
    description: site.description,
    type: 'website',
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
