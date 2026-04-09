export type FieldErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export type AuthActionState = {
  errors?: FieldErrors;
  message?: string;
};

export type SessionPayload = {
  userId?: string;
  email: string;
  name?: string;
  token?: string; // Token du CMS (optionnel)
  expiresAt?: number; // Timestamp d'expiration (ms)
};

// Re-export API types
export type { ApiError } from "@/lib/api/types";
