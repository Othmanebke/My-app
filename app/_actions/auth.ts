"use server";

import { redirect } from "next/navigation";
import { createSession, clearSession } from "@/lib/auth/session";
import type { AuthActionState } from "@/lib/auth/types";
import {
  hasValidationErrors,
  validateLoginInput,
  validateRegisterInput,
} from "@/lib/auth/validation";

export async function loginAction(
  _state: AuthActionState | undefined,
  formData: FormData,
): Promise<AuthActionState | undefined> {
  const { values, errors } = validateLoginInput(formData);

  if (hasValidationErrors(errors)) {
    return {
      errors,
      message: "Corrige les champs avant de continuer.",
    };
  }

  await createSession({
    email: values.email,
    name: values.email.split("@")[0],
  });

  redirect("/dashboard");
}

export async function registerAction(
  _state: AuthActionState | undefined,
  formData: FormData,
): Promise<AuthActionState | undefined> {
  const { values, errors } = validateRegisterInput(formData);

  if (hasValidationErrors(errors)) {
    return {
      errors,
      message: "Corrige les champs avant de continuer.",
    };
  }

  // Placeholder: brancher ici la creation utilisateur en base (Prisma/Drizzle/etc.)
  await createSession({
    email: values.email,
    name: values.name,
  });

  redirect("/dashboard");
}

export async function logoutAction(): Promise<void> {
  await clearSession();
  redirect("/login");
}
