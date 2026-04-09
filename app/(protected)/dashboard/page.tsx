import Link from "next/link";

const overviewStats = [
  {
    label: "Revenus MTD",
    value: "42 560 EUR",
    delta: "+8.2%",
  },
  {
    label: "Nouveaux comptes",
    value: "318",
    delta: "+24 cette semaine",
  },
  {
    label: "Tickets ouverts",
    value: "19",
    delta: "4 urgents",
  },
  {
    label: "Disponibilité",
    value: "99.95%",
    delta: "SLA stable",
  },
];

const dashboardLinks = [
  {
    href: "/dashboard/kpis",
    title: "KPIs",
    description: "Vue synthétique des métriques clés et signaux business.",
  },
  {
    href: "/dashboard/pipeline",
    title: "Pipeline",
    description: "Suivi des opportunités, progression et deals actifs.",
  },
  {
    href: "/dashboard/activity",
    title: "Activité",
    description: "Journal des événements récents, incidents et résolutions.",
  },
];

export default function DashboardPage(): JSX.Element {
  return (
    <section className="space-y-6 pb-6">
      <div className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Vue globale</p>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
          Choisis une interface dédiée selon ton besoin
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          Le dashboard n&apos;est plus un seul bloc. Chaque onglet ouvre maintenant une vraie vue distincte, pensée pour une tâche précise.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{stat.label}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{stat.value}</p>
            <p className="mt-1 text-xs text-zinc-600">{stat.delta}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {dashboardLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur transition hover:-translate-y-1 hover:border-zinc-950"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{item.title}</p>
            <h4 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">Ouvrir la vue {item.title.toLowerCase()}</h4>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition group-hover:decoration-zinc-950">
              Accéder
            </span>
          </Link>
        ))}
      </div>

      <article className="rounded-3xl border border-zinc-950 bg-zinc-950 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Focus du jour</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">Un espace plus lisible pour chaque contexte</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            Design unifié
          </span>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
          KPIs pour la lecture rapide, pipeline pour les opportunités, activité pour le support. Chaque lien ouvre désormais une interface dédiée et plus claire.
        </p>
      </article>
    </section>
  );
}
