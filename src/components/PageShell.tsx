import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Reveal3D } from "@/components/Motion3D";

export function PageShell({ children }: { children: React.ReactNode }) {
  useReveal();
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.985, filter: "blur(6px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform, opacity, filter" }}
        className="pt-20"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ perspective: 1200 }}>
      <div className="absolute inset-0 bg-gradient-hero" />
      <motion.div
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[oklch(0.88_0.14_90/0.35)] blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[oklch(0.78_0.15_155/0.25)] blur-3xl"
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-5xl px-5 py-20 md:py-28 text-center">
        {eyebrow && (
          <Reveal3D>
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
              {eyebrow}
            </span>
          </Reveal3D>
        )}
        <Reveal3D delay={0.08}>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
        </Reveal3D>
        {subtitle && (
          <Reveal3D delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
              {subtitle}
            </p>
          </Reveal3D>
        )}
      </div>
    </section>
  );
}
