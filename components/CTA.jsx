import Link from "next/link";

export function CTA() {
  return (
    <section className="py-14">
      <div className="container">
        <div className="rounded-3xl bg-brand-900 px-6 py-10 text-white shadow-soft md:px-10 md:py-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Need pricing or availability?</h3>
              <p className="mt-2 text-white/85">
                Share your product requirements and destination. We’ll reply with a quick plan and quotation.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-brand-accent px-6 py-3 text-center text-sm font-semibold text-brand-900 hover:opacity-95"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
