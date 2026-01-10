import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export function Industries() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Industries we serve
          </h2>
          <p className="mt-2 text-slate-600">
            Category-focused sourcing with premium communication and reliable coordination.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-brand-100"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-semibold text-white">{s.title}</div>
                  <div className="mt-1 text-sm text-white/85">{s.short}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
