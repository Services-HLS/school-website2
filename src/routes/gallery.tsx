import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { galleryClassroom, galleryOutdoor, galleryFun } from "@/lib/content";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Photos from Learning World Montessori — classroom learning, outdoor clubs and extra-curricular fun activities.",
      },
      { property: "og:title", content: "Gallery — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "A glimpse into life at our Croydon Montessori nursery — classroom, outdoor and fun activities.",
      },
    ],
  }),
  component: GalleryPage,
});

const tabs = [
  { key: "class", label: "Classroom / Learning", images: galleryClassroom },
  { key: "outdoor", label: "Outdoor / Clubs", images: galleryOutdoor },
  { key: "fun", label: "Extra Curricular / Fun", images: galleryFun },
] as const;

function GalleryPage() {
  const [active, setActive] = useState<typeof tabs[number]["key"]>("class");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title="Life at Learning World Montessori"
        subtitle="A glimpse into our classrooms, outdoor adventures and joyful celebrations."
      />

      <section className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition press ${
                active === t.key
                  ? "bg-gradient-blue text-white shadow-glow"
                  : "bg-secondary text-foreground/75 hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 animate-fade-in pb-16"
        >
          {current.images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setLightbox(src)}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-secondary"
            >
              <img
                src={src}
                alt={`${current.label} — Learning World Montessori`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 backdrop-blur-sm p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-lift animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </PageShell>
  );
}
