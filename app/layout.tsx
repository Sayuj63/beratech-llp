import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import AnnouncementBar from '@/components/AnnouncementBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollReveal from '@/components/ScrollReveal';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'BeraTech LLP — Beyond Boundaries, Building Excellence',
  description:
    'A three-decade-old engineering consortium delivering Civil, Mechanical and Marine services across Offshore, Above-water, Onshore and Ship Repair domains. Based in Mumbai, India.',
  openGraph: {
    title: 'BeraTech LLP — Beyond Boundaries, Building Excellence',
    description:
      'Three decades of Civil, Mechanical and Marine engineering — Mumbai, India.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bera-cream text-ink">
        <AnnouncementBar />
        <SiteHeader />
        <ScrollReveal />
        <main className="relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
