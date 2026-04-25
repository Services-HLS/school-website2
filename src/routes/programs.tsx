import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { TiltCard, TiltLayer, Reveal3D } from "@/components/Motion3D";
import { Baby, Sun, GraduationCap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Day care programs at Learning World Montessori — flexible sessions for toddlers and preschoolers, with funded places available.",
      },
      { property: "og:title", content: "Programs — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Flexible Montessori day care programs in Croydon — full day, half day, after-school clubs and funded places.",
      },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    icon: Baby,
    name: "Toddlers",
    age: "Ages 2 – 3",
    color: "bg-gradient-yellow",
    points: ["Practical life activities", "Sensorial exploration", "Settling-in plan", "Home-made meals"],
  },
  {
    icon: Sun,
    name: "Preschool",
    age: "Ages 3 – 4",
    color: "bg-gradient-blue",
    points: ["Language & early phonics", "Mathematics with Montessori materials", "Outdoor & Lloyd Park visits", "Music and yoga"],
  },
  {
    icon: GraduationCap,
    name: "School Ready",
    age: "Ages 4 – 5",
    color: "bg-gradient-green",
    points: ["Reading and writing", "Cultural studies", "Confidence & life skills", "EYFS-aligned learning"],
  },
  {
    icon: Sparkles,
    name: "Clubs & Extras",
    age: "All ages",
    color: "bg-gradient-coral",
    points: ["Tennis & sports", "Music club", "Art & craft", "Themed celebrations"],
  },
];

function ProgramsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Programs"
        title="Programs for every stage"
        subtitle="Flexible Montessori sessions designed to honour each child's pace and interests."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-2 gap-6" style={{ perspective: 1200 }}>
        {programs.map((p, i) => (
          <Reveal3D key={p.name} delay={(i % 4) * 0.08}>
            <TiltCard intensity={8} scale={1.025} className="h-full rounded-3xl bg-card p-7 shadow-soft">
              <TiltLayer depth={20} className="flex items-start gap-4">
                <div
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${p.color} text-white shadow-glow`}
                >
                  <p.icon size={26} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-primary font-medium">{p.age}</p>
                </div>
              </TiltLayer>
              <TiltLayer depth={32}>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </TiltLayer>
            </TiltCard>
          </Reveal3D>
        ))}
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center reveal">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Government funding available
          </h2>
          <p className="mt-4 text-muted-foreground">
            We accept eligible funded hours. Get in touch to learn more about how we can
            support your family.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
