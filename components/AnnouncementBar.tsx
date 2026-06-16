'use client';

import { useEffect, useState } from 'react';

const messages = [
  {
    full: 'Mumbai, India — Operations across Offshore, Above-water, Onshore & Ship Repair',
    short: 'Offshore · Above-water · Onshore · Ship Repair',
  },
  {
    full: 'Three decades of Civil, Mechanical & Marine engineering excellence',
    short: '3 decades of engineering excellence',
  },
  {
    full: 'Trusted by Indian Navy · HCC · L&T · Subsea Technology',
    short: 'Indian Navy · HCC · L&T · Subsea',
  },
  {
    full: 'Now accepting enquiries — Info@beratechllp.com · +91 9028650954',
    short: 'Info@beratechllp.com · +91 9028650954',
  },
];

export default function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 5200);
    return () => clearInterval(t);
  }, []);

  if (hidden) return null;

  return (
    <div className="relative z-50 w-full bg-ink text-bera-cream overflow-hidden">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-2">
        <span className="hidden md:inline shrink-0 font-mono text-[11px] tracking-[0.18em] uppercase text-bera-orange">
          ◆ BeraTech LLP
        </span>
        <div className="flex-1 overflow-hidden text-center min-w-0">
          {/* Desktop: full message */}
          <span
            key={`full-${idx}`}
            className="hidden md:inline-block animate-fade-up font-mono text-[11px] tracking-[0.14em] uppercase text-bera-cream/90 whitespace-nowrap"
          >
            {messages[idx].full}
          </span>
          {/* Mobile: shorter message, no truncation */}
          <span
            key={`short-${idx}`}
            className="md:hidden inline-block animate-fade-up font-mono text-[10px] tracking-[0.1em] uppercase text-bera-cream/90 leading-snug"
          >
            {messages[idx].short}
          </span>
        </div>
        <button
          aria-label="Dismiss announcement"
          onClick={() => setHidden(true)}
          className="shrink-0 font-mono text-[11px] text-bera-cream/60 hover:text-bera-orange transition ml-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
