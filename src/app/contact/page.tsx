import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | The Orchard",
  description: "Get in touch with The Orchard.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground uppercase"
        >
          Contact
        </Badge>
        <h1 className="max-w-xl font-heading text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Let&apos;s talk about your business.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Send a note with a bit about what you need, and I&apos;ll follow up
          to find a time to talk.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a
                  href="mailto:gwapplegate0@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  gwapplegate0@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a
                  href="tel:+13368169805"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  (336) 816-9805
                </a>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Prefer to skip the form? Call or email directly and include a
              little about your business. That&apos;s usually enough to get
              started.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
