import { TESTIMONIALS } from "../../data/testimonials.js";
import HeartBullet from "../decor/HeartBullet.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

export default function Testimonials() {
  return (
    <section className="container-boutique py-16">
      <SectionHeader eyebrow="Loved by everyone" title="Soft words from" accent="soft girls" />
      <div className="grid gap-6 sm:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.id} className="rounded-3xl bg-rose-soft p-6">
            <HeartBullet />
            <blockquote className="mt-3 font-display text-lg italic text-ink">"{t.quote}"</blockquote>
            <figcaption className="mt-4 text-sm text-ink-soft">{t.name} · {t.handle}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
