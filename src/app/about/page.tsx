import type { Metadata } from "next";
import { TbPlus, TbClock, TbMoodSmile } from "react-icons/tb";
import { SITE } from "@/lib/site";
import { ABOUT_PORTRAIT } from "@/lib/images";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About — Rx Nailz",
  description: "The story behind Rx Nailz — Brampton's feel-good nail pharmacy. Your prescription for perfect nails.",
};

const DIRECTIONS = [
  { icon: TbPlus, title: "Fresh prescriptions", body: "Every set is filled to your exact shape, length and finish. No two prescriptions alike." },
  { icon: TbClock, title: "Dosage: every 3 weeks", body: "Keep your set current with regular refills — the recommended course for lasting results." },
  { icon: TbMoodSmile, title: "Zero side effects", body: "Just a clean, glossy confidence boost. 5.0 on Fresha and no bad reactions reported." },
];

export default function AboutPage() {
  return (
    <>
      <header className="relative overflow-hidden px-6 pt-36 pb-16 lg:px-10 lg:pt-44">
        <div aria-hidden className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-mint-soft opacity-60 blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 mono-label text-[0.65rem] text-mint-deep">
              <TbPlus strokeWidth={3} /> About the Pharmacy
            </p>
            <h1 className="mt-4 font-display text-6xl font-bold leading-[0.98] text-ink">
              The feel-good nail pharmacy.
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
              <p>
                Rx Nailz started with a simple diagnosis: everyone deserves nails
                that make them feel put-together. So we turned the nail appointment
                into a prescription — clean, precise, and guaranteed to lift your mood.
              </p>
              <p>
                From full custom sets to glossy gel and restorative nail care, every
                treatment is filled fresh in our Brampton studio. Refills are always
                available — because good nails aren&apos;t a one-time dose.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 mono-label text-[0.6rem] text-slate">
              <span>{SITE.rating} · {SITE.reviewCount} reviews</span>
              <span>{SITE.location}</span>
              <span>By appointment</span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-rx">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ABOUT_PORTRAIT.src} alt={ABOUT_PORTRAIT.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </header>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {DIRECTIONS.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 90} as="article">
                <div className="h-full rounded-2xl rx-label p-8 shadow-rx">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mint-soft text-xl text-mint-deep">
                    <Icon strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{d.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reviews />
      <CTA />
    </>
  );
}
