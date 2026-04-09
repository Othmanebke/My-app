# Test E2E - SPRINT 2

Procédure pour tester le flux d'authentification complet end-to-end.

## ✅ Pré-requis

- [ ] Serveur Next.js en cours d'exécution: `pnpm dev`
- [ ] Accès à http://localhost:3009
- [ ] Navigateur avec DevTools (F12)

## 🧪 Scénarios de test

### Test 1: Accès page d'accueil
```
1. Ouvrir http://localhost:3009
2. Vérifier que la page charge → ✅
3. Cliquer "Se connecter"
4. Vérifier redirection vers /login → ✅
```

### Test 2: Login (sans token)
```
1. Aller à http://localhost:3009/login
2. Remplir le formulaire:
   - Email: test@example.com
   - Mot de passe: password123
3. Cliquer "Se connecter"
4. Vérifier:
   - Spinner s'affiche → ✅
   - Redirection vers /dashboard → ✅
   - Cookie créé: F12 → Application → Cookies → next-session → ✅
```

### Test 3: Proxy middleware (avec token)
```
1. Après login, revenir à http://localhost:3009/login
2. Vérifier:
   - Redirection automatique vers /dashboard → ✅
   - Pas d'accès à /login possible → ✅
```

### Test 4: Dashboard accessible
```
1. À http://localhost:3009/dashboard
2. Vérifier:
   - Sidebar visible → ✅
   - Contenu dashboard visible → ✅
   - Email utilisateur affiché → ✅
```

### Test 5: Logout
```
1. Cliquer "Se déconnecter" en bas du sidebar
2. Vérifier:
   - Cookie supprimé: F12 → Application → Cookies (vide) → ✅
   - Redirection vers /login → ✅
   - Accès /dashboard bloqué, redir /login → ✅
```

### Test 6: Register
```
1. Aller à http://localhost:3009/register
2. Remplir:
   - Nom complet: John Doe
   - Email: newuser@example.com
   - Mot de passe: password123
3. Cliquer "Créer mon compte"
4. Vérifier:
   - Spinner s'affiche → ✅
   - Redirection /dashboard → ✅
   - Nouveau cookie créé → ✅
   - Dashboard montre le nouvel email → ✅
```

## 🔍 Vérifications Chrome DevTools

### Cookies
```
F12 → Application → Cookies → http://localhost:3009
- Name: next-session
- Value: base64url(JSON)
- HttpOnly: ✅ (coché)
- Secure: ❌ (en dev)
- SameSite: Lax
```

### Network
```
F12 → Network → XHR
1. POST /login ou /register
   - Status: 303 (redirect)
   - Headers: Set-Cookie: next-session=...
2. GET /dashboard
   - Status: 200
   - Cookie auto-envoyé dans Authorization
```

### Console
```
F12 → Console
- Pas d'erreurs rouges → ✅
- Pas d'avertissements CORS → ✅
```

## 🐛 Troubleshooting

### Login retourne erreur
- [ ] Vérifier console pour erreur API
- [ ] Check que auth-service retourne mock correctement
- [ ] Vérifier createSession() fonctionne

### Cookie pas créé
- [ ] Vérifier que createSession() est appelé
- [ ] Vérifier httpOnly n'empêche pas la création
- [ ] Vérifier sameSite=lax permissions

### Proxy redirect pas fonctionnel
- [ ] Vérifier proxy.ts matcher: ["/login", "/register", "/dashboard/:path*"]
- [ ] Vérifier SESSION_COOKIE_NAME = "next-session"
- [ ] Tester avec curl: `curl -b "next-session=value" http://localhost:3009/login`

## ✨ Résumé checklist

- [ ] Test 1: Page d'accueil accessible
- [ ] Test 2: Login fonctionne
- [ ] Test 3: Proxy redirige login vers dashboard
- [ ] Test 4: Dashboard visible avec token
- [ ] Test 5: Logout nettoie cookie
- [ ] Test 6: Register fonctionne
- [ ] Cookies httpOnly correctement set
- [ ] Pas d'erreurs console
