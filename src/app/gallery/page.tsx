import type { Metadata } from "next";
import { GALLERY } from "@/lib/images";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Results — Rx Nailz",
  description: "Clinically proven cute. Recent nail sets and gel work at Rx Nailz, Brampton.",
};

export default function GalleryPage() {
  return (
    <>
      <header className="relative overflow-hidden px-6 pt-36 pb-12 lg:px-10 lg:pt-44">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-8 h-80 w-80 rounded-full bg-mint-soft opacity-60 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="mono-label text-[0.65rem] text-mint-deep">Results</p>
            <h1 className="mt-4 max-w-3xl font-display text-6xl font-bold leading-[0.98] text-ink">
              Clinically proven cute.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
              Placeholder imagery for now — real results from Rx Nailz are on their way to this chart.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 70} className={img.span ?? ""}>
              <figure className="group relative h-full min-h-56 overflow-hidden rounded-2xl border-2 border-mint/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/70 to-transparent px-4 pb-3 pt-8 text-white">
                  <span className="font-display text-lg font-bold">{img.label}</span>
                  <span className="mono-label text-[0.55rem] opacity-80">{img.rx}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
