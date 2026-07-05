import { TbStarFilled, TbPlus } from "react-icons/tb";
import { REVIEWS, SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="mono-label text-[0.65rem] text-mint-deep">Patient Notes</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {SITE.rating} rating · zero side effects.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.quote} delay={i * 90} as="article">
              <figure className="flex h-full flex-col rounded-2xl rx-label p-8 shadow-rx">
                <TbPlus className="text-2xl text-cross" strokeWidth={3} />
                <blockquote className="mt-4 flex-1 font-display text-xl font-semibold leading-relaxed text-ink">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-mint">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <TbStarFilled key={s} className="text-sm" />
                  ))}
                </div>
                <figcaption className="mt-3 mono-label text-[0.6rem] text-slate">
                  {review.author} · {review.meta}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
