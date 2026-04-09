import type { FieldErrors } from "@/lib/auth/types";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isStrongEnoughPassword(value: string): boolean {
  return value.length >= 8;
}

export function validateLoginInput(formData: FormData): {
  values: { email: string; password: string };
  errors: FieldErrors;
} {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  const errors: FieldErrors = {};

  if (!isValidEmail(email)) {
    errors.email = "Entre une adresse email valide.";
  }

  if (!isStrongEnoughPassword(password)) {
    errors.password = "Le mot de passe doit contenir au moins 8 caracteres.";
  }

  return { values: { email, password }, errors };
}

export function validateRegisterInput(formData: FormData): {
  values: { name: string; email: string; password: string };
  errors: FieldErrors;
} {
  const name = String(formData.get("name") ?? "").trim();
  const { values, errors } = validateLoginInput(formData);

  if (name.length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caracteres.";
  }

  return { values: { name, ...values }, errors };
}

export function hasValidationErrors(errors: FieldErrors): boolean {
  return Object.values(errors).some(Boolean);
}
