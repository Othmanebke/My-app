import type { ReactNode } from "react";
import { RouteTransition } from "@/components/ui/route-transition";

export default function PublicLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <main className="relative flex flex-1 px-6 py-8 sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-8 top-10 h-60 w-60 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-stone-400/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex items-center justify-between rounded-full border border-white/80 bg-white/80 px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Next Starter</p>
            <p className="text-sm font-medium text-zinc-900">Design clair pour auth et dashboard</p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-700 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Application en ligne
          </div>
        </header>

        <RouteTransition className="flex flex-1 items-center justify-center">
          {children}
        </RouteTransition>
      </div>
    </main>
  );
}
