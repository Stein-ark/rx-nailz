import Link from "next/link";
import { TbArrowUpRight, TbPlus } from "react-icons/tb";
import { SERVICES } from "@/lib/site";
import Reveal from "./Reveal";

export default function ServicesPreview() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="mono-label text-[0.65rem] text-mint-deep">The Menu</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Prescriptions, filled fresh.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 80} as="article">
              <div className="group h-full rounded-2xl border border-mint/15 bg-white p-8 shadow-rx transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="mono-label text-[0.6rem] text-cross">{service.rx}</span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-ink">{service.name}</h3>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-mint-soft px-3 py-1 mono-label text-[0.6rem] text-mint-deep">
                    from ${service.from}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate">{service.blurb}</p>
                <p className="mt-5 inline-flex items-center gap-2 mono-label text-[0.6rem] text-slate">
                  <TbPlus strokeWidth={3} className="text-mint" /> Dosage: {service.dosage}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Link href="/services" className="group mt-10 inline-flex items-center gap-2 mono-label text-[0.7rem] text-mint-deep">
            See full menu &amp; pricing
            <TbArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
