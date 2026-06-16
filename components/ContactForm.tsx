'use client';

import { useState } from 'react';

const SCOPE_TAGS = [
  'Offshore / Underwater',
  'Above-water Fabrication',
  'Onshore / Civil',
  'Ship Repair',
  'Refinery / Shutdown',
  'Other',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [scope, setScope] = useState<string[]>([]);

  function toggleScope(t: string) {
    setScope((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry — ${fd.get('company') || fd.get('name') || 'New'}`);
    const body = encodeURIComponent(
      [
        `Name: ${fd.get('name')}`,
        `Company: ${fd.get('company') || '—'}`,
        `Email: ${fd.get('email')}`,
        `Phone: ${fd.get('phone') || '—'}`,
        `Scope: ${scope.join(', ') || '—'}`,
        `Location / Site: ${fd.get('site') || '—'}`,
        `Timing: ${fd.get('timing') || '—'}`,
        '',
        'Brief:',
        String(fd.get('message') || ''),
      ].join('\n')
    );
    window.location.href = `mailto:Info@beratechllp.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Company (optional)" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
          Scope (select all that apply)
        </p>
        <div className="flex flex-wrap gap-2">
          {SCOPE_TAGS.map((t) => {
            const on = scope.includes(t);
            return (
              <button
                type="button"
                key={t}
                onClick={() => toggleScope(t)}
                className={`px-3 py-1.5 text-[12px] border transition ${
                  on
                    ? 'bg-ink text-bera-cream border-ink'
                    : 'bg-bera-cream text-ink/75 border-ink/20 hover:border-ink'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Site / location" name="site" placeholder="e.g. Mumbai, offshore" />
        <Field label="Timing" name="timing" placeholder="e.g. Within 2 months" />
      </div>

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          Project brief
        </span>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full bg-transparent border border-ink/20 px-3 py-2.5 text-[14px] focus:outline-none focus:border-ink resize-y"
          placeholder="Tell us about scope, asset type, timing and any constraints."
        />
      </label>

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-3 bg-ink text-bera-cream px-7 py-4 text-[13px] tracking-wide hover:bg-bera-navy transition"
      >
        {sent ? 'Opening your mail app…' : 'Send enquiry'}
        <span className="text-bera-orange group-hover:translate-x-1 transition-transform">→</span>
      </button>

      <p className="text-[11px] text-ink/50 font-mono">
        Submitting opens your email client with the message pre-filled to Info@beratechllp.com.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-ink/30 px-0 py-2 text-[15px] focus:outline-none focus:border-ink"
      />
    </label>
  );
}
