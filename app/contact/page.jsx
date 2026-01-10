import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact M Trading to request a quotation.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            title="Contact"
            subtitle="Share your requirements. We’ll reply with availability, timeline, and a quotation plan."
          />
          <div className="mt-6 grid gap-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="font-semibold text-slate-900">Email</div>
              <div className="mt-1">{site.email}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="font-semibold text-slate-900">Phone</div>
              <div className="mt-1">{site.phone}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="font-semibold text-slate-900">Address</div>
              <div className="mt-1">{site.address}</div>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Update contact details in <code className="rounded bg-slate-100 px-1.5 py-0.5">lib/site.ts</code>.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
