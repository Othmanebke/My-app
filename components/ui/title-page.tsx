import type { ReactNode } from "react";

interface TitlePageProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
}

export function TitlePage({
  title,
  subtitle,
  description,
  icon,
}: TitlePageProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      {icon && (
        <div className="text-2xl">
          {icon}
        </div>
      )}

      {subtitle && (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {subtitle}
        </p>
      )}

      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="text-sm leading-6 text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}
