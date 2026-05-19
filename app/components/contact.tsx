"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/contact.php";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed");
    }
  }

  return (
    <section id="contact" className="border-t border-black/5 bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Let&apos;s talk.
            </h2>
            <p className="mt-4 text-lg text-[var(--color-ink-muted)] max-w-md">
              Tell us where AI fits — or where it&apos;s already broken. We
              reply within one business day.
            </p>
            <div className="mt-8 text-sm text-[var(--color-ink-muted)] space-y-2">
              <p>
                Prefer email?{" "}
                <a
                  href="mailto:marvin@webtak.de"
                  className="text-[var(--color-ink)] underline underline-offset-4"
                >
                  marvin@webtak.de
                </a>
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 space-y-5"
            aria-live="polite"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[10000px] size-0"
              aria-hidden
            />
            <Field label="Name" name="name" type="text" autoComplete="name" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
            <Field label="Company" name="company" type="text" autoComplete="organization" />
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                What are you working on?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                placeholder="A couple of sentences is plenty."
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] text-white px-6 py-3 text-base font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send"}
            </button>
            {status === "success" && (
              <p className="text-sm text-emerald-700">
                Thanks — we&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700">
                Something went wrong{errorMessage ? `: ${errorMessage}` : ""}.{" "}
                <a href="mailto:marvin@webtak.de" className="underline">
                  Email us directly
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
      />
    </div>
  );
}
