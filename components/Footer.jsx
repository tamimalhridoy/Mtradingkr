import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-slate-900">{site.name}</div>
          <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
          <p className="mt-4 text-sm text-slate-600">
            Reliable sourcing, trading, and shipment coordination — built for long-term partnerships.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Quick Links</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <div>{site.address}</div>
            <div>{site.phone}</div>
            <div>{site.email}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6">
        <div className="container flex flex-col items-start justify-between gap-2 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Designed with your brand colors.</div>
        </div>
      </div>
    </footer>
  );
}
