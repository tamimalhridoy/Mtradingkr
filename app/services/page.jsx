import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata = {
  title: "Services",
  description: "Explore M Trading services across multiple product categories.",
};

export default function ServicesPage() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading
          title="Services"
          subtitle="Choose a category to see details and request a quotation."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
