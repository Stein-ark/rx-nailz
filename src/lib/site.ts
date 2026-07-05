// Central config for Rx Nailz. Cheeky pharmacy copy throughout.
export const SITE = {
  name: "Rx Nailz",
  owner: "Rx Nailz",
  tagline: "Your Prescription for Perfect Nails",
  fresha: "https://www.fresha.com/", // TODO: replace with exact Fresha booking URL
  instagram: "https://www.instagram.com/",
  instagramHandle: "@rxnailz",
  rating: "5.0",
  reviewCount: "8",
  location: "Brampton, ON",
  address: "25 Naperton Drive, Brampton, ON",
  area: "Naperton Dr · Brampton",
  dosage: "Every 3 weeks",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Menu", href: "/services" },
  { label: "Results", href: "/gallery" },
  { label: "About", href: "/about" },
] as const;

export type Service = {
  rx: string;
  name: string;
  blurb: string;
  dosage: string;
  from: string;
};

export const SERVICES: Service[] = [
  {
    rx: "RX-01",
    name: "Full Nail Set",
    blurb:
      "The complete treatment. A fresh, custom set prescribed to your exact shape, length and finish. Fast-acting confidence.",
    dosage: "Every 3–4 weeks",
    from: "55",
  },
  {
    rx: "RX-02",
    name: "Gel Manicure",
    blurb:
      "Long-lasting gel in the shade of your choosing. Chip-resistant, high-shine, clinically glossy for weeks.",
    dosage: "Every 3 weeks",
    from: "40",
  },
  {
    rx: "RX-03",
    name: "Nail Care & Repair",
    blurb:
      "Restorative treatment for tired nails — shaping, cuticle care and strengthening. The preventative dose.",
    dosage: "As needed",
    from: "30",
  },
  {
    rx: "RX-04",
    name: "Refill",
    blurb:
      "Top up your existing set and keep the prescription current. Refills available — don't skip a dose.",
    dosage: "Every 3 weeks",
    from: "45",
  },
];

export type Review = {
  quote: string;
  author: string;
  meta: string;
};

export const REVIEWS: Review[] = [
  {
    quote: "Instant mood boost. My nails have never looked better — consider me a repeat patient.",
    author: "Fresha client",
    meta: "Full Set",
  },
  {
    quote: "Clean, precise and painless. The prescription for perfect nails is real.",
    author: "Fresha client",
    meta: "Gel Manicure",
  },
  {
    quote: "5 stars, no side effects. I'll be booking my refill immediately.",
    author: "Fresha client",
    meta: "Refill",
  },
];
