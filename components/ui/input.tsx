"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
}

export function Input({
  label,
  error,
  hint,
  icon,
  className = "",
  disabled = false,
  id,
  name,
  ...props
}: InputProps): JSX.Element {
  const generatedId = id || name;

  return (
    <label className="block text-sm text-zinc-700">
      {label && (
        <span className="mb-2 block font-medium tracking-tight text-zinc-950">{label}</span>
      )}

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}

        <input
          id={generatedId}
          name={name}
          className={`w-full rounded-2xl border border-zinc-300 bg-white px-3 py-2.5 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500 shadow-sm ${
            icon ? "pl-10" : ""
          } ${error ? "border-red-500 focus:border-red-600" : ""} ${className}`.trim()}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${generatedId}-error` : hint ? `${generatedId}-hint` : undefined}
          {...props}
        />
      </div>

      {error && (
        <p id={`${generatedId}-error`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${generatedId}-hint`} className="mt-1.5 text-xs text-zinc-500">
          {hint}
        </p>
      )}
    </label>
  );
}
