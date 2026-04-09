import type { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }): JSX.Element {
  return <main className="flex flex-1 bg-zinc-50 px-6 py-10 sm:px-8">{children}</main>;
}
