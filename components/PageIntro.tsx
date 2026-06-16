type Props = {
  eyebrow: string;
  index: string;
  title: React.ReactNode;
  blurb?: string;
};

export default function PageIntro({ eyebrow, index, title, blurb }: Props) {
  return (
    <section className="relative border-b border-ink/10 bg-bera-cream">
      <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-2 reveal">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-bera-orange">
              {eyebrow}
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-widest text-ink/40">{index}</p>
          </div>
          <h1 className="lg:col-span-7 reveal font-display tracking-tightest text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-ink">
            {title}
          </h1>
          {blurb && (
            <p className="lg:col-span-3 reveal text-ink/70 text-[15px] leading-relaxed border-l border-ink/15 pl-5">
              {blurb}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
