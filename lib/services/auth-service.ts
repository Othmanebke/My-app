/**
 * Service d'authentification pour communiquer avec le CMS headless
 * À adapter avec les endpoints réels de ton CMS
 * 
 * Exemples de CMS supportés:
 * - Strapi: https://your-api.com/api/auth/local
 * - Hygraph: https://api.hygraph.com/graphql
 * - Firebase: https://identitytoolkit.googleapis.com
 * - Custom API: TON_ENDPOINT
 */

import type { LoginResponse, RegisterResponse, ApiError } from "@/lib/api/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

/**
 * Classe pour gérer les appels API avec gestion d'erreurs
 */
class AuthService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Effectue un appel API avec gestion d'erreurs standard
   */
  private async fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error: ApiError = {
          code: `HTTP_${response.status}`,
          message: errorData.message || `Erreur serveur: ${response.status}`,
          details: errorData.details,
        };
        throw error;
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error && "code" in error) {
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

  /**
   * Login utilisateur
   * À adapter selon l'endpoint réel de ton CMS
   */
  async login(email: string, password: string): Promise<LoginResponse> {
    // TODO: Adapter cet appel à ton CMS réel
    // Exemple Strapi: POST /api/auth/local
    // Exemple Firebase: POST /identitytoolkit/..

    // Pour le moment, retourner un mock pour tester
    // À remplacer par un vrai appel:
    // return this.fetchApi<LoginResponse>('/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // });

    // MOCK - À supprimer une fois le CMS connecté
    return {
      user: {
        id: "user-123",
        email,
        name: email.split("@")[0],
        createdAt: new Date().toISOString(),
      },
      auth: {
        token: `mock-token-${Date.now()}`,
        expiresIn: 86400, // 24h
      },
    };
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
    // TODO: Adapter cet appel à ton CMS réel
    // Exemple Strapi: POST /api/auth/local/register
    // Exemple Firebase: POST /identitytoolkit/..

    // Pour le moment, retourner un mock pour tester
    // À remplacer par un vrai appel:
    // return this.fetchApi<RegisterResponse>('/auth/register', {
    //   method: 'POST',
    //   body: JSON.stringify({ name, email, password }),
    // });

    // MOCK - À supprimer une fois le CMS connecté
    return {
      user: {
        id: "user-" + Date.now(),
        email,
        name,
        createdAt: new Date().toISOString(),
      },
      auth: {
        token: `mock-token-${Date.now()}`,
        expiresIn: 86400, // 24h
      },
    };
  }

  /**
   * Vérifie la validité d'un token auprès du CMS
   */
  async verifyToken(token: string): Promise<{ valid: boolean; user?: Record<string, unknown> }> {
    // TODO: À adapter selon ton CMS
    // Exemple: Strapi GET /api/users/me avec le token dans Authorization header

    // MOCK
    if (!token.startsWith("mock-token-")) {
      return { valid: false };
    }

    return {
      valid: true,
      user: { id: "user-123", email: "user@example.com" },
    };
  }
}

export const authService = new AuthService();
