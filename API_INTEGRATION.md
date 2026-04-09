# Guide Intégration CMS - SPRINT 2

Cette doc explique comment brancher ton CMS réel au service auth.

## 1️⃣ Configuration générale

### Fichier `.env.local` (à créer)
```bash
NEXT_PUBLIC_API_URL=https://ton-cms.com/api
AUTH_API_TOKEN=ton-token-secret
```

## 2️⃣ Service Strapi (recommandé pour learning)

### Adapter `lib/services/auth-service.ts`

```typescript
async login(email: string, password: string): Promise<LoginResponse> {
  // Remplace le mock par:
  const data = await this.fetchApi<{
    jwt: string;
    user: { id: string; email: string; username: string }
  }>("/auth/local", {
    method: "POST",
    body: JSON.stringify({ identifier: email, password }),
  });

  return {
    user: {
      id: data.user.id,
      email: data.user.email,
      name: data.user.username,
      createdAt: new Date().toISOString(),
    },
    auth: {
      token: data.jwt,
      expiresIn: 604800, // 7 jours
    },
  };
}
```

### Pour Register:
```typescript
async register(name: string, email: string, password: string): Promise<RegisterResponse> {
  const data = await this.fetchApi<{
    jwt: string;
    user: { id: string; email: string }
  }>("/auth/local/register", {
    method: "POST",
    body: JSON.stringify({
      username: name,
      email,
      password,
    }),
  });

  return {
    user: {
      id: data.user.id,
      email: data.user.email,
      name,
      createdAt: new Date().toISOString(),
    },
    auth: {
      token: data.jwt,
      expiresIn: 604800,
    },
  };
}
```

## 3️⃣ Service Firebase

```typescript
async login(email: string, password: string): Promise<LoginResponse> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const data = await this.fetchApi<{ idToken: string; localId: string }>(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    }
  );

  return {
    user: {
      id: data.localId,
      email,
      name: email.split("@")[0],
      createdAt: new Date().toISOString(),
    },
    auth: {
      token: data.idToken,
      expiresIn: 3600,
    },
  };
}
```

## 4️⃣ Vérifier le branchement

### Tester Login avec mock
```bash
pnpm dev
# Aller à http://localhost:3009/login
# Email: test@example.com
# Mot de passe: password123
# Cliquer "Se connecter"
# → Doit rediriger à /dashboard
```

### Tester avec vrai CMS
1. Adapter le service selon ton CMS
2. Mettre les credentials dans `.env.local`
3. Tester login/register
4. Vérifier le token en cookie: F12 → Application → Cookies → `next-session`

## 5️⃣ Troubleshooting

### Erreur "NETWORK_ERROR"
- Vérifie que ton API est accessible
- Vérifie `NEXT_PUBLIC_API_URL`
- Regarde les logs du serveur

### Erreur "HTTP_401"
- Credentials invalides
- Utilisateur n'existe pas

### Token pas en cookie
- Vérifier que `createSession()` est appelé
- Vérifier les headers Set-Cookie en F12
