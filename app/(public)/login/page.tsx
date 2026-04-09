import { AuthShell } from "@/components/auth/auth-shell";
import { AuthForm } from "@/components/auth/auth-form";
import { loginAction } from "@/app/_actions/auth";

export default function LoginPage(): JSX.Element {
  return (
    <AuthShell
      title="Connexion"
      subtitle="Accede au dashboard securise de ton application."
      footerText="Pas encore de compte ?"
      footerLinkLabel="Inscription"
      footerHref="/register"
    >
      <AuthForm variant="login" action={loginAction} />
    </AuthShell>
  );
}
 