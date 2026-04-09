"use client";

import { useActionState } from "react";
import type { AuthActionState } from "@/lib/auth/types";
import { SubmitButton } from "@/components/auth/submit-button";

type AuthVariant = "login" | "register";

type AuthFormProps = {
  variant: AuthVariant;
  action: (
    state: AuthActionState | undefined,
    formData: FormData,
  ) => Promise<AuthActionState | undefined>;
};

export function AuthForm({ variant, action }: AuthFormProps): JSX.Element {
  const [state, formAction] = useActionState(action, undefined);

  const isRegister = variant === "register";
  const fieldClassName =
    "mt-1 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white";

  return (
    <form action={formAction} className="space-y-4">
      {isRegister ? (
        <label className="block text-sm text-zinc-700">
          <span>Nom complet</span>
          <input
            className={fieldClassName}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ex: Othmane Rahmani"
            required
          />
          {state?.errors?.name ? (
            <p className="text-xs text-red-600">{state.errors.name}</p>
          ) : null}
        </label>
      ) : null}

      <label className="block text-sm text-zinc-700">
        <span>Email</span>
        <input
          className={fieldClassName}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
        {state?.errors?.email ? (
          <p className="text-xs text-red-600">{state.errors.email}</p>
        ) : null}
      </label>

      <label className="block text-sm text-zinc-700">
        <span>Mot de passe</span>
        <input
          className={fieldClassName}
          name="password"
          type="password"
          autoComplete={isRegister ? "new-password" : "current-password"}
          placeholder="********"
          required
        />
        {state?.errors?.password ? (
          <p className="text-xs text-red-600">{state.errors.password}</p>
        ) : null}
      </label>

      {state?.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

      <SubmitButton
        idleLabel={isRegister ? "Creer mon compte" : "Se connecter"}
        pendingLabel={isRegister ? "Creation du compte..." : "Connexion..."}
      />
    </form>
  );
}
