export function Stats() {
  const stats = [
    { k: "Fast response", v: "Same-day updates on inquiry (business hours)." },
    { k: "Specification-first", v: "We confirm requirements before procurement starts." },
    { k: "Partnership mindset", v: "Built for repeat business and long-term supply." },
  ];

  return (
    <section className="py-14">
      <div className="container">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:grid-cols-3 md:p-10">
          {stats.map((s) => (
            <div key={s.k} className="rounded-2xl bg-slate-50 p-6">
              <div className="text-sm font-semibold text-brand-800">{s.k}</div>
              <div className="mt-2 text-sm text-slate-600">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
