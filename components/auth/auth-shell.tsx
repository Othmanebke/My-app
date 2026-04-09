import Link from "next/link";
import type { ReactNode } from "react";

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
    <section className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-cyan-400 via-emerald-400 to-amber-300" />
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h1>
        <p className="text-sm leading-6 text-zinc-600">{subtitle}</p>
      </div>

      <div className="mt-6">{children}</div>

      <p className="mt-6 text-sm text-zinc-600">
        {footerText}{" "}
        <Link className="font-semibold text-zinc-900 underline-offset-4 hover:underline" href={footerHref}>
          {footerLinkLabel}
        </Link>
      </p>
    </section>
  );
}
