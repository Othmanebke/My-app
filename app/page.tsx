import Link from "next/link";

export default function HomePage(): JSX.Element {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 py-16 sm:px-8">
      <div className="grid w-full gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Next.js 16 App Router
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Architecture propre: auth, routes protegees et base scalable.
          </h1>
          <p className="max-w-2xl text-base text-zinc-600 sm:text-lg">
            Cette base est prete pour brancher une vraie base de donnees, un provider
            d&apos;authentification, et des modules metier sans casser la structure.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Se connecter
            </Link>
            <Link
              href="/register"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
            >
              Creer un compte
            </Link>
          </div>
        </div>

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
      </div>
    </section>
  );
}
