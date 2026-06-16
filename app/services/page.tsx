import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { SERVICES } from '@/lib/services';

export const metadata = { title: 'Services — BeraTech LLP' };

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="◆ Services"
        index="Chapter 03"
        title={
          <>
            Four pillars.<br />
            <span className="italic text-bera-navy">37+ service lines.</span>
          </>
        }
        blurb="Our scope covers offshore, above-water, onshore and ship-repair work — delivered by a single consortium of seasoned engineers."
      />

      {/* Pillar index */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-4 divide-x divide-ink/10">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="reveal group p-7 lg:p-10 flex flex-col gap-3 hover:bg-bera-mist transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bera-orange">
                Pillar {s.n}
              </p>
              <p className="font-display text-2xl lg:text-3xl tracking-tight text-ink leading-tight">
                {s.title}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-[12px] text-ink/55 group-hover:text-ink transition">
                Jump to section
                <span className="text-bera-orange group-hover:translate-x-1 transition-transform">↓</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Service sections — alternating layout */}
      {SERVICES.map((s, idx) => {
        const flip = idx % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`border-b border-ink/10 ${idx % 2 === 1 ? 'bg-bera-mist' : 'bg-bera-cream'}`}
          >
            <div className="mx-auto max-w-[1400px] px-5 py-20 lg:py-28">
              <div className={`grid gap-10 lg:grid-cols-12 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-6 reveal reveal-slow">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width:1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-5 left-5 bg-ink/85 backdrop-blur px-3 py-2">
                      <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bera-orange">
                        Pillar {s.n}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="reveal">
                    <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                      {s.title}
                    </p>
                    <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.95] tracking-tightest text-ink">
                      {s.tagline}
                    </h2>
                    <p className="mt-5 text-ink/75 text-[16px] leading-relaxed max-w-xl">
                      {s.description}
                    </p>
                  </div>

                  {s.sub && (
                    <p className="reveal mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                      ─ {s.sub}
                    </p>
                  )}

                  <ol className="reveal mt-6 grid gap-y-3 gap-x-6 sm:grid-cols-2 lining-nums">
                    {s.items.map((it, i) => (
                      <li
                        key={i}
                        className="flex items-baseline gap-3 text-[14px] leading-snug text-ink/85"
                      >
                        <span className="font-mono text-[11px] text-bera-orange shrink-0 pt-px">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 grid grid-cols-12 gap-8 items-end">
          <h2 className="col-span-12 lg:col-span-8 reveal font-display tracking-tightest text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Need a scope we haven&apos;t listed? <span className="italic text-bera-amber">Ask.</span>
          </h2>
          <Link
            href="/contact"
            className="col-span-12 lg:col-span-4 reveal group inline-flex items-center justify-between gap-3 border border-bera-cream/40 px-6 py-5 hover:bg-bera-orange hover:text-ink hover:border-bera-orange transition"
          >
            <span className="font-display text-xl">Start an enquiry</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
