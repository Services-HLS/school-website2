import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/*  TiltCard — mouse-tracking 3D tilt with depth-shifted shadow & inner layers */
/* -------------------------------------------------------------------------- */

export function TiltCard({
  children,
  className = "",
  intensity = 8,
  scale = 1.02,
  style,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number; // max tilt in degrees
  scale?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);
  const shadowX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const shadowY = useTransform(sy, [-0.5, 0.5], [-12, 20]);
  const boxShadow = useTransform(
    [shadowX, shadowY] as never,
    ([sxv, syv]: number[]) =>
      `${sxv}px ${syv + 18}px 40px -16px oklch(0.40 0.10 250 / 0.30)`
  );

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      style={{
        rotateX,
        rotateY,
        boxShadow,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        willChange: "transform",
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Use inside <TiltCard> for inner elements that should sit on a higher Z-layer. */
export function TiltLayer({
  depth = 30,
  className = "",
  children,
  style,
}: {
  depth?: number;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reveal3D — scroll-triggered entrance with subtle 3D rotation              */
/* -------------------------------------------------------------------------- */

export function Reveal3D({
  children,
  delay = 0,
  y = 28,
  rotateX = 10,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  rotateX?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, rotateX }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200, willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Parallax — moves a child at a different speed than the scroll             */
/* -------------------------------------------------------------------------- */

export function Parallax({
  children,
  speed = 0.3, // -1..1, negative = moves opposite
  className = "",
  style,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80 * speed, -80 * speed]);
  return (
    <motion.div
      ref={ref}
      style={{ y, willChange: "transform", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ParallaxImage — image that zooms slightly + shifts on scroll              */
/* -------------------------------------------------------------------------- */

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.25,
  zoom = 0.08,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  zoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1 + zoom, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale, willChange: "transform" }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  HeroTilt — wraps hero content; tilts subtly with cursor + slow float      */
/* -------------------------------------------------------------------------- */

export function HeroTilt({
  children,
  className = "",
  max = 4,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 80, damping: 20, mass: 0.5 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  const onMove = (e: React.MouseEvent) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    x.set(e.clientX / w - 0.5);
    y.set(e.clientY / h - 0.5);
  };

  return (
    <div onMouseMove={onMove} className={className} style={{ perspective: 1400 }}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
