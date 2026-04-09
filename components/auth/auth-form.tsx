"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import type { AuthActionState } from "@/lib/auth/types";
import { Input, Button } from "@/components/ui";

type AuthVariant = "login" | "register";

type AuthFormProps = {
  variant: AuthVariant;
  action: (
    state: AuthActionState | undefined,
    formData: FormData,
  ) => Promise<AuthActionState | undefined>;
};

function SubmitButton({ isRegister }: { isRegister: boolean }): JSX.Element {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      disabled={pending}
      className="w-full"
    >
      {isRegister ? "Creer mon compte" : "Se connecter"}
    </Button>
  );
}

export function AuthForm({ variant, action }: AuthFormProps): JSX.Element {
  const [state, formAction] = useActionState(action, undefined);

  const isRegister = variant === "register";

  return (
    <form action={formAction} className="space-y-4">
      {isRegister ? (
        <Input
          name="name"
          label="Nom complet"
          type="text"
          placeholder="Ex: Othmane Rahmani"
          error={state?.errors?.name}
          autoComplete="name"
          required
        />
      ) : null}

      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        error={state?.errors?.email}
        autoComplete="email"
        required
      />

      <Input
        name="password"
        label="Mot de passe"
        type="password"
        placeholder="••••••••"
        error={state?.errors?.password}
        autoComplete={isRegister ? "new-password" : "current-password"}
        required
      />

      {state?.message && (
        <div className="rounded-2xl border border-red-200 bg-red-50/80 p-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      <div className="pt-2">
        <SubmitButton isRegister={isRegister} />
      </div>
    </form>
  );
}
