const events = [
  {
    client: "Nova Retail",
    module: "Facturation",
    status: "En ligne",
    time: "Il y a 4 min",
  },
  {
    client: "Atlas Conseil",
    module: "Onboarding",
    status: "Attention",
    time: "Il y a 18 min",
  },
  {
    client: "Blue Media",
    module: "Auth SSO",
    status: "En attente",
    time: "Il y a 53 min",
  },
  {
    client: "Pulse Studio",
    module: "Support",
    status: "Résolu",
    time: "Il y a 1 h",
  },
];

export default function ActivityPage(): JSX.Element {
  return (
    <section className="space-y-6 pb-6">
      <div className="flex flex-wrap items-end justify-between gap-4 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Activité</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Journal des événements récents</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Vue dédiée au support et aux opérations pour suivre ce qui se passe réellement dans l’application.
          </p>
        </div>

        <div className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
          4 événements récents
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">Flux d’activité</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-135 text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-xs uppercase tracking-[0.12em] text-zinc-500">
                  <th className="pb-2 font-semibold">Client</th>
                  <th className="pb-2 font-semibold">Module</th>
                  <th className="pb-2 font-semibold">Statut</th>
                  <th className="pb-2 font-semibold">Maj</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                {events.map((event) => (
                  <tr key={`${event.client}-${event.module}`} className="border-b border-zinc-100/80 last:border-b-0">
                    <td className="py-3 font-medium text-zinc-950">{event.client}</td>
                    <td className="py-3">{event.module}</td>
                    <td className="py-3">
                      <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                        {event.status}
                      </span>
                    </td>
                    <td className="py-3">{event.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-3xl border border-zinc-950 bg-zinc-950 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Signal opérationnel</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">Tout est stable</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            L’activité montre une application saine, avec des statuts variés et une lecture rapide des incidents et résolutions.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-zinc-400">Résolus</p>
              <p className="mt-1 text-lg font-semibold">68%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-zinc-400">En attente</p>
              <p className="mt-1 text-lg font-semibold">12%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
