import { services } from "@/data/services";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
