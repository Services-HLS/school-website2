import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/programs", label: "Programs" },
  { to: "/fees", label: "Fees" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_-18px_oklch(0.40_0.10_250/0.35)] border-b border-white/40"
          : "bg-background/30 backdrop-blur-md"
      }`}
      style={{ WebkitBackdropFilter: "blur(20px) saturate(140%)" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-blue text-primary-foreground font-display font-bold shadow-glow">
            L
          </span>
          <span className="font-display font-semibold tracking-tight leading-tight">
            <span className="block text-[0.95rem] md:text-base text-foreground">
              Learning World
            </span>
            <span className="block text-[0.7rem] md:text-xs text-primary -mt-0.5">
              Montessori · Croydon
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary hover:bg-secondary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-coral px-5 py-2.5 text-sm font-semibold text-white shadow-coral hover-lift press"
          >
            Enquire Now
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 pb-5 pt-1 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/60">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
