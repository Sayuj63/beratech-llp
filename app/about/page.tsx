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
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 lg:gap-10 px-4 lg:px-5 py-16 lg:py-28">
          <div className="col-span-12 lg:col-span-7 reveal">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
              The Practice
            </p>
            <p className="mt-5 lg:mt-6 font-display text-[clamp(1.4rem,2.6vw,2.4rem)] leading-snug tracking-tight text-ink">
              Welcome to BeraTech LLP — a premier engineering consortium based in Mumbai, India.
              Backed by over 30 years of rich industry expertise, we deliver robust, multidisciplinary
              solutions spanning
              <span className="italic text-bera-navy"> Mechanical, Civil and Marine </span>
              services.
            </p>
            <p className="mt-5 lg:mt-6 text-[15px] lg:text-[16px] leading-relaxed text-ink/75 max-w-2xl">
              We bring together an elite team of seasoned professionals dedicated to executing
              complex, small-to-medium-scale projects with precision, safety, and innovation.
            </p>

            <p className="mt-10 lg:mt-12 font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
              ◆ Trusted by Industry Giants
            </p>
            <p className="mt-4 lg:mt-5 text-[15px] lg:text-[16px] leading-relaxed text-ink/75 max-w-2xl">
              Our decades-long journey is defined by our contribution to some of the nation&rsquo;s
              most critical infrastructure and energy projects. We are proud to have partnered with
              prestigious organizations and public sector undertakings, including:
            </p>
            <ul className="mt-5 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-2xl text-[14px] lg:text-[15px] text-ink/80">
              {[
                'Naval Dockyard, Mumbai',
                'Delhi Metro Rail Corporation (DMRC)',
                'L&T Shipbuilding Yard',
                'Oil and Natural Gas Corporation (ONGC)',
                'Hindustan Oil Exploration Company (HOEC)',
              ].map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-[5px] w-[5px] flex-none bg-bera-orange" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 lg:mt-10 text-[15px] lg:text-[16px] leading-relaxed text-ink/75 max-w-2xl">
              At BeraTech LLP, we combine deep technical engineering knowledge with reliable project
              management to turn complex challenges into sustainable assets. Whether navigating
              intricate marine systems, heavy mechanical engineering, or foundational civil works,
              we are built to deliver.
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
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-28">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-5 reveal border-l-2 border-bera-orange pl-5 lg:pl-10">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                ◆ Vision Statement
              </p>
              <h2 className="mt-4 lg:mt-5 font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1] tracking-tightest">
                A global leader in <span className="italic text-bera-amber">engineering excellence.</span>
              </h2>
              <p className="mt-5 lg:mt-6 text-[14px] lg:text-[15px] leading-relaxed text-bera-cream/80">
                At BERATECH, our vision is to be a global leader in engineering excellence — driving
                innovation and sustainability in the fields of Civil, Mechanical and Marine
                services. With a legacy spanning three decades, we aspire to continue being at the
                forefront of cutting-edge solutions that shape the future of infrastructure
                development and maintenance.
              </p>
            </div>

            <div className="hidden lg:block lg:col-span-1" />

            <div className="col-span-12 lg:col-span-6 reveal border-l-2 border-bera-cream/30 pl-5 lg:pl-10">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-cream/60">
                ◆ Mission Statement
              </p>
              <h2 className="mt-4 lg:mt-5 font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1] tracking-tightest">
                Unparalleled engineering solutions — across <span className="italic text-bera-amber">every domain.</span>
              </h2>
              <p className="mt-5 lg:mt-6 text-[14px] lg:text-[15px] leading-relaxed text-bera-cream/80">
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
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-28">
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange reveal">
            ◆ How we operate
          </p>
          <h2 className="mt-4 reveal font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[0.95] tracking-tightest text-ink max-w-3xl">
            Working principles drawn from <span className="italic text-bera-navy">three decades of fieldwork.</span>
          </h2>

          <div className="mt-10 lg:mt-14 grid gap-px bg-ink/10 md:grid-cols-3">
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
              <div key={p.n} className="reveal bg-bera-cream p-7 lg:p-10">
                <p className="font-mono text-[36px] lg:text-[40px] text-bera-orange lining-nums leading-none">{p.n}</p>
                <h3 className="mt-5 lg:mt-6 font-display text-xl lg:text-2xl tracking-tight text-ink">{p.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-5 py-16 lg:py-20 grid grid-cols-12 gap-6 lg:gap-8 items-end">
          <h2 className="col-span-12 lg:col-span-8 reveal font-display tracking-tightest text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Continue the tour →
          </h2>
          <div className="col-span-12 lg:col-span-4 reveal flex flex-col gap-3 lg:gap-4">
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
