import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

import appCss from "../styles.css?url";
import favicon from "../assets/favicon.svg?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-coral px-6 py-3 text-sm font-semibold text-white shadow-coral hover-lift press"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Learning World Montessori — OFSTED Registered Nursery in Croydon" },
      {
        name: "description",
        content:
          "Learning World Montessori is a vibrant, OFSTED registered Montessori nursery in Croydon, UK offering quality day care, home-made food and a child-centred curriculum.",
      },
      { name: "author", content: "Learning World Montessori" },
      { property: "og:title", content: "Learning World Montessori — Croydon" },
      {
        property: "og:description",
        content:
          "Vibrant Montessori childcare near Lloyd Park, Croydon. Independent, confident learners through the Montessori Method.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: favicon },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
