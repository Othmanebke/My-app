export default function DashboardLoading(): JSX.Element {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="h-3 w-28 animate-pulse rounded bg-zinc-200" />
        <div className="mt-4 h-7 w-40 animate-pulse rounded bg-zinc-200" />
        <div className="mt-3 h-4 w-72 animate-pulse rounded bg-zinc-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="h-3 w-20 animate-pulse rounded bg-zinc-200" />
          <div className="mt-3 h-5 w-40 animate-pulse rounded bg-zinc-200" />
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="h-3 w-24 animate-pulse rounded bg-zinc-200" />
          <div className="mt-3 h-5 w-44 animate-pulse rounded bg-zinc-200" />
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="h-3 w-16 animate-pulse rounded bg-zinc-200" />
          <div className="mt-3 h-5 w-36 animate-pulse rounded bg-zinc-200" />
        </div>
      </div>
    </section>
  );
}
