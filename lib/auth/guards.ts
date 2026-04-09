import { redirect } from "next/navigation";
import { clearSession, getSession } from "@/lib/auth/session";
import { authService } from "@/lib/services/auth-service";
import type { SessionPayload } from "@/lib/auth/types";

export async function requireSession(): Promise<SessionPayload> {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  if (session.token) {
    const verification = await authService.verifyToken(session.token);

    if (!verification.valid) {
      await clearSession();
      redirect("/login");
    }
  }

  return session;
}
