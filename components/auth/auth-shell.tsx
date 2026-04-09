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
    <section className="mx-auto w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h1>
        <p className="text-sm text-zinc-600">{subtitle}</p>
      </div>

      <div className="mt-6">{children}</div>

      <p className="mt-6 text-sm text-zinc-600">
        {footerText}{" "}
        <Link className="font-semibold text-zinc-900" href={footerHref}>
          {footerLinkLabel}
        </Link>
      </p>
    </section>
  );
}
