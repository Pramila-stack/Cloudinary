import { useState } from "react";
import AdornedImage from "../decor/AdornedImage.jsx";

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <AdornedImage src={images[active]} alt={alt} bow="pink" ratio="4/5" />
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`w-20 flex-none rounded-xl ${i === active ? "ring-2 ring-magenta" : ""}`}
            >
              <AdornedImage src={src} alt={`${alt} view ${i + 1}`} lily={false} bow={null} ratio="1/1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
