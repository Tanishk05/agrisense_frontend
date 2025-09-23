import { signOut } from "@/auth";

export default function LogoutBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit" className="w-full bg-lime-400 text-black py-4 rounded-lg text-lg font-bold">
        Logout
      </button>
    </form>
  );
}
