import Link from "next/link";
import { TbBrandInstagram, TbPlus, TbMapPin } from "react-icons/tb";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-mint/15 bg-white px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-cross text-white">
              <TbPlus className="text-lg" strokeWidth={3} />
            </span>
            Rx Nailz
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
            Your prescription for perfect nails. Sets, gel &amp; nail care in
            Brampton. Refills available — dosage: {SITE.dosage.toLowerCase()}.
          </p>
        </div>

        <div>
          <p className="mono-label text-[0.65rem] text-mint-deep">Directory</p>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label text-[0.65rem] text-mint-deep">Pharmacy</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            <li>
              <a href={SITE.fresha} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                Book on Fresha
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                <TbBrandInstagram /> {SITE.instagramHandle}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <TbMapPin className="mt-0.5 shrink-0" /> {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-mint/15 pt-8 text-xs text-slate sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="mono-label">{SITE.location} · By appointment</p>
      </div>
    </footer>
  );
}
