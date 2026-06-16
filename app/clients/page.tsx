import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata = { title: 'Clients & Certifications — BeraTech LLP' };

const CLIENTS = [
  {
    n: '01',
    name: 'Indian Navy',
    sector: 'Defence · Marine',
    note: 'Engagements supporting the prestigious Naval Dockyard, Mumbai — refit, repair, and inspection of naval assets.',
  },
  {
    n: '02',
    name: 'HCC',
    sector: 'Infrastructure',
    note: 'Hindustan Construction Company — large-scale civil and infrastructure engagements.',
  },
  {
    n: '03',
    name: 'Subsea Technology',
    sector: 'Offshore · Subsea',
    note: 'Specialist subsea operations partner for offshore platforms, pipelines and underwater structures.',
    logo: '/images/clients/subsea-technology.jpg',
  },
  {
    n: '04',
    name: 'Larsen & Toubro',
    sector: 'Heavy Engineering · Infrastructure',
    note: 'Project engagements with India\'s largest engineering & construction major across heavy industrial scopes.',
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageIntro
        eyebrow="◆ Clients & Certifications"
        index="Chapter 06"
        title={
          <>
            Trusted by names that <span className="italic text-bera-navy">set the bar.</span>
          </>
        }
        blurb="Defence, infrastructure, subsea and heavy engineering — the kind of clients whose project files don't tolerate slippage."
      />

      {/* Client cards */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-24">
          <p className="reveal font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange mb-3 lg:mb-4">
            ◆ Our clients
          </p>
          <h2 className="reveal font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[0.95] tracking-tightest text-ink max-w-3xl">
            A small list — built on a long record.
          </h2>

          <div className="mt-10 lg:mt-14 grid gap-px bg-ink/10 lg:grid-cols-2">
            {CLIENTS.map((c) => (
              <article
                key={c.n}
                className="reveal bg-bera-cream p-6 lg:p-10 flex flex-col gap-5 lg:gap-6 min-h-[220px] lg:min-h-[260px]"
              >
                <div className="flex items-start justify-between gap-4 lg:gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bera-orange">
                      Client {c.n}
                    </p>
                    <h3 className="mt-3 lg:mt-4 font-display text-[clamp(1.5rem,3vw,2.6rem)] leading-none tracking-tightest text-ink">
                      {c.name}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/55">
                      {c.sector}
                    </p>
                  </div>
                  {c.logo && (
                    <div className="relative w-14 h-14 lg:w-16 lg:h-16 shrink-0">
                      <Image src={c.logo} alt={c.name} fill className="object-contain" sizes="64px" />
                    </div>
                  )}
                </div>
                <p className="text-[14px] lg:text-[15px] leading-relaxed text-ink/75 mt-auto">{c.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we uphold */}
      <section className="border-b border-ink/10 bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-28">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-5 reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                ◆ What we uphold
              </p>
              <h2 className="mt-3 lg:mt-4 font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[0.95] tracking-tightest">
                The standards that <span className="italic text-bera-amber">earn the work.</span>
              </h2>
              <p className="mt-5 lg:mt-6 text-bera-cream/80 text-[14px] lg:text-[15px] leading-relaxed max-w-md">
                Drawn directly from our mission — these are the commitments our clients depend on,
                project after project.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-bera-cream/10">
              {[
                {
                  t: 'Safety standards',
                  d: 'Upholding the highest standards of safety on every site — above and below water.',
                },
                {
                  t: 'Environmental responsibility',
                  d: 'Operating with respect for the marine and on-site environments we work within.',
                },
                {
                  t: 'Industry-exceeding quality',
                  d: 'Committed to delivering superior quality services that exceed industry standards.',
                },
                {
                  t: 'Skilled consortium',
                  d: 'A consortium of seasoned Civil, Mechanical and Marine professionals — assembled per scope.',
                },
              ].map((m) => (
                <div key={m.t} className="bg-ink p-6 lg:p-8 reveal">
                  <p className="font-display text-lg lg:text-xl tracking-tight">{m.t}</p>
                  <p className="mt-3 text-[13px] lg:text-[14px] leading-relaxed text-bera-cream/70">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications note */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-24">
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                ◆ Certifications
              </p>
              <h2 className="mt-3 lg:mt-4 font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1] tracking-tightest text-ink">
                Documentation on request.
              </h2>
            </div>
            <div className="lg:col-span-7 reveal text-ink/75 text-[15px] lg:text-[16px] leading-relaxed max-w-2xl">
              <p>
                BeraTech LLP operates as a consortium of qualified professionals — with formal
                documentation, compliance certificates and personnel qualifications maintained per
                engagement.
              </p>
              <p className="mt-4 lg:mt-5">
                For specific certifications relevant to your scope (UWILD, NDT personnel, lifting
                gear, safety management, vendor pre-qualification dossiers), please reach out
                through the contact form and we&apos;ll share the latest documentation directly.
              </p>
              <Link
                href="/contact"
                className="mt-6 lg:mt-8 inline-flex items-baseline gap-3 text-[14px] font-medium text-ink group"
              >
                Request documentation
                <span className="h-px w-12 bg-ink group-hover:w-20 group-hover:bg-bera-orange transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
