import Link from "next/link";

const kpiCards = [
  {
    label: "Revenus MTD",
    value: "42 560 EUR",
    delta: "+8.2% vs mois dernier",
    tone: "emerald",
  },
  {
    label: "Nouveaux comptes",
    value: "318",
    delta: "+24 cette semaine",
    tone: "teal",
  },
  {
    label: "Tickets ouverts",
    value: "19",
    delta: "4 en priorite haute",
    tone: "amber",
  },
  {
    label: "Disponibilite",
    value: "99.95%",
    delta: "SLA 30 derniers jours",
    tone: "zinc",
  },
];

const indicators = [
  { label: "MRR", value: "28.4k", progress: 86 },
  { label: "Activation", value: "71%", progress: 71 },
  { label: "Retenue", value: "93%", progress: 93 },
  { label: "NPS", value: "56", progress: 56 },
];

export default function KpisPage(): JSX.Element {
  return (
    <section className="space-y-6 pb-6">
      <div className="flex flex-wrap items-end justify-between gap-4 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Vue KPI</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
            Lecture rapide de la santé produit
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Les métriques sont isolées dans leur propre vue pour te donner un espace lisible, plus calme et orienté décision.
          </p>
        </div>

        <Link
          href="/dashboard/pipeline"
          className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-950 hover:text-zinc-950"
        >
          Voir le pipeline
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((card) => (
          <article
            key={card.label}
            className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{card.label}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{card.value}</p>
            <p className="mt-1 text-xs text-zinc-600">{card.delta}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">Indicateurs avancés</h3>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">Mise à jour automatique</span>
          </div>

          <div className="mt-5 space-y-4">
            {indicators.map((indicator) => (
              <div key={indicator.label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-zinc-700">{indicator.label}</span>
                  <span className="font-medium text-zinc-950">{indicator.value}</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200">
                  <div
                    className="h-full rounded-full bg-zinc-950"
                    style={{ width: `${indicator.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/80 bg-zinc-950 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Signal du jour</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">La traction reste saine</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            La hausse des comptes et la stabilité du NPS montrent un socle propre. Le prochain levier est l’activation utilisateur.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-zinc-400">Churn</p>
              <p className="mt-1 text-lg font-semibold">2.1%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-zinc-400">Conversion</p>
              <p className="mt-1 text-lg font-semibold">18.4%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
