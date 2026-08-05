import { useState } from "react";
import Button from "../ui/Button.jsx";
import HeartBullet from "../decor/HeartBullet.jsx";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="container-boutique pb-16">
      <div className="rounded-3xl bg-cream/80 px-8 py-14 text-center sm:px-16">
        <p className="eyebrow justify-center"><HeartBullet /> stay soft with us</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">join the soft-girl list</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">Early access to drops, private sales, and styling notes. No spam, just pretty things.</p>
        {done ? (
          <p className="mt-6 font-display text-xl text-magenta">you're on the list ♡</p>
        ) : (
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input type="email" required placeholder="your@email.com" aria-label="Email address"
              className="w-full rounded-full border border-sage-deep/40 bg-white px-5 py-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta" />
            <Button type="submit" className="flex-none">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  );
}
