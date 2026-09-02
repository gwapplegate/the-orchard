import Link from "next/link";
import { ArrowUpRight, Compass, LineChart, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PILLARS = [
  {
    icon: Sprout,
    title: "Websites built to perform",
    description:
      "Landing pages and full sites built to represent your business clearly and turn visitors into customers.",
  },
  {
    icon: Compass,
    title: "Local visibility",
    description:
      "Google Business Profile, local search setup, and the unglamorous plumbing that gets you found nearby.",
  },
  {
    icon: LineChart,
    title: "Business systems",
    description:
      "A clear-eyed review of how your business runs day to day, and a plan to make it run better.",
  },
];

const STATS = [
  {
    stat: "99%",
    description:
      "of consumers use Google or Maps to find a nearby business, and nearly half buy within 48 to 72 hours of that search.",
  },
  {
    stat: "88%",
    description:
      "of customers will not come back after a poor online experience, and 31% will not buy from a business with no website at all.",
  },
  {
    stat: "73%",
    description:
      "of small businesses now have a website, up from 64% five years ago. The ones without are losing ground to the ones who caught up.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "A real conversation",
    description:
      "We talk about what you're building, who it's for, and what's actually getting in the way right now.",
  },
  {
    step: "02",
    title: "A plan you understand",
    description:
      "You get a scoped recommendation and a price before anything starts. No surprises, no jargon.",
  },
  {
    step: "03",
    title: "Work you can see",
    description:
      "Design and build happen in the open, with regular updates along the way instead of a black box.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground uppercase"
        >
          Built for founder led businesses
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          Digital marketing for small, founder led businesses ready to grow.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          The Orchard builds websites, local visibility, and business
          systems for owners doing it all themselves, so your online
          presence finally matches the work you put in.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Book a call
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/services" />}
          >
            See services &amp; pricing
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Why it matters
          </span>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            Customers are already looking. The question is what they find.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Digital marketing isn&apos;t a trend anymore, it&apos;s just how
            business works now. Nearly 9 in 10 businesses call an online
            presence essential, and the ones that treat it that way are the
            ones still growing.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {STATS.map(({ stat, description }) => (
            <div key={stat}>
              <span className="font-heading text-5xl text-accent">
                {stat}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 max-w-xl">
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              What I do
            </span>
            <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
              Three ways to grow, picked to fit where you are.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border/80 bg-card">
                <CardContent className="flex flex-col gap-4 pt-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            How it works
          </span>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            No agency theater. Just a plan and the work.
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {PROCESS.map(({ step, title, description }) => (
            <div key={step}>
              <span className="font-heading text-4xl text-accent">
                {step}
              </span>
              <h3 className="mt-4 font-heading text-xl text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
              Let&apos;s see if it&apos;s a fit.
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              A short call, no pitch deck. Just a look at what you need and
              whether I&apos;m the right person to build it.
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
