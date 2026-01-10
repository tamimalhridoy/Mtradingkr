import Link from "next/link";
import Image from "next/image";

export function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-brand-100"
    >
      <div className="relative h-40 w-full">
        <Image
          src={service.thumb || service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Service
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-800">
            {service.title}
          </h3>
        </div>
        <p className="mt-3 text-sm text-slate-600">{service.short}</p>
        <div className="mt-5 text-sm font-semibold text-brand-800">Learn more →</div>
      </div>
    </Link>
  );
}
