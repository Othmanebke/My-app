import Link from "next/link";
import type { ReactNode } from "react";
import { LogoutButton } from "@/components/dashboard/logout-button";
import { requireSession } from "@/lib/auth/guards";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}): Promise<JSX.Element> {
  const session = await requireSession();

  return (
    <main className="flex flex-1 bg-zinc-100/80">
      <aside className="hidden w-72 flex-col border-r border-zinc-200 bg-white px-5 py-6 lg:flex">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Workspace</p>
        <h1 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">Pilot Dashboard</h1>

        <nav className="mt-8 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center justify-between rounded-xl bg-zinc-900 px-3 py-2 text-sm font-medium text-white"
          >
            Vue globale
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">Live</span>
          </Link>
          <a
            href="#kpi"
            className="block rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
          >
            KPIs
          </a>
          <a
            href="#pipeline"
            className="block rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
          >
            Pipeline
          </a>
          <a
            href="#activity"
            className="block rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
          >
            Activite recente
          </a>
        </nav>

        <div className="mt-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Session</p>
          <p className="mt-2 truncate text-sm font-medium text-zinc-800">{session.email}</p>
          <div className="mt-4">
            <LogoutButton />
          </div>
        </div>
      </aside>

      <section className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <header className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 shadow-sm sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Dashboard</p>
              <h2 className="mt-1 text-xl font-semibold text-zinc-900 sm:text-2xl">
                Bonjour, {session.name ?? "utilisateur"}
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Systeme operationnel
            </div>
          </div>
        </header>

        <div className="mt-6">{children}</div>
      </section>
    </main>
  );
}
