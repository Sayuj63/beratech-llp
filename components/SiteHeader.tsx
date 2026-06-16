'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/', label: 'Home', n: '01' },
  { href: '/about', label: 'About Us', n: '02' },
  { href: '/services', label: 'Services', n: '03' },
  { href: '/projects', label: 'Projects', n: '04' },
  { href: '/industries', label: 'Industries', n: '05' },
  { href: '/clients', label: 'Clients', n: '06' },
  { href: '/contact', label: 'Contact', n: '07' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-ink/10 bg-bera-cream/90 backdrop-blur-md'
          : 'border-transparent bg-bera-cream'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:py-5">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="text-2xl lg:text-[28px] font-display tracking-tightest font-semibold text-bera-navy">
            BeraTech
          </span>
          <span className="hidden md:inline text-[10px] tracking-[0.22em] uppercase font-mono text-ink/50 group-hover:text-bera-orange transition">
            LLP · Est. 1990s
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition ${
                  active ? 'text-ink' : 'text-ink/65 hover:text-ink'
                }`}
              >
                <span className="font-mono text-[10px] text-bera-orange mr-1.5 align-top">
                  {item.n}
                </span>
                {item.label}
                {active && (
                  <span className="absolute left-3 right-3 bottom-1 h-[2px] bg-bera-orange" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-[12px] font-medium tracking-wide text-bera-cream hover:bg-bera-navy transition"
          >
            Start an enquiry
            <span className="text-bera-orange transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-[2px] w-6 bg-ink transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-[2px] w-6 bg-ink transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-6 bg-ink transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden border-t border-ink/10 transition-[max-height] duration-500 ${
          open ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col divide-y divide-ink/10 bg-bera-cream">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-baseline justify-between px-5 py-4 ${
                  active ? 'bg-ink text-bera-cream' : 'text-ink'
                }`}
              >
                <span className="text-lg font-display">{item.label}</span>
                <span className={`font-mono text-xs ${active ? 'text-bera-orange' : 'text-ink/40'}`}>
                  {item.n}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
