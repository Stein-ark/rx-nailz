import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import { GALLERY } from "@/lib/images";
import Reveal from "./Reveal";

export default function GalleryPreview() {
  const preview = GALLERY.slice(0, 4);

  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono-label text-[0.65rem] text-mint-deep">Results</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Clinically proven cute.
            </h2>
          </div>
          <Link href="/gallery" className="group inline-flex items-center gap-2 mono-label text-[0.7rem] text-mint-deep">
            All results
            <TbArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {preview.map((img, i) => (
            <Reveal key={img.src} delay={i * 70}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-mint/10">
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
      </div>
    </section>
  );
}
