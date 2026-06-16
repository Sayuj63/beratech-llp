'use client';

import { useEffect, useState } from 'react';

const messages = [
  'Mumbai, India — Operations across Offshore, Above-water, Onshore & Ship Repair',
  'Three decades of Civil, Mechanical & Marine engineering excellence',
  'Trusted by Indian Navy · HCC · L&T · Subsea Technology',
  'Now accepting enquiries — Info@beratechllp.com · +91 9028650954',
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
    <div className="relative z-50 w-full bg-ink text-bera-cream">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-2 text-[11px] tracking-[0.18em] uppercase font-mono">
        <span className="hidden md:inline text-bera-orange">◆ BeraTech LLP</span>
        <div className="flex-1 overflow-hidden text-center">
          <span
            key={idx}
            className="inline-block animate-fade-up text-bera-cream/90"
          >
            {messages[idx]}
          </span>
        </div>
        <button
          aria-label="Dismiss announcement"
          onClick={() => setHidden(true)}
          className="text-bera-cream/60 hover:text-bera-orange transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
