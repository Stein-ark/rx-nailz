// Real photos from /public — Rx Nailz's own work.

export const HERO = {
  src: "/hero.jpg",
  alt: "Editorial portrait with pink bejewelled cross-charm nails",
};

export const ABOUT_PORTRAIT = {
  src: "/r1.jpg",
  alt: "Editorial portrait with green and silver cross-charm nails",
};

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  rx: string;
  span?: string;
};

export const GALLERY: GalleryImage[] = [
  { src: "/r4.jpg", alt: "Pink and orange chrome coffin nails", label: "Pink Formula", rx: "RX-01", span: "sm:row-span-2" },
  { src: "/r2.jpg", alt: "Yellow marble stiletto set with gems", label: "Lemon Swirl", rx: "RX-02" },
  { src: "/r5.jpg", alt: "Neon green and blue swirl long set", label: "Neon Dose", rx: "RX-03" },
  { src: "/hero.jpg", alt: "Pink bejewelled cross-charm nails", label: "The Cover", rx: "RX-04", span: "sm:row-span-2" },
  { src: "/r3.jpg", alt: "Golden swirl stiletto set with rhinestones", label: "Golden Swirl", rx: "RX-05" },
  { src: "/r1.jpg", alt: "Green and silver cross-charm editorial nails", label: "The Edit", rx: "RX-06" },
];
