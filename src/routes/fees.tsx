import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { TiltCard, TiltLayer, Reveal3D } from "@/components/Motion3D";
import { Check } from "lucide-react";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees & Charges — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Transparent fees for full day, half day and additional sessions at Learning World Montessori, Croydon. Funded places available.",
      },
      { property: "og:title", content: "Fees & Charges — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Transparent Montessori nursery fees in Croydon. Full day, half day and additional sessions. Funded places available.",
      },
    ],
  }),
  component: FeesPage,
});

// PLACEHOLDER FEES — replace amounts with the official figures.
const tiers = [
  {
    name: "Half Day Session",
    price: "£—",
    cadence: "per session",
    color: "bg-gradient-blue",
    accent: "text-primary",
    features: [
      "Morning or afternoon",
      "Includes home-made snack",
      "Indoor & outdoor play",
      "Settling-in plan",
    ],
  },
  {
    name: "Full Day Session",
    price: "£—",
    cadence: "per day",
    color: "bg-gradient-coral",
    accent: "text-[oklch(0.74_0.18_35)]",
    featured: true,
    features: [
      "Full Montessori curriculum",
      "Home-made breakfast, lunch & tea",
      "Outdoor clubs near Lloyd Park",
      "Music, yoga & art activities",
    ],
  },
  {
    name: "Funded Hours",
    price: "Funded",
    cadence: "subject to eligibility",
    color: "bg-gradient-green",
    accent: "text-[oklch(0.55_0.15_155)]",
    features: [
      "15 / 30 hour government funding",
      "Tax-Free Childcare accepted",
      "Flexible session days",
      "Ask us about eligibility",
    ],
  },
];

const extras = [
  ["Registration Fee", "£—"],
  ["Refundable Deposit", "£—"],
  ["Late Pickup", "£— per 15 min"],
  ["Additional Hour", "£—"],
];

function FeesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Fees & Charges"
        title="Simple, transparent fees"
        subtitle="Choose the session that works best for your family. Funded places and Tax-Free Childcare are accepted."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-3 gap-6" style={{ perspective: 1300 }}>
        {tiers.map((t, i) => (
          <Reveal3D key={t.name} delay={i * 0.1}>
            <TiltCard
              intensity={t.featured ? 6 : 9}
              scale={t.featured ? 1.04 : 1.03}
              className={`relative h-full rounded-3xl bg-card p-8 shadow-soft ${
                t.featured ? "ring-2 ring-[oklch(0.74_0.18_35)] md:scale-[1.03]" : ""
              }`}
            >
              {t.featured && (
                <TiltLayer depth={50}>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-coral px-4 py-1 text-xs font-semibold text-white shadow-coral">
                    Most Popular
                  </span>
                </TiltLayer>
              )}
              <TiltLayer depth={25}>
                <div
                  className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${t.color} text-white shadow-glow`}
                >
                  <Check size={20} />
                </div>
              </TiltLayer>
              <TiltLayer depth={40}>
                <h3 className="mt-5 text-center font-display text-xl font-semibold">
                  {t.name}
                </h3>
                <div className="mt-4 text-center">
                  <span className={`font-display text-4xl font-bold ${t.accent}`}>
                    {t.price}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">/ {t.cadence}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-foreground/85">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                        <Check size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-foreground/90 px-5 py-3 text-sm font-semibold text-background hover:bg-foreground press transition"
                >
                  Enquire
                </Link>
              </TiltLayer>
            </TiltCard>
          </Reveal3D>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 reveal">
        <div className="rounded-3xl bg-secondary/70 p-8">
          <h3 className="font-display text-xl font-semibold">Additional charges</h3>
          <div className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {extras.map(([label, price]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-border/60 pb-3"
              >
                <span className="text-sm text-foreground/85">{label}</span>
                <span className="font-display font-semibold text-primary">{price}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Fees shown are placeholders awaiting confirmation from the nursery. Please
            contact us for the latest official pricing.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
