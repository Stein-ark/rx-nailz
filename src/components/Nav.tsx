"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu2, TbX, TbPlus } from "react-icons/tb";
import { NAV_LINKS, SITE } from "@/lib/site";

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2 leading-none">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-cross text-white">
        <TbPlus className="text-lg" strokeWidth={3} />
      </span>
      <span className={`font-display font-bold tracking-tight text-ink ${compact ? "text-lg" : "text-xl"}`}>
        Rx Nailz
      </span>
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-mint/15 bg-paper/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="Rx Nailz — home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mono-label text-[0.7rem] transition-colors ${
                  active ? "text-mint-deep" : "text-slate hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SITE.fresha}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-mint px-6 py-2.5 mono-label text-[0.7rem] text-white transition-colors hover:bg-mint-deep"
          >
            Book
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="text-ink md:hidden" aria-label="Open menu">
          <TbMenu2 className="text-2xl" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`fixed right-0 top-0 flex h-dvh w-[84%] max-w-xs flex-col bg-white shadow-rx transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-mint/15 px-6">
            <Logo compact />
            <button onClick={() => setOpen(false)} className="text-slate hover:text-ink" aria-label="Close menu">
              <TbX className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-mint/10 py-5 font-display text-2xl font-bold text-ink transition-colors hover:text-mint-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-6">
            <a
              href={SITE.fresha}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-mint px-6 py-4 mono-label text-[0.7rem] text-white"
            >
              Book on Fresha
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
