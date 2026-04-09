"use server";

import { redirect } from "next/navigation";
import { createSession, clearSession } from "@/lib/auth/session";
import { authService } from "@/lib/services/auth-service";
import type { AuthActionState, ApiError } from "@/lib/auth/types";
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

  try {
    const response = await authService.login(values.email, values.password);

    // Créer la session avec le token du CMS
    await createSession({
      email: response.user.email,
      name: response.user.name,
      token: response.auth.token,
      expiresAt: Date.now() + response.auth.expiresIn * 1000,
    });

    redirect("/dashboard");
  } catch (error) {
    const apiError = error as unknown as ApiError;
    return {
      message: apiError?.message || "Erreur lors de la connexion. Réessaye.",
    };
  }
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

  try {
    const response = await authService.register(
      values.name,
      values.email,
      values.password,
    );

    // Créer la session avec le token du CMS
    await createSession({
      email: response.user.email,
      name: response.user.name,
      token: response.auth.token,
      expiresAt: Date.now() + response.auth.expiresIn * 1000,
    });

    redirect("/dashboard");
  } catch (error) {
    const apiError = error as unknown as ApiError;
    return {
      message: apiError?.message || "Erreur lors de l'inscription. Réessaye.",
    };
  }
}

export async function logoutAction(): Promise<void> {
  await clearSession();
  redirect("/login");
}
