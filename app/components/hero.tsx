export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--color-accent)_18%,transparent),transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="text-sm font-medium text-[var(--color-accent)] tracking-wide uppercase">
          AI consulting &amp; marketing
        </p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
          AI that earns its keep.
          <br className="hidden sm:block" />
          <span className="text-[var(--color-ink-muted)]">From strategy to shipped.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-ink-muted)] leading-relaxed">
          We help ambitious teams design, build, and operate AI systems that move
          real metrics — not slideware. Senior delivery, opinionated stacks, and
          honest pricing.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] text-white px-6 py-3 text-base font-medium hover:opacity-90 transition"
          >
            Start a conversation
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-base font-medium hover:bg-[var(--color-bg-soft)] transition"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
}
