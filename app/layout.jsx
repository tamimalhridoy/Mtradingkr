import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1E46",
};

export const metadata = {

  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    "M Trading is a global trading partner providing sourcing and supply support for cosmetics, machine spare parts, electronics components, and chemicals.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
  canonical: "/",
},
twitter: {
  card: "summary_large_image",
  title: `${site.name} — ${site.tagline}`,
  description: "Smart sourcing. Reliable delivery. Long-term partnerships.",
  images: ["/hero.png"],
},
openGraph: {

    title: `${site.name} — ${site.tagline}`,
    description:
      "Smart sourcing. Reliable delivery. Long-term partnerships.",
    type: "website",
    images: [{ url: "/opengraph-image" }],
  },
};

export default function RootLayout({children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
