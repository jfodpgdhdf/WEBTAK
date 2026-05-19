export function Demo() {
  return (
    <section id="demo" className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Flagship demo
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            A live example of what we ship — agents that actually do the work,
            not just talk about it.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-dashed border-black/15 bg-[var(--color-bg-soft)] aspect-[16/9] flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-sm uppercase tracking-wider text-[var(--color-ink-muted)]">
              Coming soon
            </p>
            <p className="mt-2 text-lg font-medium">
              Our flagship demo lands here shortly.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              Want a walkthrough now? Get in touch &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
