import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <main className="flex flex-1 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white px-6 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center">{children}</div>
    </main>
  );
}
