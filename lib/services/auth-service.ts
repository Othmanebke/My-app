/**
 * Service d'authentification pour communiquer avec le CMS headless
 * Multi-provider: mock | strapi | custom
 */

import type { LoginResponse, RegisterResponse, ApiError } from "@/lib/api/types";

type AuthProvider = "mock" | "strapi" | "custom";

const AUTH_PROVIDER_RAW = (process.env.AUTH_PROVIDER ?? "mock").toLowerCase();
const AUTH_PROVIDER: AuthProvider =
  AUTH_PROVIDER_RAW === "strapi" || AUTH_PROVIDER_RAW === "custom"
    ? AUTH_PROVIDER_RAW
    : "mock";
const API_BASE_URL = process.env.AUTH_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "";
const AUTH_API_TOKEN = process.env.AUTH_API_TOKEN;

type StrapiAuthPayload = {
  jwt: string;
  user: {
    id: number | string;
    email: string;
    username?: string;
  };
};

/**
 * Classe pour gérer les appels API avec gestion d'erreurs
 */
class AuthService {
  private baseUrl: string;
  private provider: AuthProvider;
  private apiToken?: string;

  constructor(baseUrl: string = API_BASE_URL, provider: AuthProvider = AUTH_PROVIDER, apiToken?: string) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
    this.provider = provider;
    this.apiToken = apiToken;
  }

  private ensureBaseUrl(): void {
    if (!this.baseUrl && this.provider !== "mock") {
      throw {
        code: "CONFIG_ERROR",
        message: "AUTH_API_BASE_URL manquant. Configure ton endpoint API dans .env.local.",
      } as ApiError;
    }
  }

  /**
   * Effectue un appel API avec gestion d'erreurs standard
   */
  private async fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    this.ensureBaseUrl();

    const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${this.baseUrl}${path}`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(this.apiToken ? { Authorization: `Bearer ${this.apiToken}` } : {}),
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        headers,
        cache: "no-store",
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        // Format Strapi v4/v5: { error: { status, name, message, details } }
        const strapiError =
          typeof errorData === "object" && errorData !== null && "error" in errorData
            ? (errorData as { error?: { name?: string; message?: string; details?: Record<string, string> } }).error
            : undefined;

        const error: ApiError = {
          code: strapiError?.name ?? `HTTP_${response.status}`,
          message: strapiError?.message ?? (errorData as { message?: string }).message ?? `Erreur serveur: ${response.status}`,
          details: strapiError?.details ?? (errorData as { details?: Record<string, string> }).details,
        };
        throw error;
      }

      return await response.json();
    } catch (error) {
      if (typeof error === "object" && error !== null && "code" in error) {
        throw error as ApiError;
      }

      if (error instanceof TypeError) {
        throw {
          code: "NETWORK_ERROR",
          message: "Erreur de connexion. Vérifie ta connexion internet.",
        } as ApiError;
      }

      throw {
        code: "UNKNOWN_ERROR",
        message: "Une erreur inconnue s'est produite.",
      } as ApiError;
    }
  }

  private mockLogin(email: string): LoginResponse {
    return {
      user: {
        id: "user-123",
        email,
        name: email.split("@")[0],
        createdAt: new Date().toISOString(),
      },
      auth: {
        token: `mock-token-${Date.now()}`,
        expiresIn: 86400,
      },
    };
  }

  private mockRegister(name: string, email: string): RegisterResponse {
    return {
      user: {
        id: `user-${Date.now()}`,
        email,
        name,
        createdAt: new Date().toISOString(),
      },
      auth: {
        token: `mock-token-${Date.now()}`,
        expiresIn: 86400,
      },
    };
  }

  private toAuthResponse(payload: StrapiAuthPayload): LoginResponse {
    return {
      user: {
        id: String(payload.user.id),
        email: payload.user.email,
        name: payload.user.username ?? payload.user.email.split("@")[0],
        createdAt: new Date().toISOString(),
      },
      auth: {
        token: payload.jwt,
        expiresIn: 60 * 60 * 24,
      },
    };
  }

  /**
   * Login utilisateur
   * À adapter selon l'endpoint réel de ton CMS
   */
  async login(email: string, password: string): Promise<LoginResponse> {
    if (this.provider === "mock") {
      return this.mockLogin(email);
    }

    if (this.provider === "strapi") {
      const data = await this.fetchApi<StrapiAuthPayload>("/auth/local", {
        method: "POST",
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });

      return this.toAuthResponse(data);
    }

    return this.fetchApi<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  /**
   * Register nouvel utilisateur
   * À adapter selon l'endpoint réel de ton CMS
   */
  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<RegisterResponse> {
    if (this.provider === "mock") {
      return this.mockRegister(name, email);
    }

    if (this.provider === "strapi") {
      const data = await this.fetchApi<StrapiAuthPayload>("/auth/local/register", {
        method: "POST",
        body: JSON.stringify({
          username: name,
          email,
          password,
        }),
      });

      return this.toAuthResponse(data);
    }

    return this.fetchApi<RegisterResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  }

  /**
   * Vérifie la validité d'un token auprès du CMS
   */
  async verifyToken(token: string): Promise<{ valid: boolean; user?: Record<string, unknown> }> {
    if (this.provider === "mock") {
      return token.startsWith("mock-token-")
        ? { valid: true, user: { id: "user-123", email: "user@example.com" } }
        : { valid: false };
    }

    if (this.provider === "strapi") {
      try {
        const user = await this.fetchApi<Record<string, unknown>>("/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return { valid: true, user };
      } catch {
        return { valid: false };
      }
    }

    try {
      const data = await this.fetchApi<{ valid: boolean; user?: Record<string, unknown> }>("/auth/verify", {
        method: "POST",
        body: JSON.stringify({ token }),
      });

      return data;
    } catch {
      return { valid: false };
    }
  }
}

export const authService = new AuthService(API_BASE_URL, AUTH_PROVIDER, AUTH_API_TOKEN);
