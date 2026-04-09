import Link from "next/link";

export default function HomePage(): JSX.Element {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-1 px-6 py-12 sm:px-8 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-14 top-10 h-44 w-44 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute right-8 top-24 h-56 w-56 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-52 w-52 rounded-full bg-amber-200/25 blur-3xl" />
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.85fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-zinc-300/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 backdrop-blur">
              Kit de demarrage Next.js 16
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Une base propre pour lancer une app auth solide et evolutive.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              Structure claire, routes publiques et protegees, validation et sessions.
              Tu peux brancher ton backend metier sans refaire l&apos;architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                Se connecter
              </Link>
              <Link
                href="/register"
                className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-900"
              >
                Creer un compte
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Stack</p>
              <p className="mt-2 text-sm font-medium text-zinc-800">Next 16 + App Router</p>
            </article>
            <article className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Auth</p>
              <p className="mt-2 text-sm font-medium text-zinc-800">Routes protegees + session</p>
            </article>
            <article className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">DX</p>
              <p className="mt-2 text-sm font-medium text-zinc-800">Base lisible et modulaire</p>
            </article>
          </div>
        </div>

        <div className="space-y-4">
          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Dossier cible
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-100">
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

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Roadmap type</p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900">Plan de livraison en 3 phases</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-700">
              <p className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
                1. Auth + roles + guard avances
              </p>
              <p className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
                2. Dashboard metier avec donnees reelles
              </p>
              <p className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
                3. Observabilite, logs, alerting et tests e2e
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-zinc-200 p-3 text-center">
                <p className="text-lg font-semibold text-zinc-900">95%</p>
                <p className="text-xs text-zinc-500">Code TS</p>
              </div>
              <div className="rounded-xl border border-zinc-200 p-3 text-center">
                <p className="text-lg font-semibold text-zinc-900">7j</p>
                <p className="text-xs text-zinc-500">MVP cible</p>
              </div>
              <div className="rounded-xl border border-zinc-200 p-3 text-center">
                <p className="text-lg font-semibold text-zinc-900">A+</p>
                <p className="text-xs text-zinc-500">Scalabilite</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
