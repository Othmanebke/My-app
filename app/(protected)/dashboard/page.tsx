export default async function DashboardPage(): Promise<JSX.Element> {
  return (
    <section className="space-y-6">
      <div id="kpi" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Revenus MTD</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">42 560 EUR</p>
          <p className="mt-1 text-xs text-emerald-600">+8.2% vs mois dernier</p>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Nouveaux comptes</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">318</p>
          <p className="mt-1 text-xs text-emerald-600">+24 cette semaine</p>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Tickets ouverts</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">19</p>
          <p className="mt-1 text-xs text-amber-600">4 en priorite haute</p>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Disponibilite</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">99.95%</p>
          <p className="mt-1 text-xs text-zinc-500">SLA 30 derniers jours</p>
        </article>
      </div>

      <div id="pipeline" className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-zinc-900">Pipeline commercial</h3>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              27 opportunites
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-zinc-700">Prospection</span>
                <span className="font-medium text-zinc-800">62%</span>
              </div>
              <div className="h-2 rounded-full bg-zinc-200">
                <div className="h-full w-[62%] rounded-full bg-cyan-500" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-zinc-700">Qualification</span>
                <span className="font-medium text-zinc-800">45%</span>
              </div>
              <div className="h-2 rounded-full bg-zinc-200">
                <div className="h-full w-[45%] rounded-full bg-emerald-500" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-zinc-700">Negociation</span>
                <span className="font-medium text-zinc-800">31%</span>
              </div>
              <div className="h-2 rounded-full bg-zinc-200">
                <div className="h-full w-[31%] rounded-full bg-amber-500" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-zinc-700">Signature</span>
                <span className="font-medium text-zinc-800">18%</span>
              </div>
              <div className="h-2 rounded-full bg-zinc-200">
                <div className="h-full w-[18%] rounded-full bg-zinc-800" />
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">Actions rapides</h3>
          <div className="mt-4 grid gap-3">
            <button className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700">
              Ajouter un lead
            </button>
            <button className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900">
              Creer une campagne
            </button>
            <button className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900">
              Exporter rapport PDF
            </button>
          </div>

          <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700">
            Objectif du jour: finaliser 3 demos client et reduire le backlog support de 10%.
          </div>
        </article>
      </div>

      <div id="activity" className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">Activite recente</h3>
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
                <tr className="border-b border-zinc-100">
                  <td className="py-3 font-medium text-zinc-900">Nova Retail</td>
                  <td className="py-3">Facturation</td>
                  <td className="py-3">
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                      En ligne
                    </span>
                  </td>
                  <td className="py-3">Il y a 4 min</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 font-medium text-zinc-900">Atlas Conseil</td>
                  <td className="py-3">Onboarding</td>
                  <td className="py-3">
                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                      Attention
                    </span>
                  </td>
                  <td className="py-3">Il y a 18 min</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900">Blue Media</td>
                  <td className="py-3">Auth SSO</td>
                  <td className="py-3">
                    <span className="rounded-full bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700">
                      En attente
                    </span>
                  </td>
                  <td className="py-3">Il y a 53 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <div className="grid gap-4">
          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Taches prioritaires</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="rounded-xl border border-zinc-200 p-3">Valider les droits RBAC pour equipe Sales</li>
              <li className="rounded-xl border border-zinc-200 p-3">Configurer alertes uptime sur environnement prod</li>
              <li className="rounded-xl border border-zinc-200 p-3">Planifier migration base utilisateurs v2</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Timeline releases</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-700">
              <p className="rounded-xl border border-zinc-200 p-3">v0.7.0: Metrics et KPI dynamiques</p>
              <p className="rounded-xl border border-zinc-200 p-3">v0.8.0: Integrations CRM externes</p>
              <p className="rounded-xl border border-zinc-200 p-3">v1.0.0: Production hardening + audit</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
