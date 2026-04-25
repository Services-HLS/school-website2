import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { SITE, waLink } from "@/lib/site";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Get in touch with Learning World Montessori — visit our nursery near Lloyd Park, Croydon, or send us a message.",
      },
      { property: "og:title", content: "Contact — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Visit our Montessori nursery near Lloyd Park, Croydon. Send a message or chat with us on WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact us"
        title="We'd love to hear from you"
        subtitle="Book a tour, ask about admissions or simply say hello."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        {/* Info */}
        <div className="space-y-4">
          <ContactCard
            icon={MapPin}
            title="Visit us"
            color="bg-gradient-blue"
            content={SITE.address}
          />
          <ContactCard
            icon={Phone}
            title="Call"
            color="bg-gradient-coral"
            content={SITE.phone}
            href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
          />
          <ContactCard
            icon={Mail}
            title="Email"
            color="bg-gradient-green"
            content={SITE.email}
            href={`mailto:${SITE.email}`}
          />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block reveal rounded-3xl p-6 bg-[#25D366] text-white shadow-glow hover-lift press"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                  <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.77.46 3.44 1.28 4.91L2 22l5.25-1.38c1.41.77 3.01 1.2 4.76 1.2 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zm5.55 14.15c-.24.67-1.39 1.27-1.91 1.35-.53.08-1.06.1-3.03-.68-2.52-1-4.14-3.58-4.26-3.75-.12-.17-1-1.33-1-2.54 0-1.21.63-1.81.86-2.05.23-.24.51-.3.68-.3.17 0 .34 0 .48.01.15.01.35-.06.55.42.2.49.69 1.68.75 1.8.06.12.1.26.02.42-.08.17-.12.27-.24.41-.12.14-.26.31-.37.42-.12.12-.24.25-.1.49.14.24.62 1.03 1.33 1.66.92.81 1.69 1.06 1.93 1.18.24.12.38.1.52-.06.14-.17.61-.71.77-.96.16-.25.32-.21.55-.12.23.09 1.48.7 1.74.83.26.13.43.2.49.31.06.11.06.63-.18 1.3z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold">Chat on WhatsApp</p>
                <p className="text-sm text-white/90">Quick replies during opening hours</p>
              </div>
            </div>
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="reveal rounded-3xl bg-card p-8 shadow-soft space-y-5"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold">Send us a message</h3>
            <p className="text-sm text-muted-foreground mt-1">
              We'll get back to you within one working day.
            </p>
          </div>
          <Field label="Your name" name="name" placeholder="Jane Doe" />
          <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          <Field label="Phone" name="phone" placeholder="+44 …" />
          <div>
            <label className="text-sm font-medium text-foreground/80">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell us a little about your child and what you're looking for..."
              className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-coral px-7 py-3.5 text-sm font-semibold text-white shadow-coral hover-lift press disabled:opacity-70"
          >
            {sent ? "Message sent ✓" : (<>Send message <Send size={15} /></>)}
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 reveal">
        <div className="overflow-hidden rounded-3xl shadow-soft border border-border/60">
          <iframe
            title="Learning World Montessori location"
            src="https://www.google.com/maps?q=Coombe+Road+Lloyd+Park+Croydon&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </PageShell>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
  color,
  href,
}: {
  icon: typeof Mail;
  title: string;
  content: string;
  color: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="reveal block rounded-3xl bg-card p-6 shadow-soft hover-lift"
    >
      <div className="flex items-start gap-4">
        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${color} text-white shadow-glow`}>
          <Icon size={20} />
        </div>
        <div>
          <p className="font-display font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground mt-1 break-words">{content}</p>
        </div>
      </div>
    </Wrapper>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}
