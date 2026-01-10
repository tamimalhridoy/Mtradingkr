import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2, ShieldCheck, Truck } from "lucide-react";

const features = [
  { icon: Globe2, title: "Global sourcing", body: "Supplier coordination with specification-first sourcing." },
  { icon: ShieldCheck, title: "Quality & compliance", body: "Documentation support and careful handling as applicable." },
  { icon: Truck, title: "Shipment planning", body: "Clear timelines and coordination from order to delivery." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Image background (from your provided assets) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Global trading"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90" />

        {/* Premium glows */}
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-accent/20 blur-3xl floaty" />
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-600/25 blur-3xl floaty" />
        <div className="absolute -bottom-52 left-1/3 h-[620px] w-[620px] rounded-full bg-brand-800/30 blur-3xl floaty" />

        {/* subtle grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-accent" />
            Global Trading Partner
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Premium trading support for modern supply chains.
          </h1>

          <p className="mt-6 text-lg text-white/85">
            M Trading helps businesses source products and coordinate procurement across cosmetics, machine spare parts,
            electronics components, and chemicals — with clear communication and reliable delivery planning.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-center text-sm font-semibold text-brand-900 shadow-soft hover:opacity-95"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 backdrop-blur"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-800/40 text-brand-accent">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-white">{f.title}</div>
                </div>
                <p className="mt-3 text-sm text-white/75">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
