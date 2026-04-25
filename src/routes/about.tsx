import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { hugImage } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Learn about Learning World Montessori — a vibrant, OFSTED registered Montessori nursery in Croydon following the Montessori Method of Education.",
      },
      { property: "og:title", content: "About — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Our child-centred Montessori nursery in Croydon nurtures independent, confident learners with the Montessori Method.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About us"
        title="Come Home to Learning World Montessori"
        subtitle="An OFSTED registered Montessori in Croydon, UK"
      />

      <section className="mx-auto max-w-5xl px-5 py-16 space-y-6 text-foreground/90 leading-relaxed">
        <p className="reveal">
          Learning World Montessori is a vibrant childcare setting where children get
          plenty of opportunity towards effective learning and growth. Our curriculum
          helps them in becoming independent confident individuals, building positive
          relationships and developing sincere emotional security. We follow Montessori
          ethos and philosphy while taking influences from the EYFS methodology as well.
        </p>
        <p className="reveal reveal-delay-1">
          We offer a variety of clubs which help children develop early interest in
          physical activities and outdoor learning. Our nursery is located near the
          roundabout on Coombe Road, where the park hill road meets the Coombe road. It
          is also in the vicinity of the expansive Lloyd Park which allows children to
          enjoy and learn from outdoor activities.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="reveal order-2 lg:order-1">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Our Approach
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
            The Montessori Method of Education
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            <em>The Montessori Method of Education,</em> developed by{" "}
            <em>Maria Montessori,</em> is a child-centered educational approach, where
            children proceed by identifying learning areas according to their interests.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dr. Maria emphasizes that the early formative years lay the building blocks
            for developing the personality that a child will eventually grow into. Hence,
            the lessons are hands-on and active.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Classrooms are prepared in advance based on observations of the students'
            individual needs. We understand that the child's self esteem comes from an
            internal sense of pride in his/her own accomplishments. Therefore, the
            child's work pace is honoured and encouraged. Teachers are guides to students
            on a one-on-one basis. Our approach towards childcare guides the children not
            just towards excellence in learning but also for life skills.
          </p>
        </div>
        <div className="reveal reveal-delay-1 relative order-1 lg:order-2">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-coral opacity-30 blur-2xl" />
          <img
            src={hugImage}
            alt="Children at Learning World Montessori"
            loading="lazy"
            className="relative w-full rounded-[2rem] object-cover aspect-[4/3] shadow-lift"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 text-center reveal">
        <p className="font-display text-2xl md:text-3xl font-medium leading-snug">
          “ I hear, I forget; <span className="text-primary">I see, I remember;</span>{" "}
          I experience, I understand. ”
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
          — Maria Montessori
        </p>
      </section>
    </PageShell>
  );
}
