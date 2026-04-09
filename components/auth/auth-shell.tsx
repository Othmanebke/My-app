import Link from "next/link";
import type { ReactNode } from "react";
import { TitlePage } from "@/components/ui";

type AuthShellProps = {
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkLabel: string;
  footerHref: string;
  children: ReactNode;
};

export function AuthShell({
  title,
  subtitle,
  footerText,
  footerLinkLabel,
  footerHref,
  children,
}: AuthShellProps): JSX.Element {
  return (
    <section className="motion-safe:animate-[fade-up_240ms_ease-out] relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-zinc-950 via-zinc-700 to-zinc-400" />

      <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <TitlePage subtitle={subtitle} title={title} />

      <div className="mt-6">{children}</div>

      <p className="mt-6 text-sm leading-6 text-zinc-600">
        {footerText}{" "}
        <Link
          className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
          href={footerHref}
        >
          {footerLinkLabel}
        </Link>
      </p>
    </section>
  );
}
