import { logoutAction } from "@/app/_actions/auth";

export function LogoutButton(): JSX.Element {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-900 hover:text-zinc-900"
      >
        Se deconnecter
      </button>
    </form>
  );
}
