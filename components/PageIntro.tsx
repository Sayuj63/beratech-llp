type Props = {
  eyebrow: string;
  index: string;
  title: React.ReactNode;
  blurb?: string;
};

export default function PageIntro({ eyebrow, index, title, blurb }: Props) {
  return (
    <section className="relative border-b border-ink/10 bg-bera-cream overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-5 pt-14 pb-12 lg:pt-24 lg:pb-20">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-2 reveal">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
              {eyebrow}
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-widest text-ink/40">{index}</p>
          </div>
          <h1 className="lg:col-span-7 reveal font-display tracking-tightest text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.95] text-ink">
            {title}
          </h1>
          {blurb && (
            <p className="lg:col-span-3 reveal text-ink/70 text-[14px] lg:text-[15px] leading-relaxed border-l border-ink/15 pl-4 lg:pl-5">
              {blurb}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
