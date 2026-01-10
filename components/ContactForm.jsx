"use client";

import { useMemo, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState(null);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Inquiry from M Trading website");
    const body = encodeURIComponent(
      "Hello M Trading,\n\nI would like to request a quote.\n\nThanks,"
    );
    return `mailto:info@mtrading.com?subject=${subject}&body=${body}`;
  }, []);

  async function onSubmit(formData) {
    setStatus("sending");
    setError(null);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Request failed");
      }

      setStatus("sent");
    } catch (e) {
      setStatus("error");
      setError(e?.message || "Something went wrong");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <form action={onSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            <span className="font-semibold text-slate-700">Name</span>
            <input
              name="name"
              required
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-100 focus:ring-4"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm">
            <span className="font-semibold text-slate-700">Email</span>
            <input
              name="email"
              type="email"
              required
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-100 focus:ring-4"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-slate-700">Service</span>
          <select
            name="service"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-100 focus:ring-4"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Cosmetics and skin care</option>
            <option>Machine spare parts</option>
            <option>Electronics and computer components</option>
            <option>Chemical</option>
            <option>Other</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-slate-700">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-100 focus:ring-4"
            placeholder="Write your requirements (quantity, destination, target timeline)..."
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-700 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <a
            href={mailto}
            className="text-sm font-semibold text-brand-800 underline decoration-brand-accent/60 underline-offset-4"
          >
            Or email directly
          </a>
        </div>

        {status === "sent" ? (
          <div className="rounded-xl bg-brand-100 px-4 py-3 text-sm text-brand-900">
            ✅ Message received. We’ll get back to you shortly.
          </div>
        ) : null}

        {status === "error" ? (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            ❌ {error}
          </div>
        ) : null}
      </form>

      <p className="mt-4 text-xs text-slate-500">
        Note: the default API route stores nothing and only validates the request.
        Connect email delivery (e.g., Resend) later if you want.
      </p>
    </div>
  );
}
