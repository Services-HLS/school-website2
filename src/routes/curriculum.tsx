import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { TiltCard, TiltLayer, Reveal3D } from "@/components/Motion3D";
import { BookOpen, Trees, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Our Montessori curriculum blends classroom learning, outdoor clubs and extra-curricular fun activities, influenced by the EYFS methodology.",
      },
      { property: "og:title", content: "Curriculum — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Classroom learning, outdoor clubs and extra-curricular activities at Learning World Montessori, Croydon.",
      },
    ],
  }),
  component: CurriculumPage,
});

const areas = [
  {
    icon: BookOpen,
    title: "Classroom / Learning Activities",
    color: "bg-gradient-blue",
    desc: "Hands-on Montessori materials guide children to explore practical life, sensorial work, language, mathematics and cultural studies at their own pace.",
  },
  {
    icon: Trees,
    title: "Outdoor / Club Activities",
    color: "bg-gradient-green",
    desc: "Daily outdoor play and clubs near the expansive Lloyd Park nurture early interest in physical activities and outdoor learning.",
  },
  {
    icon: Sparkles,
    title: "Extra Curricular / Fun Activities",
    color: "bg-gradient-coral",
    desc: "Music, yoga, art, celebrations and themed days that build confidence, creativity and lasting friendships.",
  },
];

function CurriculumPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Curriculum"
        title="A child-centred Montessori curriculum"
        subtitle="We follow Montessori ethos and philosphy while taking influences from the EYFS methodology as well."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
        {areas.map((a, i) => (
          <Reveal3D key={a.title} delay={i * 0.1}>
            <TiltCard intensity={9} scale={1.03} className="group h-full rounded-3xl bg-card p-7 shadow-soft">
              <TiltLayer depth={25}>
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${a.color} text-white shadow-glow group-hover:animate-wiggle`}
                >
                  <a.icon size={26} />
                </div>
              </TiltLayer>
              <TiltLayer depth={35}>
                <h3 className="mt-5 font-display text-xl font-semibold">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <Link
                  to="/gallery"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  See gallery →
                </Link>
              </TiltLayer>
            </TiltCard>
          </Reveal3D>
        ))}
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20 text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Lessons that are hands-on and active
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Classrooms are prepared in advance based on observations of the students'
            individual needs. We understand that the child's self esteem comes from an
            internal sense of pride in his/her own accomplishments. Therefore, the
            child's work pace is honoured and encouraged. Teachers are guides to students
            on a one-on-one basis.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
