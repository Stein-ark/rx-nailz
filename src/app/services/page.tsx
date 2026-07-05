import type { Metadata } from "next";
import { TbArrowUpRight, TbPlus } from "react-icons/tb";
import { SERVICES, SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "The Menu — Rx Nailz",
  description: "Full nail sets, gel manicures, nail care and refills at Rx Nailz, Brampton. Your prescription, filled fresh.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="relative overflow-hidden px-6 pt-36 pb-14 lg:px-10 lg:pt-44">
        <div aria-hidden className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-mint-soft opacity-60 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 mono-label text-[0.65rem] text-mint-deep">
              <TbPlus strokeWidth={3} /> The Menu
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-6xl font-bold leading-[0.98] text-ink">
              Your full list of prescriptions.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
              Every treatment is filled fresh to your exact needs. Prices start
              from the figures below; final dosage confirmed in-studio.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 70} as="article">
              <div className="grid gap-6 rounded-2xl border border-mint/15 bg-white p-8 shadow-rx md:grid-cols-[1fr_auto] md:items-center lg:p-10">
                <div>
                  <span className="mono-label text-[0.6rem] text-cross">{service.rx}</span>
                  <div className="mt-1 flex flex-wrap items-baseline gap-4">
                    <h2 className="font-display text-3xl font-bold text-ink">{service.name}</h2>
                    <span className="whitespace-nowrap rounded-full bg-mint-soft px-3 py-1 mono-label text-[0.6rem] text-mint-deep">
                      from ${service.from}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">{service.blurb}</p>
                  <p className="mt-4 inline-flex items-center gap-2 mono-label text-[0.6rem] text-slate">
                    <TbPlus strokeWidth={3} className="text-mint" /> Dosage: {service.dosage}
                  </p>
                </div>
                <a
                  href={SITE.fresha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Fill it
                  <TbArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
