import { useEffect, useState } from "react";

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: { url: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  const img = index === null ? undefined : images[index];
  if (!mounted || index === null || !img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-5 top-5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground"
      >
        Close
      </button>
      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        className="absolute left-3 rounded-full border border-border bg-card/70 px-4 py-3 text-lg sm:left-8"
      >
        ‹
      </button>
      <img
        src={img.url}
        alt={img.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[82vh] w-auto max-w-full rounded-3xl object-contain shadow-glow"
      />
      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        className="absolute right-3 rounded-full border border-border bg-card/70 px-4 py-3 text-lg sm:right-8"
      >
        ›
      </button>
    </div>
  );
}
