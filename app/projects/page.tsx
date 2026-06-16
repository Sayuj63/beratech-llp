import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata = { title: 'Projects — BeraTech LLP' };

const FEATURED = [
  {
    cat: 'Defence · Marine',
    n: '01',
    title: 'Naval Dockyard, Mumbai',
    note: 'Long-running engagements supporting refit, repair and inspection of naval vessels at the prestigious Naval Dockyard.',
    image: '/images/projects/project-10.jpg',
  },
  {
    cat: 'Metro · Infrastructure',
    n: '02',
    title: 'Delhi Metro Rail Corporation',
    note: 'Civil and structural support for tunnel works, shaft access and supporting fabrication on the Delhi Metro corridor.',
    image: '/images/projects/project-26.jpg',
  },
  {
    cat: 'Offshore · Subsea',
    n: '03',
    title: 'Subsea Inspection & ROV',
    note: 'Diver and ROV-led UWILD campaigns across rigs, jackets, risers, SBMs and pipelines.',
    image: '/images/projects/project-01.jpg',
  },
  {
    cat: 'Shipyard · Heavy Fab',
    n: '04',
    title: 'Workshop Fabrication',
    note: 'Heavy plate work, structural members and pipe spool fabrication out of our covered yard.',
    image: '/images/projects/project-03.jpg',
  },
];

const GALLERY = Array.from({ length: 46 }, (_, i) => `/images/projects/project-${String(i + 1).padStart(2, '0')}.jpg`);

const CATEGORIES = [
  { tag: 'Underwater', n: '01' },
  { tag: 'Workshop & Fabrication', n: '02' },
  { tag: 'Jetty & Civil', n: '03' },
  { tag: 'Pipelines & Mechanical', n: '04' },
  { tag: 'Refinery & Shutdown', n: '05' },
  { tag: 'Ship Repair', n: '06' },
];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="◆ Projects"
        index="Chapter 04"
        title={
          <>
            From <span className="italic text-bera-navy">workshop floor</span><br />
            to the open sea.
          </>
        }
        blurb="Selected work — across offshore, onshore, ship-repair and infrastructure engagements over three decades."
      />

      {/* Filter tags */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-8 lg:py-10">
          <div className="flex flex-wrap gap-2 reveal">
            {CATEGORIES.map((c) => (
              <span
                key={c.tag}
                className="inline-flex items-baseline gap-2 border border-ink/15 px-3 py-1.5 text-[12px] tracking-wide text-ink/75 hover:bg-ink hover:text-bera-cream transition"
              >
                <span className="font-mono text-[10px] text-bera-orange">{c.n}</span>
                {c.tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-28">
          <div className="mb-10 lg:mb-12 reveal">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
              ◆ Flagship engagements
            </p>
            <h2 className="mt-3 lg:mt-4 font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[0.95] tracking-tightest text-ink max-w-3xl">
              Notable engagements that shaped the practice.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURED.map((f) => (
              <article key={f.n} className="reveal group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4 lg:mb-5">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-ink/85 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono text-bera-orange">
                    {f.cat}
                  </div>
                </div>
                <div className="flex items-baseline gap-3 lg:gap-4">
                  <p className="font-mono text-[11px] text-bera-orange lining-nums shrink-0">{f.n}</p>
                  <div>
                    <h3 className="font-display text-xl lg:text-3xl tracking-tight text-ink leading-tight">
                      {f.title}
                    </h3>
                    <p className="mt-2 lg:mt-3 text-[14px] lg:text-[15px] leading-relaxed text-ink/70 max-w-md">
                      {f.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic gallery */}
      <section className="border-b border-ink/10 bg-bera-mist">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-28">
          <div className="mb-10 lg:mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                ◆ Field archive
              </p>
              <h2 className="mt-3 lg:mt-4 font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[0.95] tracking-tightest text-ink">
                A walk through the <span className="italic text-bera-navy">archive.</span>
              </h2>
            </div>
            <p className="reveal max-w-sm text-[14px] text-ink/65 leading-relaxed">
              Photographs from active sites — divers in commercial gear, fabrication yards,
              pipeline runs, refinery shutdowns and shipyard work.
            </p>
          </div>

          {/* Responsive gallery: 2 cols on mobile, 3 on md, 4 on lg — fixed row height, no col-span tricks on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[160px] md:auto-rows-[180px] lg:auto-rows-[200px]">
            {GALLERY.map((src, i) => {
              // Only apply spanning on large screens to avoid mobile overflow
              const tallLg = i % 7 === 0 || i % 11 === 3;
              return (
                <div
                  key={src}
                  className={`reveal relative overflow-hidden bg-ink/5 group ${
                    tallLg ? 'lg:row-span-2' : ''
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Project archive ${i + 1}`}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors" />
                  <div className="absolute bottom-2 left-2 font-mono text-[10px] tracking-widest text-bera-cream opacity-0 group-hover:opacity-100 transition">
                    {String(i + 1).padStart(3, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-20 grid grid-cols-12 gap-6 lg:gap-8 items-end">
          <h2 className="col-span-12 lg:col-span-8 reveal font-display tracking-tightest text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Want a closer look at a specific job? <span className="italic text-bera-amber">Ask for the file.</span>
          </h2>
          <Link
            href="/contact"
            className="col-span-12 lg:col-span-4 reveal group inline-flex items-center justify-between gap-3 border border-bera-cream/40 px-6 py-5 hover:bg-bera-orange hover:text-ink hover:border-bera-orange transition"
          >
            <span className="font-display text-xl">Request a case study</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
