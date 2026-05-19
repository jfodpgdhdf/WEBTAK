export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-block size-2 rounded-full bg-[var(--color-accent)]" />
          <span>© {new Date().getFullYear()} Webtak AI</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:marvin@webtak.de" className="hover:text-[var(--color-ink)]">
            marvin@webtak.de
          </a>
          <a href="#contact" className="hover:text-[var(--color-ink)]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
