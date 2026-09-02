import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About | The Orchard",
  description: "The story behind The Orchard.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-16 sm:pt-24">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground uppercase"
        >
          About
        </Badge>
        <h1 className="max-w-2xl font-heading text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Garrett Applegate, the person behind The Orchard.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          I&apos;m a Piedmont Triad local who works in digital marketing for
          small businesses. Not a logo on an agency site, just someone who
          actually cares whether your business grows.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            How I got here
          </span>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              It started with a trip to the beach. I was looking for a local
              shop to check out and found one with no website, no social
              media, not even a Google listing. I hesitated before I ever
              walked in. As a Business Development major at UNCW, that
              hesitation stuck with me: the business itself might have been
              great, but online it looked like it barely existed. That gap
              between what a business actually offers and how it shows up
              online became the idea behind The Orchard.
            </p>
            <p>
              I dug into it further during my capstone project, researching
              how much revenue local businesses lose every year from not
              having a website or a Google Business Profile at all. That
              research is what turned the idea into something real.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Why &quot;The Orchard&quot;
          </span>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              It&apos;s a play on my last name, Applegate. But it&apos;s also
              how I work: you can plant a single apple tree and hope it does
              well on its own, or you can build an orchard, something
              structured, tended, and planned. That structure is what turns
              effort into a business that actually grows, and it&apos;s what
              I want to build with every client.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Who I work best with
          </span>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Usually it&apos;s a small business with little to no online
              presence. Not because the owner doesn&apos;t care, but because
              they&apos;ve been too busy running the business to think about
              it, and they&apos;re hitting a wall where an online presence
              has quietly become essential.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            What makes this different
          </span>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              I was raised right here in the Piedmont Triad, in
              Kernersville. I&apos;m not a faceless agency, I&apos;m someone
              just starting out, building The Orchard alongside the
              businesses I work with. It&apos;s mutual: they&apos;re helping
              me grow a business, and I&apos;m helping them gain the
              visibility theirs deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Background
          </span>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              I&apos;m a 2026 UNCW graduate with a degree in Marketing and
              Business Development. But I&apos;ve been running businesses
              since high school, buying and reselling sneakers and clothing.
              I&apos;ve always made my own money and always wanted to work
              for myself. The discipline isn&apos;t new, it&apos;s just who
              I am.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
              Want to talk it through?
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              No pitch, just a conversation about where your business is and
              where it needs to go.
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
