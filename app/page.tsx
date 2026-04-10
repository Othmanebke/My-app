"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/login");
    }, 900);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="rounded-3xl border border-white/80 bg-white/85 px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Next Starter</p>
        <p className="mt-2 text-lg font-semibold text-zinc-950">Préparation de votre espace...</p>
        <div className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-zinc-950" />
        </div>
      </div>
    </main>
  );
}
