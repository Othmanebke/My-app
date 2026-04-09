import { LogoutButton } from "@/components/dashboard/logout-button";
import { requireSession } from "@/lib/auth/guards";

export default async function DashboardPage(): Promise<JSX.Element> {
  const session = await requireSession();

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8">
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Session active
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-zinc-900">Dashboard</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Connecte en tant que <span className="font-medium text-zinc-900">{session.email}</span>
          </p>
        </div>
        <LogoutButton />
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Etat</p>
          <p className="mt-3 text-lg font-semibold text-zinc-900">Authentification OK</p>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Prochaine etape</p>
          <p className="mt-3 text-sm text-zinc-700">Brancher une vraie base utilisateurs (Prisma + Postgres).</p>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Securite</p>
          <p className="mt-3 text-sm text-zinc-700">Route protegee par proxy + verification serveur dans la page.</p>
        </article>
      </div>
    </section>
  );
}
