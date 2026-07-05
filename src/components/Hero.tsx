import Link from "next/link";
import { TbArrowUpRight, TbStarFilled, TbPlus } from "react-icons/tb";
import { SITE } from "@/lib/site";
import { HERO } from "@/lib/images";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-mint-soft opacity-60 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full rx-label px-4 py-1.5 mono-label text-[0.65rem] text-mint-deep">
              <TbPlus strokeWidth={3} /> {SITE.tagline}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-6xl font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl">
              Perfect nails,
              <br />
              <span className="text-mint">prescribed.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate">
              Rx Nailz is Brampton&apos;s feel-good nail pharmacy. Custom sets, glossy
              gel and restorative nail care — one appointment and your confidence
              is fully refilled.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={SITE.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 text-sm font-semibold text-white shadow-rx transition-transform hover:-translate-y-0.5"
              >
                Fill Your Prescription
                <TbArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-mint/40 px-7 py-3.5 text-sm font-semibold text-mint-deep transition-colors hover:border-mint"
              >
                View the Menu
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-mint/15 pt-7">
              <div>
                <div className="flex items-center gap-1 text-mint">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TbStarFilled key={i} className="text-sm" />
                  ))}
                </div>
                <p className="mt-1.5 mono-label text-[0.6rem] text-slate">
                  {SITE.rating} · {SITE.reviewCount} reviews
                </p>
              </div>
              <div className="h-9 w-px bg-mint/20" />
              <div>
                <p className="mono-label text-[0.6rem] text-slate">Dosage</p>
                <p className="font-display text-lg font-bold text-ink">{SITE.dosage}</p>
              </div>
              <div className="h-9 w-px bg-mint/20" />
              <div>
                <p className="mono-label text-[0.6rem] text-slate">Refills</p>
                <p className="font-display text-lg font-bold text-ink">Available</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-rx">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO.src} alt={HERO.alt} className="h-full w-full object-cover" />
          </div>
          {/* Prescription sticker */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-lg rx-label px-5 py-3 shadow-rx sm:block">
            <p className="mono-label text-[0.55rem] text-mint-deep">Rx Nailz · take as directed</p>
            <p className="font-display text-base font-bold text-ink">Dosage: {SITE.dosage}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
