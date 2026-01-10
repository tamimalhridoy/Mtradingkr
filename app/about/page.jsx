import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "About",
  description: "About M Trading — your global trading partner.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              title="About M Trading"
              subtitle="We build long-term partnerships through reliable sourcing, clear communication, and shipment planning."
            />
            <div className="mt-6 grid gap-4 text-slate-600">
              <p>
                M Trading works with businesses to source products, coordinate procurement, and plan deliveries across
                multiple categories — including cosmetics, machine spare parts, electronics components, and chemicals.
              </p>
              <p>
                Our goal is simple: reduce your supply risk, keep timelines predictable, and deliver consistent service.
              </p>
              <div className="rounded-2xl bg-brand-100 p-5 text-brand-900">
                <div className="font-semibold">What you can expect</div>
                <ul className="mt-3 grid gap-2 text-sm">
                  <li>• Transparent updates and fast responses</li>
                  <li>• Specification-first sourcing and coordination</li>
                  <li>• Flexible trading support based on your needs</li>
                </ul>
              </div>
            </div>
          </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-accent/25 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="relative p-10">
        <div className="text-sm font-semibold text-brand-800">Our promise</div>
        <div className="mt-3 text-2xl font-semibold text-slate-900">
          Clear communication and dependable coordination.
        </div>
        <p className="mt-3 text-slate-600">
          We keep you updated from inquiry to delivery so your supply chain stays predictable.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            { title: "Transparency", body: "Clear updates and realistic timelines." },
            { title: "Reliability", body: "Spec matching and careful sourcing." },
            { title: "Partnership", body: "Built for repeat orders and long-term trust." },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-slate-200 bg-white/70 p-5">
              <div className="font-semibold text-slate-900">{x.title}</div>
              <div className="mt-1 text-sm text-slate-600">{x.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      <CTA />
    </>
  );
}
