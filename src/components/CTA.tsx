import { TbArrowUpRight, TbPlus } from "react-icons/tb";
import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="px-6 pb-24 lg:px-10">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-mint-deep px-8 py-16 text-center shadow-rx lg:px-16 lg:py-20">
          <div aria-hidden className="pointer-events-none absolute -top-16 -left-8 h-64 w-64 rounded-full bg-mint opacity-40 blur-3xl" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 mono-label text-[0.65rem] text-mint-soft">
              <TbPlus strokeWidth={3} /> {SITE.tagline}
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Time for a refill?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-mint-soft">
              Booking takes 60 seconds on Fresha. Don&apos;t skip a dose —
              recommended every three weeks.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITE.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-mint-deep transition-transform hover:-translate-y-0.5"
              >
                Book on Fresha
                <TbArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="mono-label text-[0.6rem] text-mint-soft">{SITE.address}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
