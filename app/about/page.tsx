import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata = { title: 'About — BeraTech LLP' };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="◆ About us"
        index="Chapter 02"
        title={
          <>
            Thirty years <span className="italic text-bera-navy">in the field.</span>
            <br />
            One operating philosophy.
          </>
        }
        blurb="A consortium of seasoned Civil, Mechanical and Marine professionals built around projects that demand precision."
      />

      {/* Intro block + image */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-10 px-5 py-20 lg:py-28">
          <div className="col-span-12 lg:col-span-7 reveal">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
              The Practice
            </p>
            <p className="mt-6 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-snug tracking-tight text-ink">
              BeraTech LLP is a three-decade-old engineering company based out of Mumbai, India. We
              are a consortium of professionals engaged in the field of
              <span className="italic text-bera-navy"> Civil, Mechanical and Marine </span>
              services.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/75 max-w-2xl">
              Over the years we have been involved in various small and medium scale projects —
              including the prestigious <strong className="text-ink">Naval Dockyard, Mumbai</strong>
              {' '}and{' '}
              <strong className="text-ink">Delhi Metro Rail Corporation</strong>.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 reveal reveal-slow">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/projects/project-08.jpg"
                alt="On-site engineering work"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="border-b border-ink/10 bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:py-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5 reveal border-l-2 border-bera-orange pl-6 lg:pl-10">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                ◆ Vision Statement
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1] tracking-tightest">
                A global leader in <span className="italic text-bera-amber">engineering excellence.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-bera-cream/80">
                At BERATECH, our vision is to be a global leader in engineering excellence — driving
                innovation and sustainability in the fields of Civil, Mechanical and Marine
                services. With a legacy spanning three decades, we aspire to continue being at the
                forefront of cutting-edge solutions that shape the future of infrastructure
                development and maintenance.
              </p>
            </div>

            <div className="hidden lg:block lg:col-span-1" />

            <div className="col-span-12 lg:col-span-6 reveal border-l-2 border-bera-cream/30 pl-6 lg:pl-10">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-cream/60">
                ◆ Mission Statement
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1] tracking-tightest">
                Unparalleled engineering solutions — across <span className="italic text-bera-amber">every domain.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-bera-cream/80">
                Our mission at BERATECH is to deliver unparalleled engineering solutions, leveraging
                our expertise and experience across Civil, Mechanical and Marine domains. As a
                consortium of seasoned professionals, we are committed to providing superior quality
                services that exceed industry standards. By embracing innovation, fostering
                collaboration, and upholding the highest standards of safety and environmental
                responsibility, we empower our clients to achieve their goals while contributing
                positively to the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:py-28">
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange reveal">
            ◆ How we operate
          </p>
          <h2 className="mt-4 reveal font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] tracking-tightest text-ink max-w-3xl">
            Working principles drawn from <span className="italic text-bera-navy">three decades of fieldwork.</span>
          </h2>

          <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-3">
            {[
              {
                n: '01',
                t: 'Safety first',
                d: 'Upholding the highest standards of safety and environmental responsibility on every site, above and below water.',
              },
              {
                n: '02',
                t: 'Quality that exceeds',
                d: 'Committed to providing superior quality services that exceed industry standards — across Civil, Mechanical and Marine work.',
              },
              {
                n: '03',
                t: 'Collaboration & innovation',
                d: 'Embracing innovation and fostering collaboration — between our professionals, our clients and the communities we serve.',
              },
            ].map((p) => (
              <div key={p.n} className="reveal bg-bera-cream p-8 lg:p-10">
                <p className="font-mono text-[40px] text-bera-orange lining-nums leading-none">{p.n}</p>
                <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">{p.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 grid grid-cols-12 gap-8 items-end">
          <h2 className="col-span-12 lg:col-span-8 reveal font-display tracking-tightest text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Continue the tour →
          </h2>
          <div className="col-span-12 lg:col-span-4 reveal flex flex-col gap-4">
            <Link href="/services" className="group flex items-center justify-between border-b border-bera-cream/30 py-4 hover:border-bera-orange transition">
              <span className="font-display text-xl">Services</span>
              <span className="text-bera-orange group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/projects" className="group flex items-center justify-between border-b border-bera-cream/30 py-4 hover:border-bera-orange transition">
              <span className="font-display text-xl">Projects</span>
              <span className="text-bera-orange group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/clients" className="group flex items-center justify-between border-b border-bera-cream/30 py-4 hover:border-bera-orange transition">
              <span className="font-display text-xl">Clients & Certifications</span>
              <span className="text-bera-orange group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
