import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { CTA } from "@/components/CTA";
import { Stats } from "@/components/Stats";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "M Trading",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  logo: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com") + "/logo.png",
  slogan: "Global Trading Partner",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@mtrading.com",
      availableLanguage: ["en", "bn"],
    },
  ],
};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="We focus on dependable sourcing, trading support, and shipment coordination across key categories."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-brand-100 hover:text-brand-800"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <Stats />

      <Industries />

      <Process />

      <FAQ />

      <CTA />
    </>
  );
}
