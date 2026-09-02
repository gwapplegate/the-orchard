import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services & Pricing | The Orchard",
  description:
    "Website, local visibility, and business systems packages for small, founder led businesses.",
};

type Package = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features?: string[];
  featured?: boolean;
};

const WEBSITE_PACKAGES: Package[] = [
  {
    name: "Logo Starter",
    price: "$350",
    description:
      "A simple, versatile logo to give your business a face, for founders who need a mark before anything else.",
  },
  {
    name: "Landing Page",
    price: "$1,000",
    description:
      "One focused page built to introduce your business and drive a single action: bookings, calls, or inquiries.",
  },
  {
    name: "Essential Website",
    price: "$1,500",
    description:
      "A clean, few-page site covering the essentials: home, about, services, and contact.",
  },
  {
    name: "Standard Website",
    price: "$1,750 to $2,200",
    description:
      "A fuller site with more pages and structure, built for businesses ready to say more about what they do.",
    featured: true,
  },
  {
    name: "Complete Website",
    price: "$2,200 to $2,500",
    description:
      "The full build: more pages, more custom design work, and more room to grow into as your business does.",
  },
  {
    name: "Website Care",
    price: "$30 to $50",
    cadence: "/month",
    description:
      "Ongoing updates, hosting support, and peace of mind so your site keeps working after launch.",
  },
];

const LOCAL_VISIBILITY_PACKAGES: Package[] = [
  {
    name: "Local Visibility Setup",
    price: "$500",
    description:
      "A complete Google Business Profile setup to help nearby customers actually find you online.",
  },
];

const SYSTEMS_PACKAGES: Package[] = [
  {
    name: "Business Systems Review",
    price: "$250",
    description:
      "A clear-eyed look at how your business runs day to day, with a plan for where it can run better.",
  },
  {
    name: "Systems Implementation",
    price: "Custom Quote",
    description:
      "Hands-on help putting the recommended systems in place, scoped to what your business actually needs.",
  },
];

const COMING_SOON = [
  "Local Visibility + Photography",
  "Standalone Half Day Photography",
  "Short Form Content Session",
  "Photo and Creative Session",
  "Social Media Management",
  "Meta Ads Setup",
  "Meta Ads Management",
  "Meta Advertising",
];

function PackageGrid({ packages }: { packages: Package[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <Card
          key={pkg.name}
          className={
            pkg.featured
              ? "border-primary/60 bg-card shadow-sm ring-1 ring-primary/30"
              : "border-border/80 bg-card"
          }
        >
          <CardContent className="flex h-full flex-col pt-2">
            {pkg.featured && (
              <Badge className="mb-3 w-fit bg-accent text-accent-foreground">
                Most popular
              </Badge>
            )}
            <h3 className="font-heading text-xl text-foreground">
              {pkg.name}
            </h3>
            <p className="mt-3 flex items-baseline gap-1">
              <span className="font-heading text-3xl text-foreground">
                {pkg.price}
              </span>
              {pkg.cadence && (
                <span className="text-sm text-muted-foreground">
                  {pkg.cadence}
                </span>
              )}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {pkg.description}
            </p>
            {pkg.features && (
              <ul className="mt-4 space-y-2">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground uppercase"
        >
          Services &amp; Pricing
        </Badge>
        <h1 className="max-w-2xl font-heading text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Clear packages, honest prices.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Every project starts with a conversation, but here&apos;s what
          things typically cost so you can plan before we talk.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-6 font-heading text-2xl text-foreground">
          Websites &amp; Brand
        </h2>
        <PackageGrid packages={WEBSITE_PACKAGES} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-6 font-heading text-2xl text-foreground">
          Local Visibility
        </h2>
        <PackageGrid packages={LOCAL_VISIBILITY_PACKAGES} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-6 font-heading text-2xl text-foreground">
          Business Systems
        </h2>
        <PackageGrid packages={SYSTEMS_PACKAGES} />
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-2 font-heading text-2xl text-foreground">
            Coming soon
          </h2>
          <p className="mb-6 max-w-xl text-sm text-muted-foreground">
            These are on the way. Reach out if you want to be first in line
            when they open up.
          </p>
          <div className="flex flex-wrap gap-3">
            {COMING_SOON.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="border-border bg-background px-3 py-1.5 text-sm font-normal text-muted-foreground"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
              Not sure which one fits?
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Tell me where your business is at and I&apos;ll point you to
              the right starting place.
            </p>
          </div>
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Book a call
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
