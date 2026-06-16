import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata = { title: 'Industries Served — BeraTech LLP' };

// All industries are derived directly from the PDF (services, clients, named projects)
const INDUSTRIES = [
  {
    n: '01',
    title: 'Naval & Defence',
    pull: 'Naval Dockyard, Mumbai',
    desc: 'Long-running engagements supporting refit, repair and inspection at the prestigious Naval Dockyard, Mumbai — including structural refit, ADEM coating, hull surveys and propellor work.',
    scope: ['Structural Refit', 'Hull Survey', 'Sea chest & Hull cleaning', 'ADEM coating'],
    image: '/images/projects/project-10.jpg',
  },
  {
    n: '02',
    title: 'Oil & Gas — Offshore',
    pull: 'Rigs · Jackets · Risers · SBMs',
    desc: 'UWILD campaigns and underwater intervention across Jack-Up rigs, jackets, risers, supply vessels, drill ships and other marine assets — with diver and ROV teams.',
    scope: ['UWILD Inspection', 'Underwater MPI / ACFM (NDT)', 'Anode Replacement', 'ROV Services'],
    image: '/images/projects/project-01.jpg',
  },
  {
    n: '03',
    title: 'Refineries & Process',
    pull: 'Expansion & shutdown jobs',
    desc: 'Mechanical structures fabrication, piping installation, surface treatment and full shutdown execution at refinery and process facilities.',
    scope: ['Refinery Expansion & Shutdown', 'Fabrication & Installation of Pipelines', 'Surface NDT', 'Tank Cleaning'],
    image: '/images/projects/project-08.jpg',
  },
  {
    n: '04',
    title: 'Ports & Marine Infrastructure',
    pull: 'Jetties · SBMs · Pipelines',
    desc: 'Jetty construction and inspection, plus inspection and maintenance of marine structures including SBMs and pipelines.',
    scope: ['Jetty Construction & Inspection', 'Maintenance of SBMs & Pipelines', 'Marine growth removal', 'Fishnet removal'],
    image: '/images/projects/project-19.jpg',
  },
  {
    n: '05',
    title: 'Metro & Urban Infrastructure',
    pull: 'Delhi Metro Rail Corporation',
    desc: 'Civil and structural support for tunnel works, shaft access, fabrication and erection for metro corridor construction.',
    scope: ['Civil Construction', 'Fabrication & Erection of Mechanical Structures', 'Rigging & Scaffolding', 'Rope Access'],
    image: '/images/projects/project-26.jpg',
  },
  {
    n: '06',
    title: 'Shipping & Ship Repair',
    pull: 'Drydock & afloat',
    desc: 'Full-scope ship repair — structural, mechanical and marine growth treatment — including engine refit, ADEM coating and heat exchanger retubing.',
    scope: ['Structural Refit · Hot Work', 'Engine Repair & Refit', 'Retubing of Heat Exchangers', 'Propellor Cleaning & Polishing'],
    image: '/images/projects/project-43.jpg',
  },
  {
    n: '07',
    title: 'Commercial & Residential Civil',
    pull: 'Build-side civil works',
    desc: 'Civil construction of residential and commercial spaces, with our consortium of mechanical and structural professionals on the project floor.',
    scope: ['Civil Construction', 'Fabrication & Installation', 'Surface Preparation & Painting', 'Fire Fighting Systems (R&R)'],
    image: '/images/projects/project-09.jpg',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="◆ Industries served"
        index="Chapter 05"
        title={
          <>
            Where our teams <span className="italic text-bera-navy">show up.</span>
          </>
        }
        blurb="Defence, oil & gas, ports, metros, refineries and shipyards — the sectors that have shaped our practice over three decades."
      />

      {/* Index list */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 reveal">
            {INDUSTRIES.map((i) => (
              <a
                key={i.n}
                href={`#ind-${i.n}`}
                className="group border border-ink/15 p-4 hover:bg-ink hover:text-bera-cream transition-colors"
              >
                <p className="font-mono text-[10px] tracking-widest text-bera-orange">{i.n}</p>
                <p className="mt-2 text-[13px] font-medium leading-tight">{i.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry rows — full-bleed alternating */}
      {INDUSTRIES.map((ind, idx) => {
        const flip = idx % 2 === 1;
        return (
          <section
            id={`ind-${ind.n}`}
            key={ind.n}
            className={`border-b border-ink/10 ${idx % 2 === 0 ? 'bg-bera-cream' : 'bg-bera-mist'}`}
          >
            <div className="mx-auto max-w-[1400px] px-5 py-20 lg:py-24">
              <div className={`grid gap-10 lg:grid-cols-12 items-center ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-5 reveal reveal-slow">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      sizes="(min-width:1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="reveal flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-[40px] lining-nums text-bera-orange leading-none">{ind.n}</span>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">{ind.pull}</p>
                  </div>
                  <h2 className="reveal font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.95] tracking-tightest text-ink">
                    {ind.title}
                  </h2>
                  <p className="reveal mt-5 max-w-2xl text-[16px] leading-relaxed text-ink/75">
                    {ind.desc}
                  </p>
                  <div className="reveal mt-7 flex flex-wrap gap-2">
                    {ind.scope.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center bg-ink text-bera-cream px-3 py-1.5 text-[12px] tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
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
            Operating in a sector not listed? <span className="italic text-bera-amber">We&apos;ll discuss.</span>
          </h2>
          <Link
            href="/contact"
            className="col-span-12 lg:col-span-4 reveal group inline-flex items-center justify-between gap-3 border border-bera-cream/40 px-6 py-5 hover:bg-bera-orange hover:text-ink hover:border-bera-orange transition"
          >
            <span className="font-display text-xl">Talk to us</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
