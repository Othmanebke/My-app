import { AuthShell } from "@/components/auth/auth-shell";
import { AuthForm } from "@/components/auth/auth-form";
import { registerAction } from "@/app/_actions/auth";

export default function RegisterPage(): JSX.Element {
  return (
    <AuthShell
      title="Inscription"
      subtitle="Creer ton compte et acceder directement au dashboard."
      footerText="Tu as deja un compte ?"
      footerLinkLabel="Connexion"
      footerHref="/login"
    >
      <AuthForm variant="register" action={registerAction} />
    </AuthShell>
  );
}
