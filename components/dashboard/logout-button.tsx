import { logoutAction } from "@/app/_actions/auth";

export function LogoutButton(): JSX.Element {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-950 hover:text-zinc-950"
      >
        Se deconnecter
      </button>
    </form>
  );
}
