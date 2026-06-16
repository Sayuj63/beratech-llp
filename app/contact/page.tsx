import PageIntro from '@/components/PageIntro';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact — BeraTech LLP' };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="◆ Contact"
        index="Chapter 07"
        title={
          <>
            Tell us about <span className="italic text-bera-navy">the job.</span>
          </>
        }
        blurb="Scope, location, timing — anything we should know up front. We typically reply within one working day."
      />

      <section className="border-b border-ink/10 bg-bera-cream">
        <div className="mx-auto max-w-[1400px] grid gap-12 lg:grid-cols-12 px-5 py-20 lg:py-24">
          {/* Direct details */}
          <aside className="lg:col-span-5 space-y-10">
            <div className="reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                Studio
              </p>
              <p className="mt-4 font-display text-[clamp(1.4rem,2vw,1.8rem)] leading-tight text-ink">
                B/107, Bhadra, Rashmi Nagar,<br />
                Ram Mandir Rd, Virar West,<br />
                Maharashtra, Mumbai 401303<br />
                India
              </p>
            </div>

            <div className="reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                Direct lines
              </p>
              <ul className="mt-4 space-y-2 text-[17px] text-ink">
                <li>
                  <a className="hover:text-bera-navy transition" href="tel:+919028650954">
                    +91 90286 50954
                  </a>
                </li>
                <li>
                  <a className="hover:text-bera-navy transition" href="tel:+917972536774">
                    +91 79725 36774
                  </a>
                </li>
              </ul>
            </div>

            <div className="reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                Email
              </p>
              <a
                href="mailto:Info@beratechllp.com"
                className="mt-4 inline-block font-display text-[clamp(1.5rem,2.4vw,2rem)] tracking-tight text-ink hover:text-bera-navy transition underline underline-offset-8 decoration-bera-orange decoration-2"
              >
                Info@beratechllp.com
              </a>
            </div>

            <div className="reveal">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
                Operating hours
              </p>
              <p className="mt-4 text-[15px] text-ink/75 leading-relaxed max-w-sm">
                Monday – Saturday, 09:30 – 18:30 IST.<br />
                Field teams operate around the clock per project schedule.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <div className="border border-ink/15 bg-bera-cream p-6 lg:p-10">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange mb-4">
                Send us a brief
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map / location strip — visual block (no embedded map by default) */}
      <section className="bg-ink text-bera-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 grid grid-cols-12 gap-8 items-end">
          <h2 className="col-span-12 lg:col-span-8 reveal font-display tracking-tightest text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Based in Mumbai. <span className="italic text-bera-amber">Operating across India and offshore.</span>
          </h2>
          <p className="col-span-12 lg:col-span-4 reveal text-bera-cream/70 text-[15px] leading-relaxed">
            Our crew mobilizes from Mumbai to project sites across India — and offshore on rigs and
            vessels per engagement schedule.
          </p>
        </div>
      </section>
    </>
  );
}
