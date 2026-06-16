import Link from 'next/link';

const COLUMNS = [
  {
    head: 'Navigate',
    items: [
      { l: 'Home', href: '/' },
      { l: 'About Us', href: '/about' },
      { l: 'Services', href: '/services' },
      { l: 'Projects', href: '/projects' },
      { l: 'Industries', href: '/industries' },
      { l: 'Clients', href: '/clients' },
      { l: 'Contact', href: '/contact' },
    ],
  },
  {
    head: 'Domains',
    items: [
      { l: 'Offshore Services', href: '/services#offshore' },
      { l: 'Above-water Services', href: '/services#above-water' },
      { l: 'Onshore Services', href: '/services#onshore' },
      { l: 'Ship Repairs', href: '/services#ship-repairs' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-ink text-bera-cream">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-10">
        {/* Massive wordmark */}
        <div className="border-b border-bera-cream/10 pb-12">
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange mb-4">
            Beyond Boundaries, Building Excellence
          </p>
          <h2 className="font-display text-[14vw] leading-[0.85] tracking-tightest text-bera-cream/95">
            BeraTech
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 pt-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bera-orange mb-5">
              Get in touch
            </p>
            <div className="space-y-3 text-bera-cream/85">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-bera-cream/45 mb-1">Studio</p>
                <p className="text-[15px] leading-relaxed">
                  B/107, Bhadra, Rashmi Nagar,<br />
                  Ram Mandir Rd, Virar West,<br />
                  Maharashtra, Mumbai 401303, India
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-widest text-bera-cream/45 mb-1">Phone</p>
                <p className="text-[15px]">
                  <a className="hover:text-bera-orange transition" href="tel:+919028650954">+91 90286 50954</a>
                  <span className="text-bera-cream/30"> · </span>
                  <a className="hover:text-bera-orange transition" href="tel:+917972536774">+91 79725 36774</a>
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-widest text-bera-cream/45 mb-1">Email</p>
                <a className="text-[15px] hover:text-bera-orange transition" href="mailto:Info@beratechllp.com">
                  Info@beratechllp.com
                </a>
              </div>
            </div>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.head} className="lg:col-span-3">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bera-orange mb-5">
                {c.head}
              </p>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className="group inline-flex items-center gap-2 text-[15px] text-bera-cream/80 hover:text-bera-cream transition"
                    >
                      <span className="text-bera-orange/0 group-hover:text-bera-orange transition">→</span>
                      {i.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-t border-bera-cream/10 pt-6 text-[12px] text-bera-cream/55 font-mono uppercase tracking-wider">
          <p>© {new Date().getFullYear()} BeraTech LLP · All rights reserved.</p>
          <p>Mumbai · India · Civil · Mechanical · Marine</p>
        </div>
      </div>
    </footer>
  );
}
