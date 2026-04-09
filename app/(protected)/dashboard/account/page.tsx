import { requireSession } from "@/lib/auth/guards";

function formatDate(timestamp?: number): string {
  if (!timestamp) {
    return "Non défini";
  }

  return new Date(timestamp).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AccountPage(): Promise<JSX.Element> {
  const session = await requireSession();

  return (
    <section className="space-y-6 pb-6">
      <div className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Mon compte</p>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
          Informations du profil connecté
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          Cette vue te permet de vérifier rapidement l'identité active et l'état de session côté application.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
          <h4 className="text-lg font-semibold tracking-tight text-zinc-950">Détails utilisateur</h4>

          <dl className="mt-4 grid gap-3 text-sm">
            <div className="rounded-2xl border border-zinc-200 bg-white p-3">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Nom</dt>
              <dd className="mt-1 font-medium text-zinc-950">{session.name ?? "Non défini"}</dd>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-3">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Email</dt>
              <dd className="mt-1 font-medium text-zinc-950">{session.email}</dd>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-3">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">ID Utilisateur</dt>
              <dd className="mt-1 font-medium text-zinc-950">{session.userId ?? "Non disponible"}</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-3xl border border-zinc-950 bg-zinc-950 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Session</p>
          <h4 className="mt-2 text-lg font-semibold tracking-tight">État de connexion</h4>

          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-zinc-400">Statut</p>
              <p className="mt-1 font-semibold text-emerald-300">Active</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-zinc-400">Expiration token</p>
              <p className="mt-1 font-semibold text-zinc-100">{formatDate(session.expiresAt)}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-zinc-400">Token API</p>
              <p className="mt-1 break-all font-mono text-xs text-zinc-200">
                {session.token ? `${session.token.slice(0, 24)}...` : "Non disponible"}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
