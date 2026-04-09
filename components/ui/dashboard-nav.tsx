"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardNavItem = {
  href: string;
  label: string;
  badge?: string;
};

const navItems: DashboardNavItem[] = [
  { href: "/dashboard", label: "Vue globale", badge: "Live" },
  { href: "/dashboard/kpis", label: "KPIs" },
  { href: "/dashboard/pipeline", label: "Pipeline" },
  { href: "/dashboard/activity", label: "Activité récente" },
  { href: "/dashboard/account", label: "Mon compte" },
];

export function DashboardNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="mt-8 space-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium transition duration-200 ${
              isActive
                ? "bg-zinc-950 text-white shadow-sm"
                : "border border-zinc-200 bg-white/70 text-zinc-700 hover:border-zinc-400 hover:text-zinc-950"
            }`}
          >
            <span>{item.label}</span>
            {item.badge ? (
              <span className={`rounded-full px-2 py-0.5 text-xs ${isActive ? "bg-white/15 text-white" : "bg-zinc-100 text-zinc-600"}`}>
                {item.badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export function DashboardMobileNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden">
      <div className="overflow-x-auto rounded-2xl border border-white/80 bg-white/80 p-1.5 shadow-sm backdrop-blur">
        <div className="flex min-w-max gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-600 hover:bg-white hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
