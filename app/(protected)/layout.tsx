import type { ReactNode } from "react";
import { LogoutButton } from "@/components/dashboard/logout-button";
import { requireSession } from "@/lib/auth/guards";
import { DashboardMobileNav, DashboardNav } from "@/components/ui/dashboard-nav";
import { RouteTransition } from "@/components/ui/route-transition";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}): Promise<JSX.Element> {
  const session = await requireSession();

  return (
    <main className="flex flex-1 bg-transparent">
      <aside className="hidden w-72 flex-col border-r border-white/80 bg-white/75 px-5 py-6 backdrop-blur lg:flex">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Workspace</p>
        <h1 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">Pilot Dashboard</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Vue d&apos;ensemble des opérations, des revenus et des priorités produit.
        </p>

        <DashboardNav />

        <div className="mt-auto rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Session</p>
          <p className="mt-2 truncate text-sm font-medium text-zinc-900">{session.email}</p>
          <div className="mt-4">
            <LogoutButton />
          </div>
        </div>
      </aside>

      <section className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <RouteTransition className="space-y-6">
          <header className="rounded-3xl border border-white/80 bg-white/80 px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Dashboard</p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                  Bonjour, {session.name ?? "utilisateur"}
                </h2>
                <p className="mt-1 text-sm text-zinc-600">Surveille les indicateurs clés et les actions à mener aujourd&apos;hui.</p>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm sm:flex">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Systeme operationnel
              </div>
            </div>

            <div className="mt-4">
              <DashboardMobileNav />
            </div>
          </header>

          <div>{children}</div>
        </RouteTransition>
      </section>
    </main>
  );
}
