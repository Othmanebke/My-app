## Next.js 16 Senior-Style Architecture

Base propre App Router avec:

- `login` et `register` via Server Actions
- `dashboard` protege
- `proxy.ts` (convention Next.js 16) pour les redirections d'auth
- couche auth dediee dans `lib/auth`
- composants reutilisables dans `components/auth`

## Structure

```text
app/
	_actions/
		auth.ts
	(public)/
		login/page.tsx
		register/page.tsx
	(protected)/
		dashboard/page.tsx
components/
	auth/
	dashboard/
lib/
	auth/
proxy.ts
```

## Demarrage

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

Flux attendu:

1. `/login` ou `/register`
2. creation de session (cookie httpOnly)
3. redirection vers `/dashboard`
4. acces dashboard refuse si non connecte

## Notes importantes

- Le stockage utilisateur est un placeholder (pas encore branche a une base).
- Pour la prod: brancher Prisma/Drizzle + hash de mot de passe + provider OAuth.
- Next.js 16 remplace `middleware.ts` par `proxy.ts`.

## Utiliser Strapi (recommande)

1. Creer un fichier `.env.local` a la racine avec:

```bash
AUTH_PROVIDER=strapi
AUTH_API_BASE_URL=http://localhost:1337/api
```

2. Dans Strapi, activer le plugin `Users & Permissions` (par defaut).
3. Verifier les endpoints publics:
	- `POST /api/auth/local`
	- `POST /api/auth/local/register`
4. Lancer Strapi puis cette app.
5. Tester `register` puis `login`.

Le dashboard valide ensuite le token via `GET /api/users/me` cote serveur.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
