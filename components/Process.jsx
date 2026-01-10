import { ClipboardList, PackageSearch, Ship, MessageSquare } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "1) Share requirements", body: "Send specs, quantity, destination, and timeline." },
  { icon: PackageSearch, title: "2) Source & confirm", body: "We verify availability, lead time, and packaging details." },
  { icon: ClipboardList, title: "3) Documentation plan", body: "We align paperwork needs (as applicable) for your route." },
  { icon: Ship, title: "4) Shipment coordination", body: "Clear status updates until delivery is complete." },
];

export function Process() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            How we work
          </h2>
          <p className="mt-2 text-slate-600">
            A simple, transparent process — designed to reduce risk and keep timelines predictable.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 text-brand-800">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-semibold text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
