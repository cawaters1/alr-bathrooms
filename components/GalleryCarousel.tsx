"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  location: string;
  detail?: string;
}

interface Props {
  images: CarouselImage[];
  showCaptions?: boolean;
}

export default function GalleryCarousel({ images, showCaptions = true }: Props) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const dragging = useRef(false);

  const prev = useCallback(() => { setCurrent((i) => (i - 1 + images.length) % images.length); }, [images.length]);
  const next = useCallback(() => { setCurrent((i) => (i + 1) % images.length); }, [images.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    dragging.current = false;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      deltaX > 0 ? next() : prev();
    }
  };

  return (
    <div className="w-full select-none">
      {/* Square image container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient overlay for caption */}
        {showCaptions && (
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand/80 to-transparent z-10 pointer-events-none" />
        )}

        {/* Caption */}
        {showCaptions && (
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <div className="text-[10px] text-[#C9A97A] font-bold tracking-widest uppercase mb-0.5">
              {images[current].location}
            </div>
            <div className="text-white font-black text-base leading-tight">
              {images[current].title}
            </div>
            {images[current].detail && (
              <div className="text-white/60 text-xs mt-0.5 hidden sm:block">
                {images[current].detail}
              </div>
            )}
          </div>
        )}

        {/* Arrow buttons — desktop */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-brand/70 hover:bg-brand flex items-center justify-center text-white transition-colors hidden sm:flex"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-brand/70 hover:bg-brand flex items-center justify-center text-white transition-colors hidden sm:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              background: i === current ? "#C9A97A" : "#EDEAE3",
              borderRadius: "3px",
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-2 text-xs text-[#8B8FA0] font-medium tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
}
