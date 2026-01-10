import { slugify } from "@/lib/slug";

export const services = [
  {
    title: "Cosmetics and skin care",
    short: "Trusted sourcing and distribution of authentic beauty products.",
    image: "/images/cosmetics.jpg",
    thumb: "/images/thumbs/cosmetics-thumb.jpg",
    description: [
      "We help businesses source and supply quality cosmetics and skincare items with consistent availability.",
      "From product selection to delivery coordination, we focus on reliability and on-time shipments.",
    ],
    bullets: [
      "Bulk sourcing & supplier coordination",
      "Quality checks & authenticity support",
      "Export/import documentation assistance (as applicable)",
    ],
  },
  {
    title: "Machine spare parts",
    short: "Specification-first sourcing for industrial and machine parts.",
    image: "/images/spares.jpg",
    thumb: "/images/thumbs/spares-thumb.jpg",
    description: [
      "We support procurement of machine spare parts based on exact specifications and required standards.",
      "Share part numbers, photos, or drawings — we coordinate sourcing and shipment planning.",
    ],
    bullets: [
      "Part number & spec verification",
      "Supplier comparison & lead-time confirmation",
      "Packing and shipment coordination",
    ],
  },
  {
    title: "Electronics and computer components",
    short: "Reliable sourcing of components and accessories for tech supply needs.",
    image: "/images/electronics.jpg",
    thumb: "/images/thumbs/electronics-thumb.jpg",
    description: [
      "We help businesses source electronics components and computer accessories with transparent timelines.",
      "We prioritize reputable sourcing and secure packaging for safe deliveries.",
    ],
    bullets: [
      "Component sourcing & availability checks",
      "Secure packaging coordination",
      "Flexible order quantities (subject to availability)",
    ],
  },
  {
    title: "Chemical",
    short: "Trading support for industrial and commercial chemicals.",
    image: "/images/chemical.jpg",
    thumb: "/images/thumbs/chemical-thumb.jpg",
    description: [
      "We assist with the sourcing and trading of chemicals with attention to documentation and destination requirements.",
      "Share your product requirements and destination to get a fast quotation and shipping plan.",
    ],
    bullets: [
      "Documentation support (as applicable)",
      "Packaging & shipment coordination",
      "Destination-based compliance checklist",
    ],
  },
].map((s) => ({ ...s, slug: slugify(s.title) }));
