import Image from 'next/image';
import Link from 'next/link';

const SERVICE_PILLARS = [
  {
    id: 'offshore',
    n: '01',
    title: 'Offshore',
    note: 'Underwater inspection · NDT · ROV · marine structures.',
    items: ['UWILD for rigs & jackets', 'Underwater MPI/ACFM (NDT)', 'Marine growth & anode replacement', 'ROV services'],
  },
  {
    id: 'above-water',
    n: '02',
    title: 'Above Water',
    note: 'Structural & piping fabrication, rope access, NDT.',
    items: ['Fabrication & installation', 'Rope access · Surface NDT', 'Tank cleaning · Paint application', 'Chiller R&R · Fire fighting (R&R)'],
  },
  {
    id: 'onshore',
    n: '03',
    title: 'Onshore',
    note: 'Jetty construction, refinery work, civil & mechanical erection.',
    items: ['Jetty construction & inspection', 'Pipeline fabrication & installation', 'Mechanical structures · Civil works', 'Refinery expansion & shutdown'],
  },
  {
    id: 'ship-repairs',
    n: '04',
    title: 'Ship Repairs',
    note: 'Structural refit, ADEM coating, hull, propellor, heat exchangers.',
    items: ['Structural refit · Hot work', 'ADEM coating · Hull survey', 'Sea chest & propellor cleaning', 'Retubing of heat exchangers'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-4 px-4 pt-10 pb-12 lg:gap-5 lg:px-5 lg:pt-16 lg:pb-24">
          {/* Left rail — meta (hidden on mobile, shown on desktop) */}
          <aside className="hidden lg:flex lg:col-span-2 lg:flex-col justify-between gap-6 lg:gap-0 lg:pt-2">
            <div className="reveal">
              <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-bera-orange">Est. Three decades</p>
              <p className="mt-1 font-mono text-[10px] tracking-widest text-ink/40">Mumbai · India</p>
            </div>
            <div className="reveal mt-auto">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Scroll</p>
              <div className="mt-2 h-12 w-px bg-ink/30 mx-1" />
            </div>
          </aside>

          {/* Mobile-only meta strip */}
          <div className="col-span-12 flex items-center justify-between lg:hidden reveal">
            <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-bera-orange">Est. Three decades</p>
            <p className="font-mono text-[10px] tracking-widest text-ink/40">Mumbai · India</p>
          </div>

          {/* Main headline */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="reveal font-display tracking-tightest leading-[0.88] text-ink text-[clamp(2.8rem,9vw,9.5rem)]">
              Beyond<br />
              <span className="italic text-bera-navy">boundaries.</span><br />
              Building<br />
              <span className="text-bera-orange">excellence.</span>
            </h1>
            <div className="reveal mt-8 lg:mt-10 max-w-xl">
              <p className="text-[15px] lg:text-[17px] leading-relaxed text-ink/75">
                Welcome to BeraTech LLP — a premier engineering consortium based in Mumbai, India.
                Backed by over 30 years of industry expertise, we deliver robust, multidisciplinary
                solutions spanning Mechanical, Civil and Marine services.
              </p>
              <div className="mt-6 lg:mt-8 flex flex-wrap items-center gap-3 lg:gap-4">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 lg:px-7 lg:py-4 text-[12px] lg:text-[13px] tracking-wide text-bera-cream hover:bg-bera-navy transition"
                >
                  Explore our services
                  <span className="text-bera-orange group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/projects"
                  className="text-[12px] lg:text-[13px] tracking-wide text-ink underline underline-offset-8 decoration-bera-orange decoration-2 hover:text-bera-navy transition"
                >
                  See the work
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image — offset card */}
          <div className="col-span-12 lg:col-span-3 mt-8 lg:mt-0 reveal reveal-slow">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/hero.jpg"
                alt="Offshore platform at sunrise — BeraTech operations"
                fill
                priority
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-bera-cream">
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bera-orange">Operations</p>
                <p className="mt-1 font-display text-lg leading-tight">
                  Civil · Mechanical · Marine
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="border-t border-ink/10 bg-ink text-bera-cream overflow-hidden">
          <div className="marquee-track py-4 lg:py-5">
            {Array.from({ length: 2 }).flatMap((_, j) =>
              ['UWILD', 'NDT', 'ROV', 'Jetty Construction', 'Refinery Shutdown', 'Hull Survey', 'ADEM Coating', 'Rope Access', 'Fabrication & Installation', 'Pipeline Engineering']
                .map((w, i) => (
                  <span key={`${j}-${i}`} className="flex items-center gap-8 pr-8 font-display text-[clamp(1.6rem,4vw,3.5rem)] tracking-tightest whitespace-nowrap">
                    <span className="text-bera-orange">◆</span> {w}
                  </span>
                ))
            )}
          </div>
        </div>
      </section>

      {/* ─── COUNTER STRIP ─── */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ink/10">
          {[
            { k: '3', s: 'decades', t: 'in engineering services' },
            { k: '4', s: 'domains', t: 'Civil · Mech · Marine · Ship' },
            { k: '37+', s: 'service lines', t: 'across our four pillars' },
            { k: '4', s: 'flagship clients', t: 'Navy · HCC · L&T · Subsea' },
          ].map((c, i) => (
            <div key={i} className="reveal p-6 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bera-orange">{c.s}</p>
              <p className="mt-2 lg:mt-3 font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-none tracking-tightest text-ink lining-nums">
                {c.k}
              </p>
              <p className="mt-2 lg:mt-3 text-[12px] lg:text-[13px] text-ink/60 leading-snug">{c.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="relative bg-bera-cream border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 lg:gap-10 px-4 lg:px-5 py-16 lg:py-28">
          <div className="col-span-12 lg:col-span-4 reveal">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
              ◆ Who we are
            </p>
            <p className="mt-3 font-mono text-[11px] tracking-widest text-ink/40">Note · 02</p>
          </div>
          <div className="col-span-12 lg:col-span-8 reveal">
            <p className="font-display text-[clamp(1.4rem,2.6vw,2.4rem)] leading-snug text-ink tracking-tight">
              A consortium of professionals engaged in <span className="italic text-bera-navy">Civil, Mechanical and Marine</span> services
              — engaged across small and medium scale projects, including the prestigious
              <span className="text-bera-orange"> Naval Dockyard, Mumbai</span> and
              <span className="text-bera-orange"> Delhi Metro Rail Corporation</span>.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/about"
                className="group inline-flex items-baseline gap-3 text-[14px] font-medium text-ink"
              >
                Read our story
                <span className="h-px w-12 bg-ink group-hover:w-20 group-hover:bg-bera-orange transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PILLARS ─── */}
      <section className="border-b border-ink/10 bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-28">
          <div className="grid grid-cols-12 gap-4 lg:gap-6 items-end mb-10 lg:mb-14">
            <p className="col-span-12 lg:col-span-2 font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange reveal">
              ◆ Capabilities
            </p>
            <h2 className="col-span-12 lg:col-span-7 reveal font-display text-[clamp(2rem,5vw,4.2rem)] leading-[0.95] tracking-tightest">
              Four pillars. <span className="italic text-bera-amber">One workshop.</span>
            </h2>
            <p className="col-span-12 lg:col-span-3 reveal text-bera-cream/70 text-[14px] leading-relaxed lg:border-l lg:border-bera-cream/15 lg:pl-4">
              From sub-sea inspection to refinery shutdowns, our scope covers the full operational
              envelope of marine and industrial assets.
            </p>
          </div>

          <div className="grid gap-px bg-bera-cream/10 lg:grid-cols-2">
            {SERVICE_PILLARS.map((p) => (
              <Link
                key={p.id}
                href={`/services#${p.id}`}
                className="reveal group block bg-ink p-6 lg:p-10 hover:bg-steel transition-colors"
              >
                <div className="flex items-baseline justify-between border-b border-bera-cream/15 pb-5 lg:pb-6">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bera-orange">
                      Pillar {p.n}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-none tracking-tightest">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-bera-orange text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </div>
                <p className="mt-4 text-bera-cream/70 text-[14px] leading-relaxed">{p.note}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-baseline gap-3 text-[13px] text-bera-cream/85">
                      <span className="text-bera-orange">·</span> {it}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECT GLIMPSE ─── */}
      <section className="border-b border-ink/10 bg-bera-mist">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-28">
          <div className="flex items-end justify-between mb-8 lg:mb-12 flex-wrap gap-4">
            <div className="reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">◆ Field record</p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,4.5vw,3.6rem)] leading-[0.95] tracking-tightest text-ink">
                A glimpse from <span className="italic text-bera-navy">the field.</span>
              </h2>
            </div>
            <Link href="/projects" className="reveal text-[13px] tracking-wide text-ink underline underline-offset-8 decoration-bera-orange decoration-2">
              View full gallery →
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            <div className="col-span-12 md:col-span-7 reveal">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/project-03.jpg"
                  alt="Workshop fabrication"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-3 lg:gap-4">
              <div className="reveal relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/project-01.jpg"
                  alt="Offshore equipment"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 50vw"
                />
              </div>
              <div className="reveal relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/project-05.jpg"
                  alt="Heavy fabrication"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS STRIP ─── */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 lg:gap-10 px-4 lg:px-5 py-16 lg:py-20">
          <div className="col-span-12 lg:col-span-4 reveal">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">◆ Trusted by</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] tracking-tightest text-ink">
              Names that set <span className="italic text-bera-navy">the bar.</span>
            </h2>
            <p className="mt-4 text-ink/65 text-[14px] lg:text-[15px] leading-relaxed max-w-md">
              Engagements with public sector defence, infrastructure majors and subsea specialists.
            </p>
            <Link href="/clients" className="inline-block mt-5 text-[13px] tracking-wide text-ink underline underline-offset-8 decoration-bera-orange decoration-2">
              Clients & certifications →
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
            {['Indian Navy', 'HCC', 'Subsea Technology', 'L&T'].map((c, i) => (
              <div key={c} className="reveal bg-bera-cream p-5 lg:p-7 flex flex-col justify-between min-h-[140px] lg:min-h-[180px]">
                <p className="font-mono text-[10px] tracking-widest uppercase text-bera-orange">0{i + 1}</p>
                <p className="font-display text-xl lg:text-2xl leading-tight tracking-tight text-ink">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-20 lg:py-32 grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <h2 className="col-span-12 lg:col-span-8 reveal font-display tracking-tightest text-[clamp(2rem,7vw,6rem)] leading-[0.9]">
            Have a project where <span className="italic text-bera-amber">precision</span> is non-negotiable?
          </h2>
          <div className="col-span-12 lg:col-span-4 reveal">
            <p className="text-bera-cream/70 text-[14px] lg:text-[15px] leading-relaxed mb-5 lg:mb-6">
              Tell us about scope, location and timeline. We respond within one working day.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-bera-orange px-7 py-4 text-ink font-medium tracking-wide"
            >
              Start an enquiry
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
