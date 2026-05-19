export function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[color-mix(in_oklch,var(--color-bg)_85%,transparent)] border-b border-black/5">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden className="inline-block size-2.5 rounded-full bg-[var(--color-accent)]" />
          Webtak AI
        </a>
        <nav className="hidden sm:flex items-center gap-7 text-sm text-[var(--color-ink-muted)]">
          <a href="#services" className="hover:text-[var(--color-ink)]">What we do</a>
          <a href="#demo" className="hover:text-[var(--color-ink)]">Demo</a>
          <a href="#contact" className="hover:text-[var(--color-ink)]">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-sm rounded-full bg-[var(--color-ink)] text-white px-4 py-2 hover:opacity-90 transition"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
