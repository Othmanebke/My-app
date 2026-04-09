"use server";

import { redirect } from "next/navigation";
import { createSession, clearSession } from "@/lib/auth/session";
import { authService } from "@/lib/services/auth-service";
import type { AuthActionState, ApiError, FieldErrors } from "@/lib/auth/types";
import {
  hasValidationErrors,
  validateLoginInput,
  validateRegisterInput,
} from "@/lib/auth/validation";

function mapAuthApiError(apiError: ApiError, mode: "login" | "register"): AuthActionState {
  const code = (apiError.code ?? "").toLowerCase();
  const rawMessage = apiError.message ?? "";
  const message = rawMessage.toLowerCase();
  const errors: FieldErrors = {};

  if (code === "config_error") {
    return {
      message: "Configuration serveur invalide. Vérifie AUTH_PROVIDER et AUTH_API_BASE_URL.",
    };
  }

  if (code === "network_error") {
    return {
      message: "Impossible de joindre Strapi. Vérifie que le backend est lancé.",
    };
  }

  if (code === "unauthorizederror" || code === "http_401" || message.includes("invalid identifier") || message.includes("invalid credentials")) {
    errors.email = "Email ou mot de passe incorrect.";
    errors.password = "Email ou mot de passe incorrect.";
    return {
      errors,
      message: "Identifiants invalides.",
    };
  }

  if (code === "validationerror" || message.includes("already") || message.includes("already taken") || message.includes("already exists") || message.includes("email is already")) {
    errors.email = "Cet email est déjà utilisé.";
    return {
      errors,
      message: "Cet email est déjà utilisé.",
    };
  }

  if (message.includes("blocked") || message.includes("disabled")) {
    return {
      message: "Ce compte est désactivé. Contacte l'administrateur.",
    };
  }

  if (code === "http_429") {
    return {
      message: "Trop de tentatives. Réessaie dans quelques minutes.",
    };
  }

  if (code === "http_500" || code === "http_502" || code === "http_503") {
    return {
      message: "Le service d'authentification est momentanément indisponible.",
    };
  }

  return {
    message:
      mode === "login"
        ? "Erreur lors de la connexion. Réessaye."
        : "Erreur lors de l'inscription. Réessaye.",
  };
}

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

  let response;

  try {
    response = await authService.login(values.email, values.password);
  } catch (error) {
    const apiError = error as unknown as ApiError;
    return mapAuthApiError(apiError, "login");
  }

  // Créer la session avec le token du CMS
  await createSession({
    userId: response.user.id,
    email: response.user.email,
    name: response.user.name,
    token: response.auth.token,
    expiresAt: Date.now() + response.auth.expiresIn * 1000,
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

  let response;

  try {
    response = await authService.register(
      values.name,
      values.email,
      values.password,
    );
  } catch (error) {
    const apiError = error as unknown as ApiError;
    return mapAuthApiError(apiError, "register");
  }

  // Créer la session avec le token du CMS
  await createSession({
    userId: response.user.id,
    email: response.user.email,
    name: response.user.name,
    token: response.auth.token,
    expiresAt: Date.now() + response.auth.expiresIn * 1000,
  });

  redirect("/dashboard");
}

export async function logoutAction(): Promise<void> {
  await clearSession();
  redirect("/login");
}
