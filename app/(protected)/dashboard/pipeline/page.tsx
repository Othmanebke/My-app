import Link from "next/link";

const stages = [
  { label: "Prospection", value: 62, tone: "bg-cyan-500" },
  { label: "Qualification", value: 45, tone: "bg-emerald-500" },
  { label: "Negociation", value: 31, tone: "bg-amber-500" },
  { label: "Signature", value: 18, tone: "bg-zinc-950" },
];

const deals = [
  {
    company: "Nova Retail",
    stage: "Qualification",
    amount: "12 400 EUR",
    owner: "M. Benali",
    status: "En cours",
  },
  {
    company: "Atlas Conseil",
    stage: "Negociation",
    amount: "21 800 EUR",
    owner: "S. Rahman",
    status: "Priorite",
  },
  {
    company: "Blue Media",
    stage: "Prospection",
    amount: "8 900 EUR",
    owner: "A. Diallo",
    status: "A relancer",
  },
];

export default function PipelinePage(): JSX.Element {
  return (
    <section className="space-y-6 pb-6">
      <div className="flex flex-wrap items-end justify-between gap-4 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Vue pipeline</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Cartographie des opportunités</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Cette vue est dédiée au suivi commercial: progression, deals en cours et prochaines actions.
          </p>
        </div>

        <Link
          href="/dashboard/activity"
          className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Voir l’activité
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">Progression globale</h3>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">27 opportunités</span>
          </div>

          <div className="mt-5 space-y-4">
            {stages.map((stage) => (
              <div key={stage.label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-zinc-700">{stage.label}</span>
                  <span className="font-medium text-zinc-900">{stage.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200">
                  <div className={`h-full rounded-full ${stage.tone}`} style={{ width: `${stage.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-zinc-950 bg-zinc-950 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Focus business</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">Les deals à plus forte valeur</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Priorise les opportunités en négociation et les comptes les plus chauds pour maximiser le closing.
          </p>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Pipeline total</p>
              <p className="mt-1 text-2xl font-semibold">€43.1k</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Win rate</p>
              <p className="mt-1 text-2xl font-semibold">34%</p>
            </div>
          </div>
        </article>
      </div>

      <article className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-950">Deals actifs</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-135 text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-xs uppercase tracking-[0.12em] text-zinc-500">
                <th className="pb-2 font-semibold">Entreprise</th>
                <th className="pb-2 font-semibold">Étape</th>
                <th className="pb-2 font-semibold">Montant</th>
                <th className="pb-2 font-semibold">Owner</th>
                <th className="pb-2 font-semibold">Statut</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700">
              {deals.map((deal) => (
                <tr key={deal.company} className="border-b border-zinc-100/80 last:border-b-0">
                  <td className="py-3 font-medium text-zinc-950">{deal.company}</td>
                  <td className="py-3">{deal.stage}</td>
                  <td className="py-3">{deal.amount}</td>
                  <td className="py-3">{deal.owner}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                      {deal.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
