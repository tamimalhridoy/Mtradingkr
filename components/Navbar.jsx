import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-800"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-700"
          >
            Get a Quote
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-1 block rounded-lg bg-brand-800 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-brand-700"
            >
              Get a Quote
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
