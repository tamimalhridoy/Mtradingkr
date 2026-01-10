const faqs = [
  {
    q: "How do I request a quotation?",
    a: "Go to Contact and send your requirements (specs, quantity, destination, timeline). We reply with availability and a quotation plan.",
  },
  {
    q: "Do you support documentation for shipments?",
    a: "Yes—where applicable. Documentation requirements depend on the product category and destination.",
  },
  {
    q: "Can you source both small and bulk orders?",
    a: "Yes. We support flexible order quantities depending on product availability and supplier constraints.",
  },
  {
    q: "How fast do you respond?",
    a: "Typically same-day during business hours. For complex sourcing, we provide an estimated timeline for confirmation.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-slate-600">
            Quick answers to common questions. Need more details? Contact us.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft open:border-brand-100"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                {f.q}
                <span className="float-right text-brand-800 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
