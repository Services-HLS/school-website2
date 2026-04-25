import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { useReveal } from "@/hooks/useReveal";
import { TiltCard, TiltLayer, Reveal3D, Parallax, ParallaxImage, HeroTilt } from "@/components/Motion3D";
import heroImg from "@/assets/hero-classroom.jpg";
import { testimonials, hugImage, galleryClassroom, galleryOutdoor } from "@/lib/content";
import { ArrowRight, Heart, Apple, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const carouselImages = [
  heroImg,
  galleryClassroom[0],
  galleryOutdoor[1],
  galleryClassroom[2],
  galleryOutdoor[3],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learning World Montessori — OFSTED Registered Nursery in Croydon" },
      {
        name: "description",
        content:
          "A vibrant Montessori childcare setting in Croydon. Quality day care, OFSTED registered, home-made food and government funding available.",
      },
      { property: "og:title", content: "Learning World Montessori — Croydon" },
      {
        property: "og:description",
        content:
          "A vibrant Montessori childcare setting in Croydon. Quality day care, OFSTED registered, home-made food and government funding available.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: ShieldCheck, label: "Quality Day Care", color: "bg-gradient-blue" },
  { icon: Sparkles, label: "OFSTED Registered", color: "bg-gradient-coral" },
  { icon: Apple, label: "Home made Food", color: "bg-gradient-green" },
  { icon: Heart, label: "Funding Available", color: "bg-gradient-yellow" },
];

function HomePage() {
  useReveal();

  // Hero parallax: scrolling moves the image slower than the content.
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <PageShell>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[70vh]"
        style={{ perspective: 1400 }}
      >
        <BackgroundCarousel images={carouselImages} />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.66_0.15_250/0.55),oklch(0.78_0.15_155/0.30)_60%,transparent)]"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Floating depth blobs */}
        <motion.div
          className="absolute top-24 left-12 h-32 w-32 rounded-full bg-[oklch(0.88_0.14_90/0.45)] blur-2xl"
          animate={{ y: [0, -22, 0], x: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-16 h-40 w-40 rounded-full bg-[oklch(0.74_0.18_35/0.40)] blur-2xl"
          animate={{ y: [0, 18, 0], x: [0, -14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative mx-auto max-w-6xl px-5 pt-32 md:pt-44 pb-32"
        >
          <HeroTilt className="max-w-3xl" max={4}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block rounded-full bg-white/85 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary shadow-soft"
            >
              An OFSTED registered Montessori in Croydon, UK
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white"
            >
              Come Home to{" "}
              <span className="block bg-gradient-to-r from-[oklch(0.92_0.10_90)] to-white bg-clip-text text-transparent">
                Learning World Montessori
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-white/95"
            >
              A vibrant childcare setting where children get plenty of opportunity towards
              effective learning and growth — building independent, confident individuals
              with sincere emotional security.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-coral px-7 py-3.5 text-sm font-semibold text-white shadow-coral hover-lift press"
              >
                Enquire Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/curriculum"
                className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover-lift press"
              >
                Our Curriculum
              </Link>
            </motion.div>
          </HeroTilt>
        </motion.div>
      </section>

      {/* FEATURE BADGES */}
      <section className="mx-auto max-w-6xl px-5 -mt-12 relative z-10" style={{ perspective: 1200 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <Reveal3D key={f.label} delay={i * 0.08}>
              <TiltCard
                intensity={10}
                scale={1.04}
                className="rounded-2xl bg-card p-5 shadow-soft"
              >
                <TiltLayer depth={20}>
                  <div className={`grid h-11 w-11 place-items-center rounded-xl ${f.color} text-white`}>
                    <f.icon size={20} />
                  </div>
                </TiltLayer>
                <TiltLayer depth={30}>
                  <p className="mt-3 font-display font-semibold text-sm md:text-base">
                    {f.label}
                  </p>
                </TiltLayer>
              </TiltCard>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:py-28 text-center">
        <Reveal3D>
          <p className="font-display text-2xl md:text-4xl font-medium leading-snug text-foreground">
            “ I hear, I forget; <span className="text-primary">I see, I remember;</span>{" "}
            I experience, I understand. ”
          </p>
        </Reveal3D>
        <Reveal3D delay={0.1}>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            — Maria Montessori
          </p>
        </Reveal3D>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-6xl px-5 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal3D className="relative" rotateX={6}>
          <TiltCard intensity={6} scale={1.03}>
            <Parallax speed={0.25}>
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-yellow opacity-40 blur-2xl" />
              <ParallaxImage
                src={hugImage}
                alt="A loving moment at Learning World Montessori"
                speed={0.2}
                zoom={0.1}
                className="relative w-full rounded-[2rem] aspect-[4/3] shadow-lift"
              />
            </Parallax>
          </TiltCard>
        </Reveal3D>
        <Reveal3D delay={0.1}>
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
            internal sense of pride in his/her own accomplishments. Therefore, the child's
            work pace is honoured and encouraged. Teachers are guides to students on a
            one-on-one basis.
          </p>
        </Reveal3D>
      </section>

      {/* INTRO COPY */}
      <section className="relative bg-secondary/60 overflow-hidden">
        <Parallax speed={-0.4} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-[oklch(0.66_0.15_250/0.18)] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[oklch(0.78_0.15_155/0.18)] blur-3xl" />
        </Parallax>
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-20 text-center">
          <Reveal3D>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              A vibrant home for early learners
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Learning World Montessori is a vibrant childcare setting where children get
              plenty of opportunity towards effective learning and growth. Our curriculum
              helps them in becoming independent confident individuals, building positive
              relationships and developing sincere emotional security. We follow Montessori
              ethos and philosphy while taking influences from the EYFS methodology as well.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We offer a variety of clubs which help children develop early interest in
              physical activities and outdoor learning. Our nursery is located near the
              roundabout on Coombe Road, where the park hill road meets the Coombe road. It
              is also in the vicinity of the expansive Lloyd Park which allows children to
              enjoy and learn from outdoor activities.
            </p>
          </Reveal3D>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20" style={{ perspective: 1200 }}>
        <Reveal3D>
          <TiltCard intensity={5} scale={1.01} className="relative overflow-hidden rounded-[2rem] bg-gradient-blue p-10 md:p-16 text-white shadow-glow">
            <motion.div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/15 blur-2xl"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[oklch(0.88_0.14_90/0.35)] blur-2xl"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <TiltLayer depth={30} className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold">
                  Ready to visit our nursery?
                </h3>
                <p className="mt-3 text-white/90 max-w-xl">
                  Book a tour, ask about admissions or simply say hello. We'd love to meet
                  your family.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lift hover-lift press"
              >
                Enquire Now <ArrowRight size={16} />
              </Link>
            </TiltLayer>
          </TiltCard>
        </Reveal3D>
      </section>
    </PageShell>
  );
}

function BackgroundCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
      </AnimatePresence>
    </div>
  );
}

function TestimonialCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 text-center">
      <Reveal3D>
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
          Loved by parents
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
          Stories from our families
        </h2>
      </Reveal3D>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 16, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
        className="mt-10"
      >
        <Reveal3D delay={0.2}>
          <img
            src={t.avatar}
            alt={t.author}
            loading="lazy"
            className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-secondary shadow-soft"
          />
        </Reveal3D>
        <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-foreground/90 leading-relaxed">
          “{t.quote}”
        </p>
        <p className="mt-5 font-display font-semibold text-primary">— {t.author}</p>
      </motion.div>
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Show testimonial ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-8 bg-primary" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
