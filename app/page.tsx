import Link from "next/link";

export default function HomePage(): JSX.Element {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-1 px-6 py-12 sm:px-8 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-10 top-8 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 top-14 h-72 w-72 rounded-full bg-stone-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.88fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-700 shadow-sm backdrop-blur">
              Kit de demarrage Next.js 16
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-6xl">
              Une base d&apos;authentification claire, elegante et prete pour evoluer.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              Architecture propre, pages publiques soignées, zone protégée plus lisible,
              et une structure qui peut accueillir ton backend métier sans refonte.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                Se connecter
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-950"
              >
                Creer un compte
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Stack</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Next 16 + App Router</p>
            </article>
            <article className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Auth</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Routes protegees + session</p>
            </article>
            <article className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">DX</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Base lisible et modulaire</p>
            </article>
          </div>
        </div>

        <div className="space-y-4">
          <aside className="overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Dossier cible
              </p>
              <span className="rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                Clean
              </span>
            </div>
            <pre className="mt-4 overflow-x-auto rounded-2xl bg-zinc-950 p-5 text-xs leading-relaxed text-zinc-100">
{`app/
  _actions/
  (public)/
    login/
    register/
  (protected)/
    dashboard/
components/
lib/auth/
proxy.ts`}
            </pre>
          </aside>

          <article className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Roadmap type</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">Plan de livraison en 3 phases</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-700">
              <p className="rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2.5">
                1. Auth + roles + guard avances
              </p>
              <p className="rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2.5">
                2. Dashboard metier avec donnees reelles
              </p>
              <p className="rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2.5">
                3. Observabilite, logs, alerting et tests e2e
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-3 text-center">
                <p className="text-lg font-semibold text-zinc-950">95%</p>
                <p className="text-xs text-zinc-500">Code TS</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-3 text-center">
                <p className="text-lg font-semibold text-zinc-950">7j</p>
                <p className="text-xs text-zinc-500">MVP cible</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-3 text-center">
                <p className="text-lg font-semibold text-zinc-950">A+</p>
                <p className="text-xs text-zinc-500">Scalabilite</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
