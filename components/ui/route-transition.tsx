"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type RouteTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function RouteTransition({ children, className = "" }: RouteTransitionProps): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      className={`motion-safe:animate-[fade-up_240ms_ease-out] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
