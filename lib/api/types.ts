/**
 * Types pour les réponses API (CMS headless)
 * À adapter selon ton CMS réel (Strapi, Hygraph, Firebase, etc.)
 */

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
};

export type AuthTokenResponse = {
  token: string;
  refreshToken?: string;
  expiresIn: number; // en secondes
};

export type UserData = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
};

export type LoginResponse = {
  user: UserData;
  auth: AuthTokenResponse;
};

export type RegisterResponse = {
  user: UserData;
  auth: AuthTokenResponse;
};

export type ApiError = {
  code: string;
  message: string;
  details?: Record<string, string>;
};
