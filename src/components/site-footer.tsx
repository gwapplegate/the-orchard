import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <Image
            src="/images/orchard-logo.png"
            alt="The Orchard"
            width={56}
            height={56}
            className="h-14 w-14"
          />
          <p className="mt-1 max-w-xs text-sm text-muted-foreground">
            Digital marketing for small, founder led businesses.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Site
            </span>
            <Link href="/about" className="text-sm text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Link href="/services" className="text-sm text-foreground/80 hover:text-foreground">
              Services &amp; Pricing
            </Link>
            <Link href="/contact" className="text-sm text-foreground/80 hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Orchard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
