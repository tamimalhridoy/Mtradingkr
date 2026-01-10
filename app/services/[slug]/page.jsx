import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { CTA } from "@/components/CTA";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default function ServiceDetailsPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <>
      <section className="py-14">
        <div className="container">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-800">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-800">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{service.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {service.title}
              </h1>
              <p className="mt-3 text-slate-600">{service.short}</p>

              <div className="mt-8 space-y-4">
                {service.description.map((p) => (
                  <p key={p} className="text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-brand-800">What we can help with</div>
                <ul className="mt-4 grid gap-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-900 shadow-soft hover:opacity-95"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-brand-100"
                >
                  Back to Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
                <div className="relative h-72 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-slate-900">Fast inquiry checklist</div>
                  <div className="mt-3 space-y-2 text-sm text-slate-600">
                    <div>• Product specification / brand</div>
                    <div>• Quantity</div>
                    <div>• Destination</div>
                    <div>• Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
