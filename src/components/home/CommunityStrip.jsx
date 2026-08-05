import SectionHeader from "../ui/SectionHeader.jsx";
import AdornedImage from "../decor/AdornedImage.jsx";

const LOOKS = [
  "/images/products/dress2.png",
  "/images/products/top1.png",
  "/images/products/skirt2.png",
  "/images/products/accessory3.png",
  "/images/products/dress4.png",
  "/images/products/top4.png",
];

export default function CommunityStrip() {
  return (
    <section className="container-boutique py-16">
      <SectionHeader eyebrow="@cloudine.boutique" title="As seen on" accent="Pinterest" subtitle="Tag us to be featured — real girls, real softness." />
      <div className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {LOOKS.map((src, i) => (
          <div key={src} className="w-44 flex-none">
            <AdornedImage src={src} alt={`Community look ${i + 1}`} ratio="9/16" bow={i % 2 ? "pink" : "sage"} lily={i % 3 === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
