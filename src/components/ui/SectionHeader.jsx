import HeartBullet from "../decor/HeartBullet.jsx";
import Button from "./Button.jsx";

export default function SectionHeader({ eyebrow, title, accent, subtitle, action }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow"><HeartBullet /> {eyebrow}</p>}
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {title} {accent && <span className="accent-italic">{accent}</span>}
        </h2>
        {subtitle && <p className="mt-2 max-w-md text-ink-soft">{subtitle}</p>}
      </div>
      {action && <Button to={action.to} variant="secondary">{action.label}</Button>}
    </div>
  );
}
