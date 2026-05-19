const tiers = [
  {
    name: "Advise",
    summary: "Strategy, architecture, and roadmap reviews from senior practitioners.",
    bullets: [
      "AI opportunity audit",
      "Build-vs-buy decisions",
      "Model & vendor selection",
    ],
  },
  {
    name: "Build",
    summary: "We ship the first working version — agents, automations, integrations.",
    bullets: [
      "Custom agents & copilots",
      "Workflow automation",
      "Integration with your stack",
    ],
  },
  {
    name: "Operate",
    summary: "We run, monitor, and improve what we built — or what you have.",
    bullets: [
      "Evals, monitoring, on-call",
      "Cost & latency tuning",
      "Continuous iteration",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-black/5 bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            What we do
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            Three tiers of engagement, scaled to where you are. Engage one or
            sequence them.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <article
              key={tier.name}
              className="rounded-2xl border border-black/10 bg-white p-7 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center size-7 rounded-full bg-[var(--color-ink)] text-white text-xs font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{tier.name}</h3>
              </div>
              <p className="mt-4 text-[var(--color-ink-muted)]">{tier.summary}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 inline-block size-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
