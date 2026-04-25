import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Heart } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-secondary/60 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div className="reveal">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-blue text-primary-foreground font-display font-bold">
              L
            </span>
            <div className="font-display font-semibold leading-tight">
              <div>Learning World</div>
              <div className="text-xs text-primary">Montessori · Croydon</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            An OFSTED registered Montessori nursery offering quality day care, home-made
            food and a child-centred curriculum near Lloyd Park, Croydon.
          </p>
        </div>

        <div className="reveal reveal-delay-1">
          <h4 className="font-display font-semibold">Explore</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Curriculum", "/curriculum"],
              ["Programs", "/programs"],
              ["Fees", "/fees"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to as string}
                  className="hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal reveal-delay-2">
          <h4 className="font-display font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-primary shrink-0 mt-0.5" />
              <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-primary">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-primary shrink-0 mt-0.5" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
        © {new Date().getFullYear()} Learning World Montessori. Made with{" "}
        <Heart size={12} className="text-[oklch(0.74_0.18_35)] fill-current" /> in Croydon.
      </div>
    </footer>
  );
}
