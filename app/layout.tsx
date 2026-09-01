import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Mohyeldin — Software · AI · Experience · Growth',
  description: 'Ahmed Mohyeldin builds digital products, intelligent systems, interactive experiences and growth-focused e-commerce platforms.',
  metadataBase: new URL('https://ahmedmohyeldin.com'),
  openGraph: { title: 'Ahmed Mohyeldin — Software · AI · Experience · Growth', description: 'Digital products, AI systems, 3D experiences and growth.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
